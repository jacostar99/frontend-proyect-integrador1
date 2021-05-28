import { Injectable } from '@angular/core';
import { HttpClient, HttpHeaders } from '@angular/common/http';
import { Observable } from 'rxjs';
import { Reporte } from './buzon';

@Injectable({
    providedIn: 'root'
})
export class BuzonService {

    private urlEndPoint: string ='http://localhost:8080/api/reportes';
    private httpHeaders= new HttpHeaders({'Content-Type':'application/json'})

  constructor(private http: HttpClient) {  }

  getReportes():Observable<Reporte[]>{
    return this.http.get<Reporte[]>(this.urlEndPoint);


  }

  getReporte(id:number):Observable<Reporte>{
    return this.http.get<Reporte>(this.urlEndPoint+'/'+id)


  }

  create(reporte:Reporte):Observable<Reporte>{
    return this.http.post<Reporte>(this.urlEndPoint,reporte,{headers:this.httpHeaders});

  }

    delete(id:number):Observable<Reporte>{
      return this.http.delete<Reporte>(this.urlEndPoint+'/'+id,{headers:this.httpHeaders})

  }

}
