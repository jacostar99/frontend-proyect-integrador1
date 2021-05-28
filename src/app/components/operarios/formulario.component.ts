import {Component , OnInit} from '@angular/core';
import {Operarios} from './operarios'
import {OperarioService} from './operario.service'
import {Router , ActivatedRoute} from '@angular/router'
import swal from 'sweetalert2'
import { Region } from './region';




@Component({
  selector: 'app-formulario',
  templateUrl: './formulario.component.html'

})

export class FormularioComponent implements OnInit {
     regiones:Region[];

     operario: Operarios = new Operarios ()
     titulo:string ="Crear operario"
     errores:string[];
    constructor(  private operarioService : OperarioService,
    private router:Router,
    private activatedRoute:ActivatedRoute
  ){}

     ngOnInit(){
       this.cargarCliente()
     }
     cargarCliente():void{
       this.activatedRoute.params.subscribe(params =>{
         let id = params['id']
         if(id){
           this.operarioService.getOperario(id).subscribe((operario)=>this.operario = operario)
         }
       });
       this.operarioService.getRegiones().subscribe(regiones=>this.regiones=regiones);
     }
     public create(): void {
       this.operarioService.create(this.operario)
       .subscribe(operario => {
         this.router.navigate(['/operarios']) //Con esto me redirige a la ruta de operarios y me muestra las lista con los cambios
          swal('Nuevo operario', `Operario ${this.operario.nombre} creado con exito!` , 'success')
       },
       err=>{
         this.errores=err.error.errors as string[];
         console.error(err.error.errors);
       }

       )

     }

     update():void{
       this.operario.mantenimientos=null;
       this.operarioService.update(this.operario).
       subscribe(operario=>{
         this.router.navigate(['/operarios']) //Con esto me redirige a la ruta de operarios y me muestra las lista con los cambios
          swal('Operario actualizado', `Operario ${this.operario.nombre} actualizado con exito!` , 'success')

       }, err=>{
          this.errores=err.error.errors as string[];
          console.error(err.error.errors);
        }
     )
   }

   compararRegion(o1:Region ,o2:Region){
     if(o1===undefined && o2===undefined){
       return true;
     }
     return o1==null || o2==null? false: o1.id===o2.id;


   }

}
