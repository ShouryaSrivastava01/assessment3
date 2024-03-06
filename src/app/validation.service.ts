import { Injectable } from '@angular/core';

@Injectable({
  providedIn: 'root'
})
export class ValidationService {

  constructor() { }

  validateName(name:string){
    const nameRegex= /^[a-zA-Z]{2,}$/
    return nameRegex.test(name)
  }
  validate(title:string){
    const nameRegex= /^[a-zA-Z0-9\s\-]{1,100}$/
    return nameRegex.test(title)
  }

  validateEmail(email:string){
    const emailRegex = /^[a-zA-Z0-9._%+-]+@[a-zA-Z0-9.-]+\.[a-zA-Z]{2,}$/
    return emailRegex.test(email)
  }

  validatePhone(phone:string){
    const phoneRegex = /^[0-9]{10}$/
    return phoneRegex.test(phone)
  }

  validateAddress(address: string) {
    const addRegex = /^[a-zA-Z0-9\s.,#-]+$/
    return addRegex.test(address)
  }

}
