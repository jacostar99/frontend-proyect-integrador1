import { Injectable } from '@angular/core';
import { Observable } from 'rxjs';
import { HttpClient, HttpHeaders } from '@angular/common/http';
import { Operarios } from './operarios';


@Injectable({
  providedIn: 'root'
})
export class AuthService {

  private _operario:Operarios;
  private _token:string;

  constructor(private http: HttpClient) { }

   public get operario():Operarios{
     if(this._operario != null){
       return this._operario;

     }else if(this._operario == null && sessionStorage.getItem('operario') != null){
       this._operario = JSON.parse(sessionStorage.getItem('operario')) as Operarios;
       return this._operario;
     }
     return new Operarios();

   }
   public get token():string{
     if(this._token != null){
       return this._token;

     }else if(this._token == null && sessionStorage.getItem('token') != null){
       this._token = sessionStorage.getItem('token');
       return this._token;
     }
     return null;


   }
  login(operario:Operarios):Observable<any>{
    const urlEndPoint = 'http://localhost:8080/oauth/token';

    const credenciales = btoa('angularapp'+':'+'12345');

    const httpHeaders= new HttpHeaders({'Content-Type': 'application/x-www-form-urlencoded',
     'Authorization': 'Basic ' + credenciales});

     let params = new URLSearchParams();
     params.set('grant_type','password');
     params.set('username', operario.username);
     params.set('password', operario.password);
     console.log(params.toString());


    return this.http.post<any>(urlEndPoint, params.toString(), {headers: httpHeaders});
  }



  guardarUsuario(accessToken:string):void{

    let payload = this.obtenerDatosToken(accessToken);
    this._operario = new Operarios();
    this._operario.nombre = payload.nombre;
    this._operario.apellido = payload.apellido;
    this._operario.fechaCreacion = payload.fechaCreacion;
    this._operario.foto = payload.foto;
    this._operario.region = payload.region;
    this._operario.mantenimientos = payload.mantenimientos;
    this._operario.username = payload.user_name;
    this._operario.roles = payload.authorities;
    this._operario.estado = payload.estado;
    sessionStorage.setItem('operario', JSON.stringify(this._operario)  );


  }

  guardarToken(accessToken:string):void{
    this._token= accessToken;
    sessionStorage.setItem('token' , accessToken)

  }

  obtenerDatosToken(accessToken:string):any{

    if(accessToken != null){
      return JSON.parse(atob(accessToken.split(".")[1]));

    }
    return null;
  }

  isAuthenticated():boolean{
    let payload = this.obtenerDatosToken(this.token);
    if(payload!=null && payload.user_name && payload.user_name.length>0){
      return true;
    }
    return false;
  }
  logout():void{
    this._token =null;
    this._operario = null;
    sessionStorage.removeItem('token');
    sessionStorage.removeItem('operario');



  }

  hasRole(role:string):boolean{
    if(this.operario.roles.includes(role)){
      return true;


    }

    return false;

  }




}
