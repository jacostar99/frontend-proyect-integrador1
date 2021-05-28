import { RouterModule, Routes } from '@angular/router';
import {BuzonComponent} from './components/buzon/buzon.component';
import {OperariosComponent} from './components/operarios/operarios.component';
import {InsumosComponent} from './components/insumos/insumos.component';
import {HistorialComponent} from './components/historial/historial.component';
import {GestionUsersComponent} from './components/gestionUsers/gestionUsers.component';
import { RegistroComponent } from './components/registro/registro.component';
import {FormularioComponent} from './components/operarios/formulario.component';
import { DetalleComponent } from './components/operarios/detalle/detalle.component';
import {InsumosCamionesComponent} from './components/insumos/insumosCamiones.component';
import {InsumosMaquinasComponent} from './components/insumos/insumosMaquinas.component';
import {InsumosSucursalesComponent} from './components/insumos/insumosSucursales.component';
import { InsumoComponent } from './components/insumo/insumo.component';
import { InsumoMComponent } from './components/insumo/insumoM.component';
import { InsumoSComponent } from './components/insumo/insumoS.component';
import { SucursalesComponent } from './components/sucursales/sucursales.component';
import { DetalleMantenimientoComponent } from './components/mantenimientos/detalle-mantenimiento.component';
import { MantenimientosComponent } from './components/mantenimientos/mantenimientos.component';
import { FabricaComponent } from './components/fabrica/fabrica.component';
import { MostrarManComponent } from './components/mantenimientos/mostrarMan.component';
import { DetalleReporteComponent } from './components/buzon/detalle-reporte/detalle-reporte.component';
import { RealizarComponent } from './components/buzon/realizar.component';
import { LoginComponent } from './components/operarios/login.component';
import { MostrarManCamionComponent } from './components/mantenimientos/mostrarManCamion.Component';
import { DetalleCamionComponent } from './components/mantenimientos/detalle-camion.component';
import { MantenimientosCamionComponent } from './components/mantenimientos/mantenimientoCamion.component';










const APP_ROUTES: Routes = [  //ARREGLO DE RUTAS
  { path: 'buzon' /*NOMBRE DE LA RUTA*/, component: BuzonComponent },
  //{ path: 'mantenimiento' /*NOMBRE DE LA RUTA*/, component: MantenimientoComponent },
  { path: 'operarios' /*NOMBRE DE LA RUTA*/, component: OperariosComponent },
  { path: 'operarios/page/:page' /*NOMBRE DE LA RUTA*/, component: OperariosComponent },
  { path: 'operarios/formulario' /*NOMBRE DE LA RUTA*/, component: FormularioComponent},
  { path: 'operarios/formulario/:id' /*NOMBRE DE LA RUTA*/, component: FormularioComponent},
  //{ path: 'operarios/ver/:id' /*NOMBRE DE LA RUTA*/, component: DetalleComponent},
  { path: 'insumos' /*NOMBRE DE LA RUTA*/,
    component: InsumosComponent,
    children: [
      { path: 'insumosCamion' /*NOMBRE DE LA RUTA*/, component: InsumosCamionesComponent },
      { path: 'insumosMaquina' /*NOMBRE DE LA RUTA*/, component: InsumosMaquinasComponent },
      { path: 'insumosSucursal' /*NOMBRE DE LA RUTA*/, component: InsumosSucursalesComponent },
      { path: '**', pathMatch: 'full', redirectTo: 'insumosCamion' }
    ]
   },
  { path: 'historial' /*NOMBRE DE LA RUTA*/, component: HistorialComponent },
  { path: 'operarios' /*NOMBRE DE LA RUTA*/, component: OperariosComponent },
  { path: 'mantenimientos/form/:operarioId' /*NOMBRE DE LA RUTA*/, component: MantenimientosComponent },
  { path: 'listaManC/form' /*NOMBRE DE LA RUTA*/, component: MantenimientosCamionComponent },

   { path: 'login' /*NOMBRE DE LA RUTA*/, component: LoginComponent },
    { path: 'sucursal' /*NOMBRE DE LA RUTA*/, component: SucursalesComponent },
    { path: 'fabrica' /*NOMBRE DE LA RUTA*/, component: FabricaComponent },
   {path: 'listaMan' , component: MostrarManComponent},
   {path: 'listaManC' , component : MostrarManCamionComponent},
  { path: 'insumo/:id' /*NOMBRE DE LA RUTA*/, component: InsumoComponent },
  { path: 'insumoM/:id' /*NOMBRE DE LA RUTA*/, component: InsumoMComponent },
  { path: 'insumoS/:id' /*NOMBRE DE LA RUTA*/, component: InsumoSComponent },
  { path: 'mantenimientos/:id' /*NOMBRE DE LA RUTA*/, component: DetalleMantenimientoComponent },
    { path: 'mantenimientosc/:id' /*NOMBRE DE LA RUTA*/, component: DetalleCamionComponent },
  { path: 'reportes/:id' /*NOMBRE DE LA RUTA*/, component: DetalleReporteComponent },
  { path: 'realizar' /*NOMBRE DE LA RUTA*/, component: RealizarComponent },

  { path: 'gestion' /*NOMBRE DE LA RUTA*/, component: GestionUsersComponent },
  { path: 'registo' /*NOMBRE DE LA RUTA*/, component: RegistroComponent},
  { path: 'login' /*NOMBRE DE LA RUTA*/, component: BuzonComponent},
  { path: '**', pathMatch: 'full', redirectTo: 'login ' /*RUTA ESPECIAL POR SI NO CONECTA CON NINGUNA DE LAS OTRAS RUTAS */}
];

export const APP_ROUTING = RouterModule.forRoot(APP_ROUTES);
