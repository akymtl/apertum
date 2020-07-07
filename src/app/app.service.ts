import { Injectable } from '@angular/core';
import { HttpClient } from '@angular/common/http';
import { Observable } from 'rxjs';
import { catchError } from 'rxjs/operators';

@Injectable({
  providedIn: 'root'
})
export class AppService {

  constructor(private http: HttpClient) { }

  login(payload: any): Observable<Object> {
    return this.http.post<Object>(`https://apertum-interview.herokuapp.com/api/user/login`, {
      accountId: payload.id,
      pswd: payload.pwd
    }).pipe(catchError(() => {
      return Observable.throw("Unable to login.");
    }));
  }

  getUsers(): Observable<Array<Object>> {
    return this.http.get<Array<Object>>(`https://apertum-interview.herokuapp.com/api/users`, {
      headers: {
        Authorization: `Bearer ${sessionStorage.getItem('token')}`
      }
    }).pipe(catchError(() => {
      return Observable.throw("Unable to fetch users list.");
    }));;
  }
}
