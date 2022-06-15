import { Component, OnDestroy, OnInit } from '@angular/core';
import { MatTableDataSource } from '@angular/material/table';
import { select, Store } from '@ngrx/store';
import { Subject, takeUntil, throttle } from 'rxjs';
import { requestSecurities } from '../store/security.actions';
import { Security } from '../store/security.model';
import { SecurityState } from '../store/security.reducer';
import { selectSecurities } from '../store/security.selectors';

@Component({
  selector: 'app-list',
  templateUrl: './list.component.html',
  styleUrls: ['./list.component.scss']
})
export class ListComponent implements OnInit, OnDestroy {

  dataSource = new MatTableDataSource<Security>();
  columns = ['org_id', 'org_name', 'security_name', 'security_type', 'account_no', 'investment_type', 'unit_account_value', 'start_date', 'end_date', 'actions']
  securities$ = this.store$.select(selectSecurities)

  private _onDestroy$: Subject<void> = new Subject();

  constructor(
    private store$: Store<SecurityState>
  ) { }

  ngOnInit(): void {
    this.store$.dispatch(requestSecurities());

    this.store$.pipe(
      takeUntil(this._onDestroy$),
      select(selectSecurities)
    ).subscribe(res => {
      this.dataSource.data = res;
    })
  }

  ngOnDestroy(): void {
    this._onDestroy$.next();
    this._onDestroy$.complete();
  }
}
