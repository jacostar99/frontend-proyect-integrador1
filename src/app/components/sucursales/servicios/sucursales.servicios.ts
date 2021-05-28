import { Injectable } from '@angular/core';

@Injectable()
export class SucursalesService {

    private sucursales:Sucursal[]=[
      {
        nombre:"Ciasto company Unicentro",
        ciudad:"Santiago de Cali",
        direccion:"Centro comercial Unicentro, Plazoleta de comidas, local 12",
        img:"assets/imglugarsucursal/sucursalCali.jpg"

      },
      {
        nombre:"Ciasto company Chipichape",
        ciudad:"Santiago de Cali",
        direccion:"Centro comercial Chipichape, Plazoleta de comidas, local 6",
        img:"assets/imglugarsucursal/sucursalCali2.jpg"

      },
      {
        nombre:"Ciasto company Salitre",
        ciudad:"Bogota D.C",
        direccion:"Centro comercial Salitre Plaza, Plazoleta de comidas. local 19",
        img:"assets/imglugarsucursal/sucursalBogota.jpg"

      },
      {
        nombre:"Ciasto company Santafe",
        ciudad:"Bogota D.C",
        direccion:"Centro comercial Santafe, Plazoleta de comidas, local 2",
        img:"assets/imglugarsucursal/sucursalBogota2.jfif"

      },
      {
        nombre:"Ciasto company San Diego",
        ciudad:"Medellin",
        direccion:"Centro comercial San Diego, Plazoleta de comidas, local 10",
        img:"assets/imglugarsucursal/sucursalMedellin.jfif"

      },
      {
        nombre:"Ciasto company Bosque Plaza",
        ciudad:"Medellin",
        direccion:"Centro comercial Bosque Plaza, Plazoleta de comidas, local 7",
        img:"assets/imglugarsucursal/sucursalMedellin2.jpg"

      },
      {
        nombre:"Ciasto company El castillo",
        ciudad:"Cartagena de Indias",
        direccion:"Centro comercial El Castillo, Plazoleta de comidas, local 4",
        img:"assets/imglugarsucursal/sucursalCartagena.jfif"

      },
      {
        nombre:"Ciasto company La castellana",
        ciudad:"Cartagena de Indias",
        direccion:"Centro comercial La Castellana, Plazoleta de comidas, local 1",
        img:"assets/imglugarsucursal/sucursalCartagena2.jpg"

      },




    ];

  constructor() {

  }

  getSucursales(){
    return this.sucursales;

  }


}
export interface Sucursal{
  nombre:string;
  ciudad:string;
  direccion:string;
  img:string;


}
