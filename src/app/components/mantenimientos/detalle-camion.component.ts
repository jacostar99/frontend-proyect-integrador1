import { Component, OnInit } from '@angular/core';
import {MantenimientoCamionService} from './services/mantenimientoCamion.service';
import {MantenimientoCami} from './models/mantenimientoCamion';
import {ActivatedRoute} from '@angular/router';
import { OperarioMantenimiento } from './models/operario-mantenimiento';

@Component({
  selector: 'app-detalle-mantenimiento',
  templateUrl: './detalle-camion.component.html'
})
export class DetalleCamionComponent implements OnInit {

  public mantenimiento:MantenimientoCami;
  titulo:string="Solicitud";
  constructor(private mantenimientoService:MantenimientoCamionService,private activatedRoute:ActivatedRoute) { }

  ngOnInit(){
    this.activatedRoute.paramMap.subscribe(params =>{
      let id = +params.get('id');
      this.mantenimientoService.getMantenimiento(id).subscribe(mantenimiento =>this.mantenimiento=mantenimiento);



    });

  }

}
