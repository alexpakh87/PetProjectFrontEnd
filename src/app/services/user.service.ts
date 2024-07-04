import { Injectable } from '@angular/core';
import { HttpClient } from '@angular/common/http'
import { Observable } from 'rxjs';
import { User } from '../models/user';

@Injectable({
  providedIn: 'root'
})
export class UserService {

  private baseURL = "http://localhost:8080/api/rent/customers";


  constructor(private httpClient: HttpClient) { }

  getUsersList(): Observable<User[]> {
    return this.httpClient.get<User[]>(`${this.baseURL}`);
  }

  userSignup(user: User): Observable<User> {
    return this.httpClient.post<User>(`${this.baseURL}/add user`, user);
  }
}
