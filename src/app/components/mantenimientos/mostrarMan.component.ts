import { Component, OnInit } from '@angular/core';
import { Mantenimiento } from './models/mantenimiento';
import { MantenimientoService } from './services/mantenimiento.service';
import {MANTENIMIENTOS} from './mantenimientos.json';

@Component({
  selector: 'selector',
  templateUrl: 'mostrarMan.component.html',
})
export class MostrarManComponent implements OnInit {

  mantenimientos:Mantenimiento[];

  constructor(private mantenimientoService:MantenimientoService) {  }

  ngOnInit() {
    this.mantenimientoService.getMan().subscribe(
      (mantenimientos) => {this.mantenimientos= mantenimientos

}

    );




  }
}
