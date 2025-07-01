import { Injectable } from '@angular/core';
import { HttpClient } from '@angular/common/http';
import { Observable } from 'rxjs';
import { Alumno } from '../model/alumno.model';
import { environment } from '../../environments/environment';

@Injectable({ providedIn: 'root' })
export class AlumnoService {
  private baseUrl = `${environment.apiUrl}/alumnos/alumno`;

  constructor(private http: HttpClient) { }

  getAll(): Observable<Alumno[]> {
    return this.http.get<Alumno[]>(this.baseUrl);
  }

  get(id: number): Observable<Alumno> {
    return this.http.get<Alumno>(`${this.baseUrl}/${id}`);
  }

  create(alumno: Alumno): Observable<Alumno> {
    return this.http.post<Alumno>(this.baseUrl, alumno);
  }

  update(id: number, alumno: Alumno): Observable<Alumno> {
    return this.http.put<Alumno>(`${this.baseUrl}/${id}`, alumno);
  }

  delete(id: number): Observable<void> {
    return this.http.delete<void>(`${this.baseUrl}/${id}`);
  }
}
