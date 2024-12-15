import { Component } from '@angular/core';
import { RendezvousService } from '../rendezvous.service';
import { HttpClient } from '@angular/common/http';

@Component({
  selector: 'app-rendezvous-pro',
  templateUrl: './rendezvous-pro.component.html',
  styleUrls: ['./rendezvous-pro.component.scss'],
})
export class RendezvousProComponent {
  rendezvousList: {
    name: string;
    email: string;
    phone: string;
    date: string;
    time: string;
    status: string;
    id: number;
  }[] = [];
  selectedRendezvousDetails: any = null;

  constructor(
    private rendezvousService: RendezvousService,
    private http: HttpClient
  ) {}

  ngOnInit(): void {
    this.loadRendezvous();
  }

  loadRendezvous() {
    this.rendezvousService.getRendezvousByClientId(1).subscribe((data) => {
      this.rendezvousList = data.map((r: any) => ({
        id: r.rendezvous.id,
        name: r.user.name,
        email: r.user.email,
        phone: r.user.phoneNumber,
        date: r.disponibility.disponibility.date,
        time: r.disponibility.disponibility.time,
        status: r.rendezvous.status,
      }));
    });
  }

  fetchDetails(rendezvous: any) {
    const apiUrl = `http://localhost:8088/rendezvous/${rendezvous.id}/details`;
    this.http.get(apiUrl).subscribe((details: any) => {
      this.selectedRendezvousDetails = details;
    });
  }
  cancelRendezvous(id: number): void {
    const apiUrl = `http://localhost:8088/rendezvous/${id}/cancel`;
    this.http.put(apiUrl, {}).subscribe(() => {
      this.loadRendezvous();
    });
  }

  confirmRendezvous(id: any): void {
    const apiUrl = `http://localhost:8088/rendezvous/${id}/confirm`;
    this.http.put(apiUrl, {}).subscribe(() => {
      this.loadRendezvous(); // Reload the list after updating
    });
  }

  deleteRendezvous(id: number): void {
    const apiUrl = `http://localhost:8088/rendezvous/${id}`;
    this.http.delete(apiUrl).subscribe(() => {
      this.loadRendezvous(); // Reload the list after deletion
    });
  }
}
