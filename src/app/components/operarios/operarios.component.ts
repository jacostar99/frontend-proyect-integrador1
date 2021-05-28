import { Component, OnInit } from '@angular/core';
import { Operarios } from './operarios';
import { OperarioService } from './operario.service'
import { ModalService } from './detalle/modal.service';
import swal from 'sweetalert2'
import { tap, map, flatMap } from 'rxjs/operators';
import { ActivatedRoute } from '@angular/router';
import { Observable } from 'rxjs';
import { FormControl } from '@angular/forms';



@Component({
  selector: 'app-operarios',
  templateUrl: './operarios.component.html'

})

export class OperariosComponent implements OnInit {

  listaDeOperario: Operarios[];
  paginador: any;
  operarioSeleccionado: Operarios;
  constructor(private operarioService: OperarioService,
     private modalService:ModalService,
     private activatedRoute: ActivatedRoute,
     ) { }  //SE DEFINE EL ATRIBUTO Y SE INYECTA SU VALOR

  ngOnInit() {   //EVENTO QUE SE VA A DISPARAR CUANDO SE INICIE EL COMPONENTE Y SE EJECUTA DESPUES DEL CONSTRUCTOR , METODO PARTE DEL CICLO DE VIDA DEL COMPONENTE QUE SE LLAMA 1 SOLA VEZ CUANDO SE INICIA

    this.activatedRoute.paramMap.subscribe(params => { //SE ENCARGA DE SUSCRIBIR UN OBSERVABLE CADA QUE CAMBIA EL PARAMETRO PAGE EN LA RUTA, SE ACTUAILIZA EL LISTADO DE OPERARIOS CON EL NUEVO RANGO
      let page: number = +params.get('page'); //EL OPERADOR DE SUMA ME CONVIERTE EL PARAMETRO EN UN ENTERO
      if (!page) {
        page = 0;
      }
      this.operarioService.getOperarios(page).pipe(
        tap(response => {
          (response.content as Operarios[]).forEach(operario => {
            console.log(operario.nombre);
          });
        })
      ).subscribe(  // OBSERVADOR QUE ME ACTUALIZA LA LISTA DE OPERARIOS Y ME LO PASA A LA PLANTILLA CON LOS POSIBLES CAMBIOS
        (response) => {
          this.listaDeOperario = response.content as Operarios[];
          this.paginador = response; //EL RESPONSE ADEMAS DE CONTENER TODOS LOS DATOS DEL OPERARIO, CONTIENE LOS ATRIBUTOS

        });
    });
    this.modalService.notificarUpload.subscribe(operario =>{
    this.listaDeOperario = this.listaDeOperario.map(operarioOriginal =>{
        if(operario.id == operarioOriginal.id){
          operarioOriginal.foto =  operario.foto;

        }
        return operarioOriginal;



      })



    })


  }

  delete(operario: Operarios): void {
    swal({
      title: '¿Estas seguro?',
      text: `¿Seguro que desea eliminar al operario ${operario.nombre} ${operario.apellido}?`,
      type: 'warning',
      showCancelButton: true,
      confirmButtonColor: '#3085d6',
      cancelButtonColor: "#d33",
      confirmButtonText: "Si, eliminar!",
      cancelButtonText: 'No, cancelar!',
      confirmButtonClass: 'btn btn-success',
      cancelButtonClass: 'btn btn-danger',
      buttonsStyling: false,
      reverseButtons: true
    }).then((result) => {
      if (result.value) {
        this.operarioService.delete(operario.id).subscribe(
          response => {
            this.listaDeOperario = this.listaDeOperario.filter(ope => ope !== operario)
            swal(
              'Operario eliminado!',
              `Operario ${operario.nombre} eliminado con exito.`


            )
          }
        )
      }
    }

    )
  }


  abrirModal(operario:Operarios){
    this.operarioSeleccionado = operario;
    this.modalService.abrirModal();


  }



}
