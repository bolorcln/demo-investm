import { Component, OnInit } from '@angular/core';
import { MatDialogRef } from '@angular/material/dialog';
import { Security } from '../store/security.model';

@Component({
  selector: 'app-add',
  templateUrl: './add.component.html',
  styleUrls: ['./add.component.scss']
})
export class AddComponent implements OnInit {
  constructor(
    private dialogRef: MatDialogRef<AddComponent>
  ) {
  }

  ngOnInit(): void {
  }

}
