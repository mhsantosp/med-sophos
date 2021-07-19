import { Injectable } from '@angular/core';
import { HttpClient } from '@angular/common/http';
import { CitasResponse } from '../interface/citas.interface';
import { Observable } from 'rxjs';

@Injectable({
  providedIn: 'root'
})
export class ServiceService {

  private apiUrl: string = 'http://localhost:8080/appoinmentscontroller/api';

  constructor(private http: HttpClient) { }

  verCitas(): Observable<CitasResponse[]> {
    const url = `${this.apiUrl}/getlist`;
    return this.http.get<CitasResponse[]>(url);
  }

  verCitasById(id: number): Observable<CitasResponse> {
    const url = `${this.apiUrl}/getbyid/${id}`;
    return this.http.get<CitasResponse>(url);
  }

  addCitas(cita: CitasResponse): Observable<CitasResponse> {
    const url = `${this.apiUrl}/post`;
    return this.http.post<CitasResponse>(url, cita);
  }

  actCitas(cita: CitasResponse): Observable<CitasResponse> {
    const url = `${this.apiUrl}/put`;
    return this.http.put<CitasResponse>(url, cita);
  }

  eliminarCitasById(id: number): Observable<CitasResponse> {
    const url = `${this.apiUrl}/delete/${id}`;
    return this.http.delete<CitasResponse>(url);
  }

}
