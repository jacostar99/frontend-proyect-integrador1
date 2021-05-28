import { Injectable } from '@angular/core';

@Injectable()
export class InsumosServiceMaq {

   insumosM:InsumoM[]= [{
    nombre: "Destornilladores",
    descripcion:"Es una herramienta que se utiliza para apretar y aflojar tornillos y otros elementos de máquinas que requieren poca fuerza de apriete y que generalmente son de diámetro pequeño.",
    img:"assets/imgMaquinas/destor.jpg",
    precio:"Precio por unidad: $12.000"
  },
  {
    nombre: "Aceites",
    descripcion:"Reducir la fricción. Disipar el calor. Dispersar de los contaminantes.",
    img:"assets/imgMaquinas/aceites.jpg",
    precio:"Precio por unidad: $24.000"
  },
  {
    nombre: "Amoladora",
    descripcion:"Es una herramienta electroportátil que funciona tanto para tareas de bricolaje como industriales.Esta herramienta se usa para lijar o pulir superficies pequeñas o para hacer cortes finos en metal.",
    img:"assets/imgMaquinas/amoladora.jpg",
    precio:"Alquiler por hora por unidad: $34.000"
  },
  {
    nombre: "Bomba de engrase",
    descripcion:"Es una herramienta que se utiliza para realizar el engrase de piezas donde la grasa debe penetrar a presión.",
    img:"assets/imgMaquinas/bomba.jpg",
    precio:"Alquiler por hora por unidad: $31.000"
  },
  {
    nombre: "Cargador de baterias",
    descripcion:"Es un dispositivo utilizado para suministrar una corriente eléctrica, en sentido opuesto al de la corriente de descarga, a una batería o pila recargable para que ésta recupere su carga energética.",
    img:"assets/imgMaquinas/cargador.jpg",
    precio:"Alquiler por hora por unidad: $20.000"
  },
  {
    nombre: "Compresor de aire",
    descripcion:"El compresor de aire facilita el mantenimiento y permite una limpieza mas exhaustiva.",
    img:"assets/imgMaquinas/compresor.jpg",
    precio:"Alquiler por hora por unidad: $20.000"
  },
  {
    nombre: "Limpiador general",
    descripcion:"Es un producto de limpieza especial para eliminar la suciedad de todo tipo de superficies lavables.",
    img:"assets/imgMaquinas/limpige.jpg",
    precio:"Precio por unidad: $18.000"
  },
  {
    nombre: "Tornillos",
    descripcion:"El tornillo es un operador que deriva directamente del plano inclinado y siempre trabaja asociado a un orificio roscado,se utiliza para la sujeción de un objeto. ",
    img:"assets/imgMaquinas/tornillos.jpg",
    precio:"Precio por 100 tornillos: $22.000"
  }

  ];


  constructor() {
    console.log("Servicio listo para usar!!!");

  }

  getInsumosM():InsumoM[]{
    return this.insumosM;


  }
  getInsumoM(i:string){
    return this.insumosM[i];


  }
}
export interface InsumoM{
  nombre:string
  descripcion:string;
  img:string;
  precio:string;


}
