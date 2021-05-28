import {Component, OnInit} from '@angular/core';
import {InsumosServiceSucu , InsumoS} from '../insumos/servicios/insumosSucu.servicios';
import {Router} from '@angular/router';

@Component({
  selector: 'app-insumosSucursal',
  templateUrl: './insumosSucursal.component.html'

})

export class InsumosSucursalesComponent implements OnInit{

  insumosS:InsumoS[]=[];
  constructor(private _insumoSService:InsumosServiceSucu, private router:Router){

  }


  ngOnInit(){
    this.insumosS = this._insumoSService.getInsumosS();
  }

  verInsumoS(idx:number){
    this.router.navigate(['/insumoS/',idx])


  }



}
