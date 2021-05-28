import { Component, OnInit } from '@angular/core';
import {SucursalesService , Sucursal} from '../sucursales/servicios/sucursales.servicios';

@Component({
  selector: 'app-sucursales',
  templateUrl: './sucursales.component.html'
})
export class SucursalesComponent implements OnInit  {


    sucursales:Sucursal[]=[];
  constructor(private _sucursalesService:SucursalesService) {

  }

  ngOnInit(){
    this.sucursales = this._sucursalesService.getSucursales();


  }






}
