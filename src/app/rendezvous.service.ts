import { Injectable } from '@angular/core';
import { HttpClient } from '@angular/common/http';
import { Observable } from 'rxjs';
import { Rendezvous, RendezvousInitialize, RendezvousWithUserWithDisponibility } from './rendezvous.model';

@Injectable({
  providedIn: 'root'
})
export class RendezvousService {
  private apiRdv = 'http://localhost:8088/rendezvous';
  private apiUser = 'http://localhost:8088/users';
  private apiDis = 'http://localhost:8088/disponibilities';

  constructor(private http: HttpClient) { }


  getRendezvous(): Observable<Rendezvous[]> {
    return this.http.get<Rendezvous[]>(this.apiRdv);
  }

  getRendezvousByClientId(clientId: number): Observable<RendezvousWithUserWithDisponibility[]> {
    return this.http.get<RendezvousWithUserWithDisponibility[]>(`${this.apiRdv}/client/${clientId}`);
  }
  bookRendezvous(rendezvous: RendezvousInitialize): Observable<Rendezvous> {
    return this.http.post<Rendezvous>(this.apiRdv, rendezvous);
  }

}
