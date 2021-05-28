import {Component, OnInit} from '@angular/core';
import {InsumosService , Insumo} from '../insumos/servicios/insumos.servicios';
import {Router} from '@angular/router';

@Component({
  selector: 'app-insumosCamiones',
  templateUrl: './insumosCamion.component.html'

})

export class InsumosCamionesComponent implements OnInit{

  insumos:Insumo[]=[];
  constructor(private _insumoService:InsumosService, private router:Router){

  }


  ngOnInit(){
    this.insumos = this._insumoService.getInsumos();
  }

  verInsumo(idx:number){
    this.router.navigate(['/insumo/',idx])


  }



}
