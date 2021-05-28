import { Component, OnInit } from '@angular/core';
import { MantenimientoCami } from './models/mantenimientoCamion';
import { MantenimientoCamionService } from './services/mantenimientoCamion.service';
import swal from 'sweetalert2';


@Component({
  selector: 'app-mostrarManCamion',
  templateUrl: './mostrarManCamion.component.html'
})
export class MostrarManCamionComponent {


    mantenimientosC:MantenimientoCami[];

    constructor(private mantenimientoService:MantenimientoCamionService) {  }

    ngOnInit() {
      this.mantenimientoService.getMan().subscribe(
        (mantenimientosC) => {this.mantenimientosC= mantenimientosC

  }

      );




    }

    delete(mantenimientoCami:MantenimientoCami):void{
      swal({
        title: '¿Estas seguro?',
        text: `¿Seguro que desea eliminar la solicitud?`,
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
          this.mantenimientoService.delete(mantenimientoCami.id).subscribe(
            response => {
              this.mantenimientosC= this.mantenimientosC.filter(ope => ope !== mantenimientoCami)
              swal(
                'Solicitud eliminada!',
                `Solicitud eliminada con exito.`


              )
            }
          )
        }
      }

      )

    }
  }
