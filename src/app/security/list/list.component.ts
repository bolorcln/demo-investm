import { Component, OnDestroy, OnInit } from '@angular/core';
import { MatDialog } from '@angular/material/dialog';
import { MatTableDataSource } from '@angular/material/table';
import { select, Store } from '@ngrx/store';
import { Subject, takeUntil, throttle } from 'rxjs';
import { AddComponent } from '../add/add.component';
import { EditComponent } from '../edit/edit.component';
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
    private store$: Store<SecurityState>,
    private dialog: MatDialog
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

  addSecurity() {
    this.dialog.open(AddComponent, {
      width: '80vw'
    })
  }

  editSecurity(security: Security) {
    this.dialog.open(EditComponent, {
      width: '80vw',
      data: security
    })
  }

  deleteSecurity(security: Security) {}
}
