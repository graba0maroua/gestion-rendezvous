import { Component } from '@angular/core';
import { Disponibility, Rendezvous,RendezvousInitialize } from '../rendezvous.model';
import { RendezvousService } from '../rendezvous.service';
import { Router } from '@angular/router';
import { DisponibilityService } from '../disponibility.service';

@Component({
  selector: 'app-book-appointement',
  templateUrl: './book-appointement.component.html',
  styleUrls: ['./book-appointement.component.scss']
})
export class BookAppointementComponent {
  availableSlots: Disponibility[] = [];
  clientId: number = 1;
  selectedProfession: string = '';
  selectedProfessionalName: string = '';

  constructor(
    private rendezvousService: RendezvousService,
    private disponibilityService: DisponibilityService,
    private router: Router
  ) {}

  ngOnInit(): void {
    this.fetchAvailableSlots();
  }

  fetchAvailableSlots() {
    this.disponibilityService.getDisponibilities().subscribe(
      (slots: Disponibility[]) => {
        this.availableSlots = slots.filter(slot =>
          (this.selectedProfession ? slot.user.profession.toLowerCase() === this.selectedProfession.toLowerCase() : true) &&
          (this.selectedProfessionalName ? slot.user.name.toLowerCase().includes(this.selectedProfessionalName.toLowerCase()) : true)
        );
      },
      (error) => {
        console.error('Error fetching available slots:', error);
      }
    );
  }

  bookRendezvous(disponibilityId: number) {
    const rendezvous: RendezvousInitialize = {
      clientId: this.clientId,
      disponibilityId: disponibilityId,
    };

    this.rendezvousService.bookRendezvous(rendezvous).subscribe(
      (newRendezvous: Rendezvous) => {
        console.log('Rendezvous booked successfully:', newRendezvous);
        this.router.navigate(['/rendezvous']);
      },
      (error) => {
        console.error('Error booking rendezvous:', error);
      }
    );
  }
}
