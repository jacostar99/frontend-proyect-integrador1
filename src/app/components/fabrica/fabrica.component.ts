import { Component, OnInit } from '@angular/core';
import {FabricaService , Fabrica} from '../fabrica/servicios/fabrica.servicios';

@Component({
  selector: 'app-fabrica',
  templateUrl: './fabrica.component.html'
})
export class FabricaComponent implements OnInit {


      fabricas:Fabrica[]=[];
    constructor(private _fabricaService:FabricaService) {

    }

    ngOnInit(){
      this.fabricas = this._fabricaService.getFabricas();


    }

}
