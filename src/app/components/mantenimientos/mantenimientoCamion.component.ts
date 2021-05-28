import { MantenimientoCami } from './models/mantenimientoCamion';
import { OperarioService } from '../operarios/operario.service';
import { ActivatedRoute ,Router} from '@angular/router';
import { FormControl } from '@angular/forms';
import { Observable } from 'rxjs';
import { startWith, map, flatMap } from 'rxjs/operators';
import { MantenimientoCamionService } from './services/mantenimientoCamion.service';
import { Insumo } from './models/insumo';
import {MatAutocompleteSelectedEvent} from '@angular/material/autocomplete';
import { ItemMantenimiento } from './models/item-mantenimiento';
import swal from 'sweetalert2';
import { Component , OnInit} from '@angular/core';


@Component({
  selector: 'app-mantenimientosC',
  templateUrl: './mantenimientoCamion.component.html'
})
export class MantenimientosCamionComponent implements OnInit {

  titulo: string = "Solicitud de servicio para camion";
  mantenimientoC: MantenimientoCami = new MantenimientoCami();

  autocompleteControl = new FormControl();

  insumosFiltrados: Observable<Insumo[]>;

  constructor(private operarioService: OperarioService,
    private activatedRoute: ActivatedRoute,
    private mantenimientoService:MantenimientoCamionService,
    private router:Router) { }

  ngOnInit(): void {
    this.activatedRoute.paramMap.subscribe(params => {
      let operarioId = +params.get('operarioId');
    });

    this.insumosFiltrados = this.autocompleteControl.valueChanges
      .pipe(
        map(value=>typeof value ==='string'? value: value.nombre),

        flatMap(value => value ? this._filter(value):[])
      );

  }


  private _filter(value: string):Observable<Insumo[]> {
    const filterValue = value.toLowerCase();

    return this.mantenimientoService.filtrarInsumos(filterValue);
  }

  mostrarNombre(insumo?:Insumo):string | undefined{
    return insumo? insumo.nombre: undefined;

  }

  seleccionarInsumo(event: MatAutocompleteSelectedEvent):void{
    let insumo =  event.option.value as Insumo;

    if(this.existeItem(insumo.id)){
      this.incrementarCantidad(insumo.id);
    }
    else{
      let nuevoItem =  new ItemMantenimiento();
      nuevoItem.insumo = insumo;
      this.mantenimientoC.items.push(nuevoItem);


    }

    this.autocompleteControl.setValue('');
    event.option.focus();
    event.option.deselect();

  }
  actualizarCantidad(id:number,event:any):void{
    let cantidad:number =event.target.value as number;
    if(cantidad==0){
      return this.eliminarItemFactura(id);
    }
    this.mantenimientoC.items = this.mantenimientoC.items.map((item:ItemMantenimiento)=>{

      if(id===item.insumo.id){
        item.cantidad= cantidad;
      }
      return item;
    })


  }


  existeItem(id:number):boolean{
    let existe=false;
    this.mantenimientoC.items.forEach((item:ItemMantenimiento)=>{
      if(id===item.insumo.id)
      existe=true;
    });
    return existe;



  }
  incrementarCantidad(id:number):void{
    this.mantenimientoC.items = this.mantenimientoC.items.map((item:ItemMantenimiento)=>{

      if(id===item.insumo.id){
        ++item.cantidad;
      }
      return item;
    })



  }
  eliminarItemFactura(id:number):void{
    this.mantenimientoC.items = this.mantenimientoC.items.filter((item:ItemMantenimiento)=> id!==item.insumo.id);



  }
    create():void{
      console.log(this.mantenimientoC);
      this.mantenimientoService.create(this.mantenimientoC).subscribe(mantenimientoC=>{
        swal(`Solicitud enviada con exito!` ,'success');
        this.router.navigate(['/operarios']);


      });


    }



}
