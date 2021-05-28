import { Component, OnInit } from '@angular/core';
import {ActivatedRoute} from '@angular/router';
import {InsumosService} from '../insumos/servicios/insumos.servicios';

@Component({
  selector: 'app-insumo',
  templateUrl: './insumo.component.html'
})
export class InsumoComponent {
  insumo:any={};


  constructor(private activatedRoute:ActivatedRoute ,private _insumosService:InsumosService) {

    this.activatedRoute.params.subscribe(params =>{
      this.insumo = this._insumosService.getInsumo(params['id']);




    })



  }



}
