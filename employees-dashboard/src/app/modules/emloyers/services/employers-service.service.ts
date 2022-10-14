import { Injectable } from '@angular/core';
import { Observable } from 'rxjs';
import { EmployersServiceApiService } from './api/employers-service-api.service';

@Injectable({
  providedIn: 'root'
})
export class EmployersServiceService {

  constructor(private readonly employersApiSrv: EmployersServiceApiService) {}

  getEmloyerList(page: number, size: number): Observable<any> {
    return this.employersApiSrv.getEmloyerList(page, size);
  }
}
