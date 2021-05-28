import { Injectable } from '@angular/core';

@Injectable()
export class FabricaService {

  private fabricas:Fabrica[]=[
    {
      nombre:"Maquina dosificadora de masas",
      descripcion:"Máquina dosificadora, con diseño renovado, concebida para dosificar masas duras, blandas, batidas y con consistencias.",
      cantidadDeMaquinas:"3",
      img:"assets/imgFabrica/dosificadormasas.jpg"

    },
    {
      nombre:"Maquina dosificadora de sal",
      descripcion:"Máquina automática continua dosificadora de sal. Construida en acero inoxidable, con un motor-reductor de 0,75 HP y un variador de frecuencia, con tolva piramidal donde situar el tipo de sal a emplear, con un juego de dosificadores y transportador de latas.",
      cantidadDeMaquinas:"2",
      img:"assets/imgFabrica/dosificadorsal.jpg"

    },
    {
      nombre:"Maquina empacadora",
      descripcion:"Máquina empacadora automática vertical para llenado de productos ",
      cantidadDeMaquinas:"2",
      img:"assets/imgFabrica/empacadora.jpeg"

    },
    {
      nombre:"Maquina moldeadora",
      descripcion:"La moldeadora de pasteles es una máquina indispensable para elaborar barras de pastel, que da forma a las barras y las prepara para que sean llevadas al horno, una vez colocadas en la entabladora automática.",
      cantidadDeMaquinas:"3",
      img:"assets/imgFabrica/molde.jpg"

    },
    {
      nombre:"Horno ",
      descripcion:"Cumple con la cocción de los pasteles",
      cantidadDeMaquinas:"5",
      img:"assets/imgFabrica/horno.png"

    }
  ];

constructor() {

}

getFabricas(){
  return this.fabricas;

}


}
export interface Fabrica{
nombre:string;
descripcion:string;
cantidadDeMaquinas:string;
img:string;




}
