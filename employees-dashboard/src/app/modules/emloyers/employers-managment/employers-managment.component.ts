import { ChangeDetectionStrategy, Component, OnInit } from '@angular/core';
import { SearchEmployerDto } from 'src/interfaces/employers/employer';
import { EmployersServiceService } from '../services/employers-service.service';
import { BehaviorSubject, combineLatest, Observable } from 'rxjs';
import { map,switchMap,tap } from 'rxjs/operators';
import { PageEvent } from '@angular/material/paginator';

@Component({
  selector: 'app-employers-managment',
  templateUrl: './employers-managment.component.html',
  styleUrls: ['./employers-managment.component.scss'],
  changeDetection: ChangeDetectionStrategy.OnPush
})
export class EmployersManagmentComponent implements OnInit {

  readonly displayedColumns$: BehaviorSubject<string[]> = new BehaviorSubject<string[]>(['select', 'name', 'email', 'totalTime', 'totalPaidAmmount', 'totalOverTime']);

  dataSource$: Observable<SearchEmployerDto[]>;
  readonly pagination$ = new BehaviorSubject<{page: number, size: number}>({page: 1, size: 10});
  readonly totalItems$ = new BehaviorSubject<number>(0);
  readonly totalClockTime$ = new BehaviorSubject<number>(0);
  readonly totalPaidAmount$ = new BehaviorSubject<number>(0);
  readonly totalPaidOvertime$ = new BehaviorSubject<number>(0);



  constructor(private readonly employersSrv: EmployersServiceService) {
    this.dataSource$ = combineLatest([this.pagination$])
    .pipe(
      switchMap(([pagination]) => this.employersSrv.getEmloyerList(pagination.page, pagination.size)),
      tap(res => this.totalItems$.next(res?.totalItems ?? 0)),
      tap(res => this.totalClockTime$.next(res?.totalClockTime ?? 0)),
      tap(res => this.totalPaidAmount$.next(res?.totalPaidAmount ?? 0)),
      tap(res => this.totalPaidOvertime$.next(res?.totalPaidOvertime ?? 0)),
      map(res => res.data)
    )
  }

  ngOnInit(): void {
  }

  onPageChange(event: PageEvent) {
    this.pagination$.next({page: event.pageIndex, size: event.pageSize});
  }

}
