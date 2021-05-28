import { Component, OnInit } from '@angular/core';
import {ActivatedRoute} from '@angular/router';
import {InsumosServiceSucu} from '../insumos/servicios/insumosSucu.servicios';

@Component({
  selector: 'app-insumoS',
  templateUrl: './insumoS.component.html'
})
export class InsumoSComponent {
  insumoS:any={};


  constructor(private activatedRoute:ActivatedRoute ,private _insumosSucuService:InsumosServiceSucu) {

    this.activatedRoute.params.subscribe(params =>{
      this.insumoS = this._insumosSucuService.getInsumoS(params['id']);




    })



  }



}
