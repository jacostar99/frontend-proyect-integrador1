import { BrowserModule } from '@angular/platform-browser';
import { NgModule, LOCALE_ID } from '@angular/core';
import { CommonModule } from '@angular/common';



//RUTAS
import {APP_ROUTING} from './app.routes';


import { AppComponent } from './app.component';
import { NavbarComponent} from './components/shared/navbar/navbar.component';
import { NavbarOperarioComponent} from './components/shared/navbarOp/navbarOp.component';
import { BuzonComponent} from './components/buzon/buzon.component';
import {OperariosComponent} from './components/operarios/operarios.component';
import {InsumosComponent} from './components/insumos/insumos.component';
import {InsumosCamionesComponent} from './components/insumos/insumosCamiones.component';
import {InsumosMaquinasComponent} from './components/insumos/insumosMaquinas.component';
import {InsumosSucursalesComponent} from './components/insumos/insumosSucursales.component';
import {HistorialComponent} from './components/historial/historial.component';
import {GestionUsersComponent} from './components/gestionUsers/gestionUsers.component';
import {FooterComponent} from './components/shared/footer/footer.component';
import {OperarioService} from './components/operarios/operario.service';
import {GestionUsersService} from './components/gestionUsers/gestionUsers.service';
import {HttpClientModule} from '@angular/common/http';  // PERMITE EN LA CLASE SERVICE PODER CONECTARSE CON EL SERVIDRO
import { RegistroComponent } from './components/registro/registro.component';
import {FormularioComponent} from './components/operarios/formulario.component';
import { PaginatorComponent } from './components/paginator/paginator.component';
import {FormsModule , ReactiveFormsModule} from '@angular/forms';
import {registerLocaleData} from '@angular/common';
import localeES from '@angular/common/locales/es';
import {InsumosService} from './components/insumos/servicios/insumos.servicios';
import {InsumosServiceMaq} from './components/insumos/servicios/insumosMaq.servicios';
import {InsumosServiceSucu} from './components/insumos/servicios/insumosSucu.servicios';
import {SucursalesService} from './components/sucursales/servicios/sucursales.servicios';
import {FabricaService} from './components/fabrica/servicios/fabrica.servicios';
import {MatAutocompleteModule} from '@angular/material/autocomplete';
import {MatInputModule} from '@angular/material/input';
import {MatFormFieldModule} from '@angular/material/form-field';
import {MatDatepickerModule } from '@angular/material/datepicker';
import {MatNativeDateModule } from '@angular/material/core';
registerLocaleData(localeES,'es');
import { DetalleComponent } from './components/operarios/detalle/detalle.component';
import { InsumoComponent } from './components/insumo/insumo.component';
import { InsumoMComponent } from './components/insumo/insumoM.component';
import { InsumoSComponent } from './components/insumo/insumoS.component';
import { SucursalesComponent } from './components/sucursales/sucursales.component';
import { DetalleMantenimientoComponent } from './components/mantenimientos/detalle-mantenimiento.component';
import {MantenimientoService} from './components/mantenimientos/services/mantenimiento.service';
import { MantenimientosComponent } from './components/mantenimientos/mantenimientos.component';
import { BrowserAnimationsModule } from '@angular/platform-browser/animations';
import { FabricaComponent } from './components/fabrica/fabrica.component';
import { MostrarManComponent } from './components/mantenimientos/mostrarMan.component';
import {BuzonService} from './components/buzon/buzon.service';
import { DetalleReporteComponent } from './components/buzon/detalle-reporte/detalle-reporte.component';
import { RealizarComponent } from './components/buzon/realizar.component';
import { LoginComponent } from './components/operarios/login.component';
import { MantenimientoCamionService } from './components/mantenimientos/services/mantenimientoCamion.service';
import { MantenimientosCamionComponent } from './components/mantenimientos/mantenimientoCamion.component';
import { MostrarManCamionComponent } from './components/mantenimientos/mostrarManCamion.Component';
import { DetalleCamionComponent } from './components/mantenimientos/detalle-camion.component';







@NgModule({
  declarations: [
    AppComponent,
    NavbarComponent,
    BuzonComponent,
    //MantenimientoComponent,
    OperariosComponent,
    InsumosComponent,
    HistorialComponent,
    GestionUsersComponent,
    FooterComponent,
    RegistroComponent,
    FormularioComponent,
    PaginatorComponent,
    DetalleComponent,
    NavbarOperarioComponent,
    InsumosCamionesComponent,
    InsumosMaquinasComponent,
    InsumosSucursalesComponent,
    InsumoComponent,
    InsumoMComponent,
    InsumoSComponent,
    SucursalesComponent,
    DetalleMantenimientoComponent,
    DetalleCamionComponent,
    MantenimientosComponent,
    MantenimientosCamionComponent,
    FabricaComponent,
    MostrarManComponent,
    MostrarManCamionComponent,
    DetalleReporteComponent,
    RealizarComponent,
    LoginComponent
  ],
  imports: [
    BrowserModule,
    HttpClientModule,
    FormsModule,
    CommonModule,
    APP_ROUTING,
    BrowserAnimationsModule,
    ReactiveFormsModule,
    MatAutocompleteModule,
    MatInputModule,
    MatFormFieldModule,
    MatDatepickerModule,
    MatNativeDateModule
  ],
  providers: [OperarioService,{provide: LOCALE_ID , useValue:'es'}
   ,GestionUsersService
   ,InsumosService
   ,InsumosServiceMaq
   ,InsumosServiceSucu
   ,SucursalesService
   ,MantenimientoService
    ,FabricaService
    ,BuzonService
    ,MantenimientoCamionService
 ],
  bootstrap: [AppComponent]
})
export class AppModule { }
