import { Injectable } from '@angular/core';
import { HttpClient } from '@angular/common/http';
import { Observable } from 'rxjs';

import { Account } from '../model/Account';

@Injectable({
  providedIn: 'root',
})
export class AppService {

  constructor(private http: HttpClient) { }

  getAccounts(): Observable<Account[]> {
    return this.http.get<Account[]>("../assets/mock.json");
  }

}