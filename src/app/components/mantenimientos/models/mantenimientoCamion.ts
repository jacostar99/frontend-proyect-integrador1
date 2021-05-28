import { Region } from '../../operarios/region';
//import { Operarios } from '../../operarios/operarios';
import { ItemMantenimiento } from './item-mantenimiento';

export class MantenimientoCami {
  id:number;
  descripcion:string;
  direccion:string;
  empresa:string;
  fechaAsignada:string;
  region:Region;
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
