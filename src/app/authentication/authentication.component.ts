import { Component } from '@angular/core';
import { NgForm } from '@angular/forms';
import { Router } from '@angular/router';
import { AuthService } from '../auth.service';

@Component({
  selector: 'app-authentication',
  templateUrl: './authentication.component.html',
  styleUrl: './authentication.component.css'
})
export class AuthenticationComponent {
  errorMessage=null

  constructor(
    private auth : AuthService,
    private router: Router
    ){}

  onSubmit(form: NgForm){
    if(this.auth.login(form.value.email, form.value.password)){
      this.router.navigate([''])
    }else{
      this.errorMessage="User not valid"
    }
  }

  isAdmin(){
    console.log(this.auth.isAdmin()) 
  }


}
