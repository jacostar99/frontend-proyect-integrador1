import { Injectable } from '@angular/core';
import {HttpClient} from '@angular/common/http';
import {Observable} from 'rxjs';
import {MantenimientoCami} from '../models/mantenimientoCamion';
import { Insumo } from '../models/insumo';
import { AuthService } from '../../operarios/auth.service';


@Injectable({
  providedIn: 'root'
})
export class MantenimientoCamionService {

  private urlEndPoint: string ='http://localhost:8080/api/mantenimientosc';


  constructor(private http: HttpClient , private authService:AuthService) {}


  getMan():Observable<MantenimientoCami[]>{
    return this.http.get<MantenimientoCami[]>(this.urlEndPoint);


  }

  getMantenimiento(id:number):Observable<MantenimientoCami>{
    return this.http.get<MantenimientoCami>(`${this.urlEndPoint}/${id}`);


  }

  delete(id:number):Observable<void>{
    return this.http.delete<void>(`${this.urlEndPoint}/${id}`);


  }

  filtrarInsumos(term:string):Observable<Insumo[]>{
    return this.http.get<Insumo[]>(`${this.urlEndPoint}/filtrar-insumos/${term}`);

  }

  create(mantenimiento:MantenimientoCami):Observable<MantenimientoCami>{
    return this.http.post<MantenimientoCami>(this.urlEndPoint,mantenimiento);
  }



}
