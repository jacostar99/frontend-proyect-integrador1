import { Component, OnInit } from '@angular/core';
import { BuzonService } from '../buzon.service';
import { Reporte } from '../buzon';
import {ActivatedRoute} from '@angular/router';


@Component({
  selector: 'app-detalle-reporte',
  templateUrl: './detalle-reporte.component.html',
  styleUrls: ['./detalle-reporte.component.css']
})
export class DetalleReporteComponent implements OnInit {

  public reporte:Reporte;
  titulo:string="Reporte";


  constructor(private buzonService:BuzonService , private activatedRoute:ActivatedRoute) { }

  ngOnInit(): void {
      this.activatedRoute.paramMap.subscribe(params=>{
        let id = +params.get('id');
        this.buzonService.getReporte(id).subscribe(reporte =>{
          this.reporte=reporte;


        })


      })
  }

}
