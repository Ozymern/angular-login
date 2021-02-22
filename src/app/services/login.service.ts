import { HttpClient } from '@angular/common/http';
import { Injectable } from '@angular/core';
import { User } from '../models/login.model';

@Injectable({
  providedIn: 'root'
})
export class LoginService {

  constructor(private httpClient: HttpClient) { }

  private url = 'http://localhost:8081/api/login';

  post(loginData:User,token:any){
 
    const user = {
      'username': loginData.username,
      'password': loginData.password,
      'recaptchaToken': token
    };

console.log(user)
    return this.httpClient.post(this.url,user).subscribe(
      data  => {
      console.log("POST Request is successful ", data);
      },
      error  => {
      
      console.log("Error", error);
      
      }
      
      );

  }
}
