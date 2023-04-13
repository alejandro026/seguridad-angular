import { HttpClient } from '@angular/common/http';
import { Injectable } from '@angular/core';
import { Route, Router } from '@angular/router';
import { BehaviorSubject, Observable } from 'rxjs';

@Injectable({
  providedIn: 'root'
})
export class AuthService {

  private token= new BehaviorSubject<string>("");
  private tokenData = new BehaviorSubject<any>({});

  constructor(private http: HttpClient,
    private router: Router) { }


    get token$(): Observable<string> {
      return this.token.asObservable();
    }

    get tokenData$(): Observable<any> {
      return this.tokenData.asObservable();
    }



}
