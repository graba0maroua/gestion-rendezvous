import { Component } from '@angular/core';
import { Router } from '@angular/router';

@Component({
  selector: 'app-confirmation',
  templateUrl: './confirmation.component.html',
  styleUrls: ['./confirmation.component.scss']
})
export class ConfirmationComponent {
  confirmationCode: string = '';
  staticCode: string = '200';

  constructor(private router: Router) {}

  // Method to validate the confirmation code
  validateCode(): void {
    if (this.confirmationCode === this.staticCode) {
      alert('Code correct! Rendez vous confirmed');
    } else {
      alert('Code incorrect. Please try again.');
      this.router.navigate(['/rendez-vous']);
    }
  }
}
