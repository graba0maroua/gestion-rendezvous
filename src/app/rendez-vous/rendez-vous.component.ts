import { Component, OnInit } from '@angular/core';
import { RendezvousService } from '../rendezvous.service';
import { RendezvousWithUserWithDisponibility } from '../rendezvous.model';
import { HttpClient } from '@angular/common/http';



@Component({
  selector: 'app-rendezvous',
  templateUrl: './rendez-vous.component.html',
  styleUrls: ['./rendez-vous.component.scss']
})
export class RendezVousComponent implements OnInit {
  rendezvousList: { name: string, profession: string, date: string, time: string, status: string, id: number }[] = [];
  selectedRendezvousDetails: any = null;

  constructor(private rendezvousService: RendezvousService, private http: HttpClient) {}

  ngOnInit(): void {
    this.loadRendezvous();
  }

  loadRendezvous() {
    this.rendezvousService.getRendezvousByClientId(1)
    .subscribe(data => {
      this.rendezvousList = data.map((r: any) => ({
        id: r.rendezvous.id,
        name: r.disponibility.user.name,
        profession: r.disponibility.user.profession,
          date: r.disponibility.disponibility.date,
          time: r.disponibility.disponibility.time,
          status: r.rendezvous.status
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
