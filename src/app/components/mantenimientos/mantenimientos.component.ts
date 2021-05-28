import { Component, OnInit } from '@angular/core';
import { Mantenimiento } from './models/mantenimiento';
import { OperarioService } from '../operarios/operario.service';
import { ActivatedRoute ,Router} from '@angular/router';
import { FormControl } from '@angular/forms';
import { Observable } from 'rxjs';
import { startWith, map, flatMap } from 'rxjs/operators';
import { MantenimientoService } from './services/mantenimiento.service';
import { Insumo } from './models/insumo';
import {MatAutocompleteSelectedEvent} from '@angular/material/autocomplete';
import { ItemMantenimiento } from './models/item-mantenimiento';
import swal from 'sweetalert2';
import { Operarios } from '../operarios/operarios';
import { OperariosComponent } from '../operarios/operarios.component';
import { OperarioMantenimiento } from './models/operario-mantenimiento';


@Component({
  selector: 'app-mantenimientos',
  templateUrl: './mantenimientos.component.html'
})
export class MantenimientosComponent implements OnInit {

  titulo: string = "Nuevo mantenimiento";
  public mantenimiento: Mantenimiento = new Mantenimiento();


  public autocompleteControl = new FormControl();
  public controlOp = new FormControl();


  public insumosFiltrados: Observable<Insumo[]>;
public operariosFiltrados:Observable<Operarios[]>;

  constructor(private operarioService: OperarioService,
    private activatedRoute: ActivatedRoute,
    private mantenimientoService:MantenimientoService,
    private router:Router) { }

  ngOnInit(): void {
    this.activatedRoute.paramMap.subscribe(params => {
      let operarioId = +params.get('operarioId');
      this.operarioService.getOperario(operarioId).subscribe(operario => this.mantenimiento.operario = operario);
    });

    this.insumosFiltrados = this.autocompleteControl.valueChanges
      .pipe(
        map(value=>typeof value ==='string'? value: value.nombre),

        flatMap(value => value ? this._filter(value):[])

      );

     this.operariosFiltrados = this.controlOp.valueChanges
        .pipe(
          map(value=>typeof value ==='string'? value: value.nombre),
          flatMap(value => value ? this._filterOpe(value):[])

        );



  }


  private _filter(value: string):Observable<Insumo[]> {
    const filterValue = value.toLowerCase();

    return this.mantenimientoService.filtrarInsumos(filterValue);
  }

  private _filterOpe(value: string):Observable<Operarios[]>{
    const filterValueOp = value.toLowerCase();

    return this.operarioService.filtrarOperarios(filterValueOp);
  }

  mostrarNombre(insumo?:Insumo):string | undefined{
    return insumo? insumo.nombre: undefined;

  }

  mostrarNombreOperario(operario?:Operarios):string | undefined{
    return operario? operario.nombre: undefined;

  }

  seleccionarInsumo(event: MatAutocompleteSelectedEvent):void{
    let insumo =  event.option.value as Insumo;

    if(this.existeItem(insumo.id)){
      this.incrementarCantidad(insumo.id);
    }
    else{
      let nuevoItem =  new ItemMantenimiento();
      nuevoItem.insumo = insumo;
      this.mantenimiento.items.push(nuevoItem);


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
    this.mantenimiento.items = this.mantenimiento.items.map((item:ItemMantenimiento)=>{

      if(id===item.insumo.id){
        item.cantidad= cantidad;
      }
      return item;
    })


  }


  existeItem(id:number):boolean{
    let existe=false;
    this.mantenimiento.items.forEach((item:ItemMantenimiento)=>{
      if(id===item.insumo.id)
      existe=true;
    });
    return existe;



  }
  incrementarCantidad(id:number):void{
    this.mantenimiento.items = this.mantenimiento.items.map((item:ItemMantenimiento)=>{

      if(id===item.insumo.id){
        ++item.cantidad;
      }
      return item;
    })



  }
  eliminarItemFactura(id:number):void{
    this.mantenimiento.items = this.mantenimiento.items.filter((item:ItemMantenimiento)=> id!==item.insumo.id);



  }
    create():void{
      console.log(this.mantenimiento);
      this.mantenimientoService.create(this.mantenimiento).subscribe(mantenimiento=>{
        swal(this.titulo,`Mantenimiento ${mantenimiento.descripcion} creado con exito!` ,'success');
        this.router.navigate(['/operarios']);


      });


    }

    seleccionarOperario(event: MatAutocompleteSelectedEvent):void{
      let opecito = event.option.value as Operarios;
      console.log(opecito);

      let nuevoOp = new OperarioMantenimiento();
      nuevoOp.opecito = opecito;
      this.mantenimiento.opecitos.push(nuevoOp);

      this.controlOp.setValue('');
      event.option.focus();
      event.option.deselect();

      console.log(nuevoOp);

    }



}
