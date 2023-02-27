import { Injectable } from "@angular/core";
import { HttpClient } from '@angular/common/http';

interface AuthResponseData {
  kind: string;
  idToken: string;
  email: string;
  refreshToken: string;
  expiresIn: string;
  localId: string;  
}

@Injectable({providedIn: 'root'})
export class Authservice {
  constructor(private http: HttpClient) {}
  
  signup (email: string, password: string) {
    return this.http.post(
        'https://identitytoolkit.googleapis.com/v1/accounts:signUp?key=AIzaSyCR7rSzDjIl1-tTB1ssIIjdmzS8g0YYqnU'),
        {
            email: email,
            password: password,
            returnSecureToken: true  
        }
    
  }  
}


