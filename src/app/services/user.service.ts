import { Injectable } from '@angular/core';
import { HttpClient } from '@angular/common/http'
import { Observable } from 'rxjs';
import { User } from '../models/user';
import { environment } from 'src/environments/environment';


@Injectable({
  providedIn: 'root'
})
export class UserService {

  private baseURL = environment.apiUrl;


  constructor(private httpClient: HttpClient) { }

  getUsersList(): Observable<User[]> {
    return this.httpClient.get<User[]>(`${this.baseURL}/all_customers`);
  }

  userSignup(user: User): Observable<User> {
    return this.httpClient.post<User>(`${this.baseURL}/add user`, user);
  }
}
