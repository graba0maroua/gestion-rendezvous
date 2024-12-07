import { NgModule } from '@angular/core';
import { BrowserModule } from '@angular/platform-browser';

import { AppRoutingModule } from './app-routing.module';
import { AppComponent } from './app.component';
import { UserSignupComponent } from './user-signup/user-signup.component';
import { UserLoginComponent } from './user-login/user-login.component';
import { RendezVousComponent } from './rendez-vous/rendez-vous.component';
import { FormsModule } from '@angular/forms';
import { ConfirmationComponent } from './confirmation/confirmation.component';
import { HomeComponent } from './home/home.component';
import { DisponibilitesComponent } from './disponibilites/disponibilites.component';


@NgModule({
  declarations: [
    AppComponent,
    UserSignupComponent,
    UserLoginComponent,
    RendezVousComponent,
    ConfirmationComponent,
    HomeComponent,
    DisponibilitesComponent,

  ],
  imports: [
    BrowserModule,
    AppRoutingModule,
    FormsModule 
  ],
  providers: [],
  bootstrap: [AppComponent]
})
export class AppModule { }
