import { NgModule } from '@angular/core';
import { RouterModule, Routes } from '@angular/router';
import { UserSignupComponent } from './user-signup/user-signup.component';
import { UserLoginComponent } from './user-login/user-login.component';
import { RendezVousComponent } from './rendez-vous/rendez-vous.component';
import { DisponibilitesComponent } from './disponibilites/disponibilites.component';
import { BookAppointementComponent } from './book-appointement/book-appointement.component';
import { DashboardComponent } from './dashboard/dashboard.component';
import { HomeComponent } from './Home/home.component';
import { FormComponent } from './form/form.component';
import { RendezvousProComponent } from './rendezvous-pro/rendezvous-pro.component';

const routes: Routes = [
  { path: '', redirectTo: '/login', pathMatch: 'full' },
  { path: 'signup', component: UserSignupComponent },
  { path: 'client', component: HomeComponent },
  { path: 'login', component: UserLoginComponent },
  { path: 'form', component: FormComponent },
  { path: 'rendezvous', component: RendezVousComponent },
  { path: 'rendezvouspro', component: RendezvousProComponent },
  { path: 'dashboard', component: DashboardComponent },
  { path: 'disponibilites', component: DisponibilitesComponent },
  { path: 'book-appointment', component: BookAppointementComponent }
];
@NgModule({
  imports: [RouterModule.forRoot(routes)],
  exports: [RouterModule],
})
export class AppRoutingModule {}
