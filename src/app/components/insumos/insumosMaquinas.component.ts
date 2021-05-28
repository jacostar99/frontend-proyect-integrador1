import {Component, OnInit} from '@angular/core';
import {InsumosServiceMaq , InsumoM} from '../insumos/servicios/insumosMaq.servicios';
import {Router} from '@angular/router';

@Component({
  selector: 'app-insumosMaquinas',
  templateUrl: './insumosMaquina.component.html'

})

export class InsumosMaquinasComponent implements OnInit{

  insumosM:InsumoM[]=[];
  constructor(private _insumoMService:InsumosServiceMaq, private router:Router){

  }


  ngOnInit(){
    this.insumosM = this._insumoMService.getInsumosM();
  }

  verInsumoM(idx:number){
    this.router.navigate(['/insumoM/',idx])


  }



}
