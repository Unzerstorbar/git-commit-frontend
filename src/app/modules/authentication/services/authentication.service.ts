import { Injectable } from '@angular/core';
import {HttpClient, HttpHeaders} from "@angular/common/http";
import {environment} from "../../../../environments/environment";
import {catchError, map, tap} from "rxjs/operators";
import {BehaviorSubject} from "rxjs";
import {UserData} from "../utils/authentication.types";



@Injectable({
  providedIn: 'root'
})
export class AuthenticationService {

  public userData: BehaviorSubject<UserData>;

  constructor(private http: HttpClient) {
    this.userData = new BehaviorSubject<UserData>(JSON.parse(localStorage.getItem('userData')));
  }

  public get getUserData(): UserData {
    return this.userData.getValue();
  }

  getAuthorizationHeaders() {
      return new HttpHeaders({
          'Authorization': `${this.getUserData.token_type} ${this.getUserData.access_token}`
      });
  }


  login(email: string, password: string) {
    return this.http
        .post<any>(`${environment.apiUrl}/auth/login`, { email, password })
        .pipe(
            map(token => {
                if (token) {
                    localStorage.setItem('userData', JSON.stringify(token));
                    this.userData.next(token);
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
      const headers = this.getAuthorizationHeaders();
    return this.http.get(`${environment.apiUrl}/auth/logout`, {headers})
        .pipe(
          tap(() => {
            localStorage.removeItem('userData');
            this.userData.next(null)
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
