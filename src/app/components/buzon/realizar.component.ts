import { Component, OnInit } from '@angular/core';
import { Reporte } from './buzon';
import { BuzonService } from './buzon.service';
import  {Router} from '@angular/router'
import swal from 'sweetalert2';

@Component({
  selector: 'app-realizar',
  templateUrl: './realizar.component.html',
  styleUrls: ['./realizar.component.css']
})
export class RealizarComponent implements OnInit {

  public reporte:Reporte = new Reporte();

  normal:string="(Tiempo en que se deberia asignar mantenimiento: 2-3 dias)";
  urgente:string="(Tiempo en que se deberia asignar mantenimiento: 24 horas)";
  emergencia:string="(Tiempo en que se deberia asignar mantenimiento: 5-6 horas)";

  constructor(private reporteService:BuzonService , private router:Router) { }

  ngOnInit(): void {
  }


  public create(){
    this.reporteService.create(this.reporte).subscribe(
      reporte => {
        swal('Reporte enviado','El reporte se ha enviado con exito','success')

      this.router.navigate(['/realizar'])
    }
    )



  }

}
