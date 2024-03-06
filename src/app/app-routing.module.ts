import { NgModule } from '@angular/core';
import { RouterModule, Routes } from '@angular/router';
import { HomeComponent } from './home/home.component';
import { MovieDetailsComponent } from './movie-details/movie-details.component';
import { ShowtimesComponent } from './showtimes/showtimes.component';
import { SeatSelectionComponent } from './seat-selection/seat-selection.component';
import { BookingComponent } from './booking/booking.component';
import { AuthenticationComponent } from './authentication/authentication.component';
import { AuthGuard } from './auth.guard';
import { MovieFormComponent } from './admin/movie-form/movie-form.component';
import { MovieEditComponent } from './admin/movie-edit/movie-edit.component';

const routes: Routes = [
  {path:'', component:HomeComponent},
  {path:'movie/:id', component:MovieDetailsComponent, canActivate:[AuthGuard]},
  {path:'showtime/:id', component:ShowtimesComponent, canActivate:[AuthGuard]},
  {path:'showtime/:id/:idx', component:SeatSelectionComponent, canActivate:[AuthGuard]},
  {path:'booking/:id/:idx', component: BookingComponent, canActivate:[AuthGuard]},
  {path:'auth', component:AuthenticationComponent},
  {path:'form', component:MovieFormComponent},
  {path:'movie-edit/:id', component:MovieEditComponent}
];

@NgModule({
  imports: [RouterModule.forRoot(routes)],
  exports: [RouterModule]
})
export class AppRoutingModule { }
