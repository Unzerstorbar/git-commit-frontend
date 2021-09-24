import { Injectable } from '@angular/core';
import {HttpClient, HttpHeaders} from "@angular/common/http";
import {environment} from "../../../../environments/environment";
import {catchError, map, tap} from "rxjs/operators";
import {BehaviorSubject} from "rxjs";
import {Token} from "../utils/authentication.types";



@Injectable({
  providedIn: 'root'
})
export class AuthenticationService {

  private token: BehaviorSubject<Token>;

  constructor(private http: HttpClient) {
    this.token = new BehaviorSubject<Token>(JSON.parse(localStorage.getItem('token')));
  }

  public get getToken(): Token {
    return this.token.getValue();
  }

  getAuthorizationHeaders() {
      const options = new HttpHeaders();
      options.set('Authorization', `${this.getToken.token_type} ${this.getToken.access_token}`);
      return options;
  }


  login(email: string, password: string) {
    return this.http
        .post<any>(`${environment.apiUrl}/auth/login`, { email, password })
        .pipe(
            map(token => {
                if (token) {
                    localStorage.setItem('token', JSON.stringify(token));
                    this.token.next(token);
                    return {success: true };
                }
                return {success: false };
            }),
            catchError(() => {
                return [{success: false}];
            }),
        );
  }

  logout() {
    return this.http.get(`${environment.apiUrl}/auth/logout`)
        .pipe(
          tap(() => {
            localStorage.removeItem('token');
            this.token.next(null);
          })
        );
  }

  registration(data: {name: string, email: string, password: string, c_password: string}) {
      return this.http.post(`${environment.apiUrl}/auth/register`, data)
          .pipe(
            map(res => ({success: true})),
            catchError((err) => {
                return [{success: false}];
            })
      );
  }

}
