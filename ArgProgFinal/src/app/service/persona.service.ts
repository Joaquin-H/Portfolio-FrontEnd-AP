import { HttpClient } from '@angular/common/http';
import { Injectable } from '@angular/core';
import { Observable } from 'rxjs';
import { persona } from '../model/persona.model';

@Injectable({
  providedIn: 'root'
})

export class PersonaService {
  URL = 'https://backend-ap-okyt.onrender.com/personas/';
  //URL = 'http://localhost:8080/personas/';

  constructor(private http: HttpClient) { }

  public detail(id:number): Observable<persona>{
    return this.http.get<persona>(this.URL+ `detail/${id}`);
  }

}