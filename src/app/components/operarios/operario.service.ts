import { Injectable } from '@angular/core';
import { formatDate, DatePipe } from '@angular/common';
import localeES from '@angular/common/locales/es';
import { OPERARIOS } from './operarios.json'; // ARCHIVO QUE CONTIENE LA LISTA DE OPERARIOS
import { Operarios } from './operarios';
import { of, Observable, throwError } from 'rxjs';
import { HttpClient, HttpHeaders } from '@angular/common/http';
import { map, catchError, tap } from 'rxjs/operators';
import swal from 'sweetalert2';
import { Router } from '@angular/router';
import { Region } from './region';
import { AuthService } from './auth.service';



@Injectable()  //EL DECORADOR INJECTABLE SE USA PARA CLASES DE SERVICIOS Y SE PUEDE INYECTAR A OTRO COMPONENTE

export class OperarioService {

  private urlEndPoint: string = 'http://localhost:8080/api/operarios'; // url del puerto donde esta el servidor de spring

  private httpHeaders = new HttpHeaders({ 'Content-type': 'application/json' })
  //SE INYECTA UNA REFERENCIA
  //OBSERVABLE ESTA BASADO EN EL PATRON DE DISEÑO OBSERVADOR, ES DECIR HAY UN SUJETO QUE ES  OBSERVABLE EN ESTE CASO ES EL OPERARIO
  //Y TAMBIEN OBSERVADORES QUE ESTAN ATENTOS ESCUCHANDO UN POSIBLE CAMBIO EN EL SUJETO, EN ESTE CASO EL OPERARIO , ESTOS OBSERVADORES SE SUSBSCRIBEN AL SUJETO
  //Y CUANDO CAMBIA SU ESTADO SE NOTIFICA SE NOTIFICA A LOS OBSERVADORES Y SE LANZA ALGUNA TAREA O ALGUN EVENTO.
  //LADO BACKEND DEL SERVIDOR CON EL API REST Y TENEMOS EL OPERARIO CON ANGULAR, SI CAMBIA ALGUN DATO DEL OPERARIO EN EL SERVIDOR AUTOMATICAMENTE SE NOTIFIQUE
  //ESE CAMBIO Y SE ACTUALICE DE FORMA AUTOMATICA Y EN TIEMPO REAL EN EL OPERARIO ANGULAR.

  private agregarAuthorizationServer(){
    let token =  this.authService.token;
    if(token!=null){
      return this.httpHeaders.append('Authorization','Bearer ' + token);
    }
    return this.httpHeaders;
  }

  constructor(private http: HttpClient, private router: Router , private authService:AuthService) { }

  private isNoAutorizado(e):boolean{
    if(e.status == 401 || e.status == 403){
      this.router.navigate(['/login'])
      return true;

    }
    return false;

  }



  getRegiones():Observable<Region[]>{
    return this.http.get<Region[]>(this.urlEndPoint + '/regiones' ,{headers: this.agregarAuthorizationServer()})

    ;

  }





  getOperarios(page: number): Observable<any> { //CONVERTIR EL LISTADO DE OPERARIOS UN OBSERVABLE (STREAM O FLUJO DE DATOS)
    //  return of(OPERARIOS);
    return this.http.get(this.urlEndPoint + '/page/' + page).pipe(
      tap((response: any) => {
        (response.content as Operarios[]).forEach(operario => {
          console.log(operario.nombre);
        }
        )
      }),
      map((response: any) => {  // map para cambiar los datos del flujo
        (response.content as Operarios[]).map(operario => {
          let datePipe = new DatePipe('es')
          operario.fechaCreacion = datePipe.transform(operario.fechaCreacion, 'EEEE dd,MMMM yyyy')                              //formatDate(operario.fechaCreacion, 'EEEE dd,MMMM yyyy' ,);
          return operario;
        });
        return response;
      }

      ),
      tap(response => {
        (response.content as Operarios[]).forEach(operario => {
          console.log(operario.nombre);
        }
        )


      })
    );

  }

  create(operario: Operarios): Observable<Operarios> {
    return this.http.post<Operarios>(this.urlEndPoint, operario, { headers: this.agregarAuthorizationServer() }).pipe(
      catchError(e => {
        if(this.isNoAutorizado(e)){
          return throwError(e);

        }



        if (e.status == 400) {
          return throwError(e);

        }
        swal("Error al crear al operario", e.error.mensaje, 'error'); // se muestra el mensaje del error que esta en el backed
        return throwError(e);

      })
    ); // get para obtener // se pasa la url, se pasa los datos del objeto operario

  }
  getOperario(id): Observable<Operarios> {
    return this.http.get<Operarios>(`${this.urlEndPoint}/${id}`,{headers:this.agregarAuthorizationServer()}).pipe(
      catchError(e => {
        if(this.isNoAutorizado(e)){
          return throwError(e);

        }


        this.router.navigate['/operarios'];
        swal("Error al editar", e.error.mensaje, 'error'); // se muestra el mensaje del error que esta en el backed
        return throwError(e);

      })
    );

  }
  update(operario: Operarios): Observable<Operarios> {
    return this.http.put<Operarios>(`${this.urlEndPoint}/${operario.id}`, operario, { headers: this.agregarAuthorizationServer() }).pipe(
      catchError(e => {
        if(this.isNoAutorizado(e)){
          return throwError(e);

        }

        if (e.status == 400) {
          return throwError(e);

        }
        swal("Error al editar al operario", e.error.mensaje, 'error'); // se muestra el mensaje del error que esta en el backed
        return throwError(e);

      })
    ); //put para editar

  }

  delete(id: number): Observable<Operarios> {

    return this.http.delete<Operarios>(`${this.urlEndPoint}/${id}`, { headers: this.agregarAuthorizationServer()}).pipe(
      catchError(e => {
        if(this.isNoAutorizado(e)){
          return throwError(e);

        }

        swal("Error al eliminar al operario", e.error.mensaje, 'error'); // se muestra el mensaje del error que esta en el backed
        return throwError(e);

      })
    );
  }
  subirFoto(archivo: File, id):Observable<Operarios>{


    let formData = new FormData();
    formData.append("archivo", archivo); //el mismo nombre que esta en el backend
    formData.append("id",id);

    //let httpHeaders = new HttpHeaders();
    //let token = this.authService.token;

    //if(token!=null){
     //httpHeaders =  httpHeaders.append('Authorization','Bearer ' + token);

    //}

  //  headers:httpHeaders

    return this.http.post(`${this.urlEndPoint}/upload`, formData).pipe(
      map((response:any)=>response.operario as Operarios),
      catchError(e =>{
        swal(e.error.mensaje, e.error.error, 'success');
        return throwError(e);

      })
    );

  }
  filtrarOperarios(term:string):Observable<Operarios[]>{
    return this.http.get<Operarios[]>(`${this.urlEndPoint}/filtrar-operarios/${term}`);
  }
}
