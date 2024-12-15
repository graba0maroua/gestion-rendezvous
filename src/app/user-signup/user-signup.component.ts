import { Component } from '@angular/core';
import { FormBuilder, FormGroup, Validators } from '@angular/forms';
import { Router } from '@angular/router';

@Component({
  selector: 'app-user-signup',
  templateUrl: './user-signup.component.html',
  styleUrls: ['./user-signup.component.scss'],
})
export class UserSignupComponent {
  signupForm: FormGroup;

  constructor(private fb: FormBuilder, private router: Router) {
    this.signupForm = this.fb.group({
      name: ['', [Validators.required, Validators.minLength(3)]],
      email: ['', [Validators.required, Validators.email]],
      dateOfBirth: ['', Validators.required],
      phone: ['', [Validators.required, Validators.pattern(/^\d{10}$/)]],
      role: ['', Validators.required],
      profession: [''], // Optional: dynamically validated
    });

    // Dynamically validate "profession" field
    this.signupForm.get('role')?.valueChanges.subscribe((role) => {
      const professionControl = this.signupForm.get('profession');
      if (role === 'professional') {
        professionControl?.setValidators([Validators.required]);
      } else {
        professionControl?.clearValidators();
      }
      professionControl?.updateValueAndValidity();
    });
  }

  onSubmit() {
    if (this.signupForm.valid) {
      const { email, role } = this.signupForm.value;

      if (role === 'client') {
        this.router.navigate(['/client']);
      } else if (role === 'professional') {
        this.router.navigate(['/dashboard']);
      }
      {
        console.error('Invalid email for signup.');
      }
    } else {
      console.error('Form is invalid');
    }
  }
}
