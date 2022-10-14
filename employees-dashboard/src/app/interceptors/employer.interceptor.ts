import { Injectable } from '@angular/core';
import {
  HttpRequest,
  HttpHandler,
  HttpEvent,
  HttpInterceptor,
  HttpResponse
} from '@angular/common/http';
import { Observable, of } from 'rxjs';
import { EmployersMock } from './mock-data/employer.mock';
import { SearchEmployerDto } from 'src/interfaces/employers/employer';
import { delay, dematerialize, materialize, mergeMap } from "rxjs/operators";

@Injectable()
export class EmployerInterceptor implements HttpInterceptor {


  constructor() {}

  intercept(request: HttpRequest<unknown>, next: HttpHandler): Observable<HttpEvent<any>> {
    const {url, method, params} = request;

    const emloyerMock = new EmployersMock();

    return of(null)
    .pipe(mergeMap(handleRoute))
    .pipe(materialize())
    .pipe(delay(300))
    .pipe(dematerialize());
    function handleRoute() {
      const page = params.get('page') || 1;
      const size = params.get('size') || 0;

      if (url.endsWith('emloyer-list/') && method === 'GET'){
        const data = emloyerMock.getData(+page, +size);
        let totalClockTime = 0;
        let totalPaidAmount = 0;
        let totalPaidOvertime = 0;

        emloyerMock.emloyersData.forEach((el: SearchEmployerDto) => {
          totalClockTime = el.totalClock + totalClockTime;
          totalPaidAmount = el.totalAmount + totalPaidAmount;
          totalPaidOvertime = el.totalOverTimeAmout + totalPaidOvertime;
        })

        return of(new HttpResponse( {status: 200, body: {
          data: data,
          totalItems: emloyerMock.emloyersData.length,
          totalClockTime: totalClockTime,
          totalPaidAmount: totalPaidAmount,
          totalPaidOvertime: totalPaidOvertime,
        }}));
      }
      return next.handle(request);
    }

  }
}
