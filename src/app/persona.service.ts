import { Injectable } from '@angular/core';

import { environment } from 'src/environments/environment';

import { HttpClient } from '@angular/common/http';
import { Observable } from 'rxjs';
import { Persona } from 'src/app/persona';

@Injectable({
  providedIn: 'root'
})
export class PersonaService {

  private url = environment.base + '/personas';
  constructor(private http: HttpClient) { }

  public getAllPersonas(): Observable<Persona[]> {
    return this.http.get<Persona[]>(this.url);
  }

  public save(persona: Persona): Observable<Persona> {
    return this.http.post<Persona>(this.url, persona);
  }

}
