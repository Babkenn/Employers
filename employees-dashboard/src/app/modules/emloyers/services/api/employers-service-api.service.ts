import { HttpClient } from '@angular/common/http';
import { Injectable } from '@angular/core';
import { Observable } from 'rxjs';

@Injectable({
  providedIn: 'root'
})
export class EmployersServiceApiService {

  constructor(private readonly httpClient: HttpClient) { }

  getEmloyerList(page: number, size: number): Observable<any> {
    return this.httpClient.get(`/emloyer-list/`, { params: {page: page, size: size}});
  }
}
