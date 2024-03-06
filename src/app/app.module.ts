import { NgModule } from '@angular/core';
import { BrowserModule } from '@angular/platform-browser';
import { FormsModule } from '@angular/forms';

import { AppRoutingModule } from './app-routing.module';
import { AppComponent } from './app.component';
import { HomeComponent } from './home/home.component';
import { MovieDetailsComponent } from './movie-details/movie-details.component';
import { ShowtimesComponent } from './showtimes/showtimes.component';
import { SeatSelectionComponent } from './seat-selection/seat-selection.component';
import { AuthenticationComponent } from './authentication/authentication.component';
import { BookingComponent } from './booking/booking.component';
import { MovieFormComponent } from './admin/movie-form/movie-form.component';
import { MovieEditComponent } from './admin/movie-edit/movie-edit.component';
import { AlertComponent } from './alert/alert.component';

@NgModule({
  declarations: [
    AppComponent,
    HomeComponent,
    MovieDetailsComponent,
    ShowtimesComponent,
    SeatSelectionComponent,
    AuthenticationComponent,
    BookingComponent,
    MovieFormComponent,
    MovieEditComponent,
    AlertComponent
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
