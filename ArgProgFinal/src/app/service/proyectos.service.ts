import { HttpClient } from '@angular/common/http';
import { Injectable } from '@angular/core';
import { Proyectos } from '../model/proyectos';
import { Observable } from 'rxjs';

@Injectable({
  providedIn: 'root'
})

export class ProyectosService {
  URL = 'https://backend-ap-okyt.onrender.com/proyectos/';
  
  constructor(private http: HttpClient) { }

  public lista(): Observable<Proyectos[]>{
    return this.http.get<Proyectos[]>(this.URL + 'lista' );
  }

  public detail(id:number): Observable<Proyectos>{
    return this.http.get<Proyectos>(this.URL + `detail/${id}`);
  }

  public update(id: number,proyecto: Proyectos): Observable<any>{
    return this.http.put<any>(this.URL + `update/${id}`,proyecto);
  }

  public save(proyecto: Proyectos): Observable<any>{
    return this.http.post<any>(this.URL + 'create',proyecto);
  }


  public delete(id: number): Observable<any>{
    return this.http.delete<any>(this.URL + `delete/${id}`);
  }


}
