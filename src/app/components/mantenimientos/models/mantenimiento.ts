import { Region } from '../../operarios/region';
import { Operarios } from '../../operarios/operarios';
import { ItemMantenimiento } from './item-mantenimiento';
import { OperarioMantenimiento } from './operario-mantenimiento';

export class Mantenimiento {
  id:number;
  descripcion:string;
  direccion:string;
  fechaAsignada:string;
  region:Region;
  operario:Operarios;
  opecitos:Array<OperarioMantenimiento>=[];
  tipo:string;
  horaInicio:string;
  horaAproximadaDuracion:string;
  prioridad:string;
  items:Array<ItemMantenimiento>=[];
  total:number;
  mantenimientoa:string;

  calcularTotal():number{
    this.total=0;
    this.items.forEach((item:ItemMantenimiento)=>{
      this.total += item.calcularImporte();
    });
    return this.total;


  }
}
