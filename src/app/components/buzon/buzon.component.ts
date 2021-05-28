import {Component , OnInit} from '@angular/core';
import { BuzonService } from './buzon.service';
import { Reporte } from './buzon';
import swal from 'sweetalert2';

@Component({
  selector: 'app-buzon',
  templateUrl: './buzon.component.html'

})

export class BuzonComponent implements OnInit {

  reportes:Reporte[];

  constructor(private buzonService:BuzonService){

  }

  ngOnInit(){
    this.buzonService.getReportes().subscribe(
      (reportes) => {this.reportes= reportes

}

);
  }

  delete(buzon:Reporte):void{
    swal({
      title: '¿Estas seguro?',
      text: `¿Seguro que desea eliminar el reporte?`,
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
        this.buzonService.delete(buzon.id).subscribe(
          response => {
            this.reportes= this.reportes.filter(ope => ope !== buzon)
            swal(
              'Reporte eliminado!',
              `Reporte eliminado con exito.`


            )
          }
        )
      }
    }

    )

  }



}
