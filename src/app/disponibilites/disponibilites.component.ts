import { Component } from '@angular/core';
import { Disponibility } from '../rendezvous.model';
import { DisponibilityService } from '../disponibility.service';

@Component({
  selector: 'app-disponibilites',
  templateUrl: './disponibilites.component.html',
  styleUrls: ['./disponibilites.component.scss']
})
export class DisponibilitesComponent {
  disponibilities: Disponibility[] = [];
  professionalId: number = 10; // Example professionalId

  constructor(private disponibilityService: DisponibilityService) {}

  ngOnInit(): void {
    this.loadDisponibilities();
  }

  loadDisponibilities(): void {
    this.disponibilityService.getDisponibilitiesByProfessionalId(this.professionalId)
      .subscribe((data: Disponibility[]) => {
        this.disponibilities = data;
      });
  }

  deleteDisponibility(id: number): void {
    this.disponibilityService.deleteDisponibility(id).subscribe(() => {
      this.loadDisponibilities(); // Refresh list after deletion
    });
  }
}
