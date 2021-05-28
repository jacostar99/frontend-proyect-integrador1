import { Insumo } from './insumo';

export class ItemMantenimiento {
  insumo:Insumo;
  cantidad:number=1;
  importe:number;

  public calcularImporte():number{
    return this.cantidad *this.insumo.precio;


  }
}
