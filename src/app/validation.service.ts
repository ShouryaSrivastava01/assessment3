import { Injectable } from '@angular/core';

@Injectable({
  providedIn: 'root'
})
export class ValidationService {

  constructor() { }

 
  validate(title:string){
    const nameRegex= /^[a-zA-Z0-9\s\-]{1,100}$/
    return nameRegex.test(title)
  }


}
