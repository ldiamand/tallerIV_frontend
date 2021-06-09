import { HttpClient } from '@angular/common/http';
import { Injectable } from '@angular/core';
import { Observable } from 'rxjs';
import { environment } from 'src/environments/environment';
import { Usuario } from './usuario';

@Injectable({
  providedIn: 'root'
})
export class AuthService {

  private url = environment.base + '/auth';
  constructor(private http: HttpClient) { }

  public login(usuario: Usuario): Observable<any> {
    return this.http.post<Usuario>(this.url, usuario);
  }

}
