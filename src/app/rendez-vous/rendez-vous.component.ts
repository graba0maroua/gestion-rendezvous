import { Component } from '@angular/core';

@Component({
  selector: 'app-rendez-vous',
  templateUrl: './rendez-vous.component.html',
  styleUrls: ['./rendez-vous.component.scss']
})
export class RendezVousComponent {
  // Original list of rendezvous
  rendezVousList = [
    { date: '2024-12-01', heure: '10:00', price: 1500, professional: 'Dr. Smith', status: 'Confirmer' },
    { date: '2024-12-02', heure: '11:30', price: 2000, professional: 'Dr. John', status: 'En attente' },
    { date: '2024-12-01', heure: '09:00', price: 1200, professional: 'Dr. Smith', status: 'Annuler' }
  ];
// Confirmer un rendez-vous
confirmerRendezVous(rendezvous: any): void {
  if (rendezvous.status === 'En attente') {
    rendezvous.status = 'Confirmer';
    alert(`Le rendez-vous avec ${rendezvous.professional} a été confirmé.`);
  }
}

// Annuler un rendez-vous
annulerRendezVous(rendezvous: any): void {
  if (rendezvous.status === 'Confirmer') {
    rendezvous.status = 'En attente';
    alert(`Le rendez-vous avec ${rendezvous.professional} a été annulé.`);
  }
}

  // Filtered list for display
  filteredRendezVousList = [...this.rendezVousList];

  // Filter values
  filterDate: string = '';
  filterProfessional: string = '';
  filterStatus: string = '';

  // Method to apply filters
  applyFilters(): void {
    this.filteredRendezVousList = this.rendezVousList.filter(rendezvous => {
      const matchesDate = this.filterDate ? rendezvous.date === this.filterDate : true;
      const matchesProfessional = this.filterProfessional
        ? rendezvous.professional.toLowerCase().includes(this.filterProfessional.toLowerCase())
        : true;
      const matchesStatus = this.filterStatus ? rendezvous.status === this.filterStatus : true;

      return matchesDate && matchesProfessional && matchesStatus;
    });
  }

}
