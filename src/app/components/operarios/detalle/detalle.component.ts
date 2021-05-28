import { Component, OnInit, Input } from '@angular/core';
import { Operarios } from '../operarios'
import { OperarioService } from '../operario.service';
import { ModalService } from './modal.service';
import {MantenimientoService} from '../../mantenimientos/services/mantenimiento.service';
import {Mantenimiento} from '../../mantenimientos/models/mantenimiento';

//import { ActivatedRoute } from '@angular/router';
import swal from 'sweetalert2';

@Component({
  selector: 'detalle-operario',
  templateUrl: './detalle.component.html',
  styleUrls: ['./detalle.component.css']
})
export class DetalleComponent implements OnInit {
  @Input()operario: Operarios;
  titulo: string = "Detalle del operario";
   fotoSeleccionada: File;


  constructor(private operarioService: OperarioService,
    private mantenimientoService: MantenimientoService,
    public modalService:ModalService) { } //SE INYECTA EL CLIENTE SERVICE, Y ACTIVATED ROUTE PARA EDITAR UN OPERARIO PARA PODER SUSCRIBIR CUANDO CAMBIA EL PARAMETRO DEL ID

  ngOnInit() {}
  seleccionarFoto(event) {
    this.fotoSeleccionada = event.target.files[0]; //arreglos de archivos pero se selecciona el unico que se esta subiendo
       if (this.fotoSeleccionada.type.indexOf('image')<0){
         swal('Error seleecionar imagen:', 'El archivo debe ser del tipo imagen', 'error')
         this.fotoSeleccionada=null;



       }
  }
  subirFoto() {
    if (!this.fotoSeleccionada) {
      swal('Error Upload:', 'debe seleccionar una foto', 'error')

    } else {
      this.operarioService.subirFoto(this.fotoSeleccionada, this.operario.id)
        .subscribe(operario => {
          this.operario = operario; // se actualiza el nuevo operario con la foto
          this.modalService.notificarUpload.emit(this.operario); // se actualiza el operario con la foto

          swal('La foto se ha subido completamente!', 'La foto se ha subido con exito', 'success');
        });
    }

  }
  cerrarModal(){
    this.modalService.cerrarModal();
    this.fotoSeleccionada=null;
  }

  delete(mantenimiento:Mantenimiento):void{
    swal({
      title: '¿Estas seguro?',
      text: `¿Seguro que desea eliminar el mantenimiento ${mantenimiento.descripcion}?`,
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
        this.mantenimientoService.delete(mantenimiento.id).subscribe(
          response => {
            this.operario.mantenimientos = this.operario.mantenimientos.filter(f => f !== mantenimiento)
            swal(
              'Mantenimiento eliminado!',
              `Mantenimiento ${mantenimiento.descripcion} eliminada con exito.`


            )
          }
        )
      }
    }

    )


  }

}
