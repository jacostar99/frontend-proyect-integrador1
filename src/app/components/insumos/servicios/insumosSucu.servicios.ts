import { Injectable } from '@angular/core';

@Injectable()
export class InsumosServiceSucu{

   insumoS:InsumoS[]= [{
    nombre: "Mostrador de pasteles",
    descripcion:" Son necesarios para exhibir los pasteles de la empresa. Este tipo de mostradores generalmente deben incluir control de temperatura, que conserve a los pasteles en su condición ideal.",
    img:"assets/imgSucursales/vidrio.jpg",
    precio:"Precio por unidad: $620.000"
  },
  {
    nombre: "Tubo PVC",
    descripcion:"Utilizado en las instalaciones domésticas, debido principalmente a la variedad de accesorios del sistema.",
    img:"assets/imgSucursales/tubopvc.jpg",
    precio:"Precio por unidad: $24.000"
  },
  {
    nombre: "Vidrio",
    descripcion:"El vidrio es un material inorgánico duro, frágil, transparente y amorfo.  El vidrio artificial se usa para hacer ventanas, lentes, botellas y una gran variedad de productos.",
    img:"assets/imgSucursales/vidriounidad.jpg",
    precio:"Alquiler por hora por unidad: $40.000"
  },{
    nombre: "Tornillos",
    descripcion:"El tornillo es un operador que deriva directamente del plano inclinado y siempre trabaja asociado a un orificio roscado,se utiliza para la sujeción de un objeto. ",
    img:"assets/imgMaquinas/tornillos.jpg",
    precio:"Precio por 100 tornillos: $22.000"
  },]


constructor() {
  console.log("Servicio listo para usar!!!");

}

getInsumosS():InsumoS[]{
  return this.insumoS;


}
getInsumoS(i:string){
  return this.insumoS[i];


}
}

export interface InsumoS{
  nombre:string
  descripcion:string;
  img:string;
  precio:string;


}
