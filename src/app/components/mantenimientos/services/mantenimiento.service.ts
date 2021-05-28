import { Injectable } from '@angular/core';
import {HttpClient} from '@angular/common/http';
import {Observable} from 'rxjs';
import {Mantenimiento} from '../models/mantenimiento';
import { Insumo } from '../models/insumo';
import { AuthService } from '../../operarios/auth.service';
import { Operarios } from '../../operarios/operarios';


@Injectable({
  providedIn: 'root'
})
export class MantenimientoService {

  private urlEndPoint: string ='http://localhost:8080/api/mantenimientos';



  constructor(private http: HttpClient , private authService:AuthService) {}


  getMan():Observable<Mantenimiento[]>{
    return this.http.get<Mantenimiento[]>(this.urlEndPoint);


  }

  getMantenimiento(id:number):Observable<Mantenimiento>{
    return this.http.get<Mantenimiento>(`${this.urlEndPoint}/${id}`);


  }

  delete(id:number):Observable<void>{
    return this.http.delete<void>(`${this.urlEndPoint}/${id}`);


  }

  filtrarInsumos(term:string):Observable<Insumo[]>{
    return this.http.get<Insumo[]>(`${this.urlEndPoint}/filtrar-insumos/${term}`);

  }

  create(mantenimiento:Mantenimiento):Observable<Mantenimiento>{
    return this.http.post<Mantenimiento>(this.urlEndPoint,mantenimiento);
  }





}
