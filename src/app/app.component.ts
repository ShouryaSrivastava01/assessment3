import { Component } from '@angular/core';
import { Router } from '@angular/router';

import { AuthService } from './auth.service';

@Component({
  selector: 'app-root',
  templateUrl: './app.component.html',
  styleUrl: './app.component.css'
})
export class AppComponent {
  title = 'assessment3';
  constructor(
    private auth: AuthService,
    private router: Router){}

  isLogginIn():boolean{
    return this.auth.isLoggedIn()
  }

  logout(){
    this.auth.logout()
    this.router.navigate([''])

  }

  isAdmin():boolean{
    return this.auth.isAdmin()
  }
}
