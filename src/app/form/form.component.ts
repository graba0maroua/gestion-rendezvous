import { Component } from '@angular/core';
import { DisponibilityService } from '../disponibility.service';
import {
  DisponibilityInitialize,
  DisponibilityItem,
} from '../rendezvous.model';
import { ActivatedRoute, Router } from '@angular/router';

@Component({
  selector: 'app-form',
  templateUrl: './form.component.html',
  styleUrls: ['./form.component.scss'],
})
export class FormComponent {
  disponibility: DisponibilityInitialize = {
    time: '',
    date: '',
    price: 100,
    professionalId: 10,
  };

  constructor(private disponibilityService: DisponibilityService, private router: Router) {}

  onSubmit(): void {
    this.addDisponibility();
  }

  addDisponibility(): void {
    this.disponibilityService.addDisponibility(this.disponibility).subscribe(
      () => {
        this.router.navigate(['/disponibilites']);
        alert('Disponibility added successfully');
      },
      (error) => {
        console.error('Error adding disponibility:', error);
        alert('An error occurred while adding the disponibility. Please try again.');
      }
    );
  }
}
