import { Component } from '@angular/core';
import { Router } from '@angular/router';

@Component({
  selector: 'app-rendez-vous',
  templateUrl: './rendez-vous.component.html',
  styleUrls: ['./rendez-vous.component.scss']
})
export class RendezVousComponent {
  constructor(private router: Router) {}

  // Original list of rendezvous
  rendezVousList = [
    { date: '2024-12-02', heure: '11:30', price: 1500, professional: 'Dr. Hamid', status: 'En attente' },
    { date: '2024-12-05', heure: '11:00', price: 1800, professional: 'Dr. Karima', status: 'En attente' },
    { date: '2024-12-10', heure: '12:30', price: 2000, professional: 'Dr. Bali', status: 'En attente' },
    { date: '2024-12-01', heure: '10:00', price: 1500, professional: 'Dr. Bouaalam', status: 'Confirmer' },
    { date: '2024-12-01', heure: '09:00', price: 1200, professional: 'Dr. Soumia', status: 'Annuler' }
  ];
// Confirmer un rendez-vous
confirmerRendezVous(rendezvous: any): void {
  if (rendezvous.status === 'En attente') {
    rendezvous.status = 'Confirmer';
    alert(`Le rendez-vous avec ${rendezvous.professional} le ${rendezvous.date} à ${rendezvous.heure} a été reservé veuillez le confirmé .`);
 this.router.navigate(['/confirmation']); }
}

// Annuler un rendez-vous
annulerRendezVous(rendezvous: any): void {
  if (rendezvous.status === 'Confirmer') {
    rendezvous.status = 'En attente';
    alert(`Le rendez-vous avec ${rendezvous.professional} a été annulé.`);
  }
}
  // Global notification setting
  globalNotificationHours: number | null = null;

// Set global notification time
setGlobalNotification(): void {
  if (this.globalNotificationHours && this.globalNotificationHours > 0) {
    alert(`Global notification set for ${this.globalNotificationHours} hour(s) before all appointments.`);
  } else {
    alert('Please enter a valid number of hours.');
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
