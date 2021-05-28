import { Component, OnInit } from '@angular/core';
import {MantenimientoService} from './services/mantenimiento.service';
import {Mantenimiento} from './models/mantenimiento';
import {ActivatedRoute} from '@angular/router';



@Component({
  selector: 'app-detalle-mantenimiento',
  templateUrl: './detalle-mantenimiento.component.html'
})
export class DetalleMantenimientoComponent implements OnInit {

  public mantenimiento:Mantenimiento;
  titulo:string="Mantenimiento";
  constructor(private mantenimientoService:MantenimientoService,private activatedRoute:ActivatedRoute) { }

  ngOnInit(){
    this.activatedRoute.paramMap.subscribe(params =>{
      let id = +params.get('id');
      this.mantenimientoService.getMantenimiento(id).subscribe(mantenimiento =>this.mantenimiento=mantenimiento);



    });

  }

}
