import { ChangeDetectionStrategy, Component, EventEmitter, Input, OnInit, Output, ViewEncapsulation } from '@angular/core';
import { SearchEmployerDto } from 'src/interfaces/employers/employer';
import { SelectionModel } from "@angular/cdk/collections";
import { PageEvent } from '@angular/material/paginator';
import { CommonPagination } from 'src/interfaces/common/common';
import { DEFAULT_PAGINATION } from 'src/interfaces/constants/common.constants';
import { BehaviorSubject } from 'rxjs';

@Component({
  selector: 'app-employers-table',
  templateUrl: './employers-table.component.html',
  styleUrls: ['./employers-table.component.scss'],
  changeDetection: ChangeDetectionStrategy.OnPush,
})
export class EmployersTableComponent implements OnInit {

  @Input() dataSource: SearchEmployerDto[] = [];
  @Input() totalItems = 0;


  @Output() pageChange: EventEmitter<PageEvent> = new EventEmitter<PageEvent>();


  readonly pagination$ = new BehaviorSubject<CommonPagination>(DEFAULT_PAGINATION);
  displayedColumns: string[] = ['select', 'name', 'email', 'totalTime', 'totalPaidAmmount', 'totalOverTime', 'actions'];
  initialSelection = [];
  allowMultiSelect = true;
  selection = new SelectionModel<SearchEmployerDto>(this.allowMultiSelect, this.initialSelection);
  constructor() { }

  ngOnInit(): void {
    console.log('ssssssssssssssss', this.dataSource);
  }

    /** Whether the number of selected elements matches the total number of rows. */
    isAllSelected() {
      const numSelected = this.selection.selected.length;
      const numRows = this.dataSource.length;
      return numSelected == numRows;
    }

    /** Selects all rows if they are not all selected; otherwise clear selection. */
    toggleAllRows() {
      this.isAllSelected() ?
          this.selection.clear() :
          this.dataSource.forEach(row => this.selection.select(row));
    }

    public onPageChange(event: PageEvent): void {
      this.pageChange.emit(event);
    }
}
