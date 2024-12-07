import { NgModule } from '@angular/core';
import { RouterModule, Routes } from '@angular/router';
import { UserSignupComponent } from './user-signup/user-signup.component';
import { UserLoginComponent } from './user-login/user-login.component';
import { RendezVousComponent } from './rendez-vous/rendez-vous.component';
import { ConfirmationComponent } from './confirmation/confirmation.component';
import { HomeComponent } from './home/home.component';
import { DisponibilitesComponent } from './disponibilites/disponibilites.component';

const routes: Routes = [
  { path: '', component: HomeComponent },
  { path: 'signup', component: UserSignupComponent },
  { path: 'login', component: UserLoginComponent },
  { path: 'rendez-vous', component: RendezVousComponent },
  { path: 'confirmation', component: ConfirmationComponent },
  { path: 'disponibilites', component: DisponibilitesComponent },


];
@NgModule({
  imports: [RouterModule.forRoot(routes)],
  exports: [RouterModule]
})
export class AppRoutingModule { }
