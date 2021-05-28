import { Injectable } from '@angular/core';

@Injectable()
export class InsumosService {

   insumos:Insumo[]= [{
    nombre: "Amortiguador",
    descripcion:"Los amortiguadores proporcionan confort en la conducción y representan una garantía de seguridad ya que ayudan a controlar el vehículo a altas velocidades y en situaciones de riesgo. El correcto funcionamiento de un amortiguador depende de diversos factores, como el estado de la carretera, la carga del vehículo, el kilometraje y efectos de desgaste como el frío, el calor y la humedad. La acción de estos factores hace que el efecto del amortiguador se reduzca paulatinamente, hasta que deja de funcionar correctamente.",
    img:"assets/imgCamiones/amortiguador.jpg",
    precio:"Precio por unidad: $380.000"
  },
  {
    nombre: "Filtro de aire",
    descripcion:"Un filtro en buenas condiciones garantiza que el aire que llega al motor no contiene partículas abrasivas. De esa manera, la combustión se realiza en las mejores condiciones y el consumo de combustible se mantiene en los niveles recogidos en el catálogo del vehículo",
    img:"assets/imgCamiones/filtro_aire.jpg",
    precio:"Precio por unidad: $24.000"
  },
  {
    nombre: "Neumaticos",
    descripcion:"Debes mantener correctamente los índices de presión aconsejados por el fabricante. Conviene que estés siempre muy pendiente de la aparición de vibraciones y ruidos, del desgaste anómalo (mayor por unas zonas que por otras), de cualquier comportamiento extraño detectado en una frenada. ",
    img:"assets/imgCamiones/neumatico.jpg",
    precio:"Precio por unidad: $534.000"
  },
  {
    nombre: "Actuadores de frenos",
    descripcion:"Con los actuadores de frenos en mal estado necesitaremos más metros para parar el coche ante cualquier emergencia. El desgaste de los componentes del sistema de frenos depende mucho de las características de la conducción y también del medio habitual por el que ruede el vehículo (atascos en las ciudades, recorridos en montaña, con abundantes curvas, etc).",
    img:"assets/imgCamiones/frenos.jpg",
    precio:"Precio por unidad: $650.000"
  },
  {
    nombre: "Lubricante",
    descripcion:"Los lubricantes minimizan el desgaste de las piezas del motor, canalizan las partículas metálicas surgidas de ese desgaste hacia el filtro, ayudar a la refrigeración y evitar diminutas fugas en el circuito por sus propiedades sellantes.",
    img:"assets/imgCamiones/lubricante.png",
    precio:"Precio por unidad: $90.000"
  },
  {
    nombre: "Catalizador",
    descripcion:"Los catalizadores dejan de cubrir su función protectora del medio ambiente a los 80.000 kmpor eso no está de más revisarlos a partir de los 60.000 kilómetros",
    img:"assets/imgCamiones/catalizadorBonito.jpg",
    precio:"Precio por unidad: $240.000"
  },
  {
    nombre: "Correa de distribucion",
    descripcion:"La correa de distribución sincroniza los cuatro tiempos del motor, la apertura y cierre de las válvulas de admisión y escape y la chispa de la bujía. Es muy importante seguir los consejos del fabricante del vehículo porque, al ser un elemento que se desgasta, su rotura puede ocasionar una grave y cara avería en el motor.",
    img:"assets/imgCamiones/correa.png",
    precio:"Precio por unidad: $265.000"
  },
  {
    nombre: "Iluminacion",
    descripcion:"Los faros de tu vehículo te permiten ver… y ser visto. Ya no es obligatorio llevar lámparas de repuesto en el coche (debido a la dificultad de su montaje e incluso a los riesgos eléctricos que puede suponer la operación de cambio en ciertos vehículos), no hay que olvidar que sí que es obligatorio mantener el sistema de iluminación y señalización en condiciones óptimas.",
    img:"assets/imgCamiones/ilumi.jpg",
    precio:"Precio por unidad: $45.000"
  }

  ];


  constructor() {
    console.log("Servicio listo para usar!!!");

  }

  getInsumos():Insumo[]{
    return this.insumos;


  }
  getInsumo(i:string){
    return this.insumos[i];


  }
}
export interface Insumo{
  nombre:string
  descripcion:string;
  img:string;
  precio:string;


}
