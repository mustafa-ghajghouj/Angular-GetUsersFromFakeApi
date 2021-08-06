import { HttpClient } from '@angular/common/http';
import { Injectable } from '@angular/core';
import { Observable } from 'rxjs';
import { Iuser } from '../user';

@Injectable({
  providedIn: 'root'
})
export class UsersService {
url="https://jsonplaceholder.typicode.com/users";
  constructor(public http:HttpClient) { }
  public getUsers() : Observable<Iuser[]>
  {
    return this.http.get<Iuser[]>(this.url);
  }
}
