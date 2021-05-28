import { Component, OnInit } from '@angular/core';
import {ActivatedRoute} from '@angular/router';
import {InsumosServiceMaq} from '../insumos/servicios/insumosMaq.servicios';

@Component({
  selector: 'app-insumoM',
  templateUrl: './insumoM.component.html'
})
export class InsumoMComponent {
  insumoM:any={};


  constructor(private activatedRoute:ActivatedRoute ,private _insumosMaqService:InsumosServiceMaq) {

    this.activatedRoute.params.subscribe(params =>{
      this.insumoM = this._insumosMaqService.getInsumoM(params['id']);




    })



  }



}
