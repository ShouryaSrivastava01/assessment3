import { Injectable } from '@angular/core';

@Injectable({
  providedIn: 'root'
})
export class AuthService {

  admin={
    email : 'admin@gmail.com',
    password : 'admin'
  }

  users=[
    { email : 'abc@gmail.com', password : 'abc'},
    {email: 'shourya@gmail.com', password: 'shourya'},
    {...this.admin}
  ]

  constructor() { }




  login(email:string, password: string){
      let user = this.users.find(t => t.email === email)
      console.log("called")
      if(user.password === password){
        localStorage.setItem('loginUser', JSON.stringify({email, password}))
        console.log('loginin')
        return true;
      }
      return false;
  }

  isLoggedIn():boolean{
    return !!localStorage.getItem('loginUser')
  }

  isAdmin():boolean{
    let user = JSON.parse(localStorage.getItem('loginUser'))
    if(!user) return false
    if(user.email === this.admin.email && user.password === this.admin.password) return true;
    return false;
  }

  logout(){
    localStorage.removeItem('loginUser')
    
  }
}
