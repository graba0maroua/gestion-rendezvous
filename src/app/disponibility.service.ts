import { Injectable } from '@angular/core';
import { HttpClient } from '@angular/common/http';
import { Observable } from 'rxjs';
import { Disponibility, DisponibilityInitialize, DisponibilityItem } from './rendezvous.model';

@Injectable({
  providedIn: 'root'
})
export class DisponibilityService {
  private apiUrl = 'http://localhost:8088/disponibilities';

  constructor(private http: HttpClient) {}

  getDisponibilities(): Observable<Disponibility[]> {
    return this.http.get<Disponibility[]>(this.apiUrl);
  }

  getDisponibilityById(id: number): Observable<Disponibility> {
    return this.http.get<Disponibility>(`${this.apiUrl}/${id}`);
  }
   getDisponibilitiesByProfessionalId(professionalId: number): Observable<Disponibility[]> {
    return this.http.get<Disponibility[]>(`${this.apiUrl}/professional/${professionalId}`);
  }

  deleteDisponibility(id: number): Observable<void> {
    return this.http.delete<void>(`${this.apiUrl}/${id}`);
  }
  addDisponibility(disponibility: DisponibilityInitialize): Observable<DisponibilityItem> {
    return this.http.post<DisponibilityItem>(this.apiUrl, disponibility);
  }


}
