import { Component, OnInit } from '@angular/core';
import { Security } from '../store/security.model';

@Component({
  selector: 'app-add',
  templateUrl: './add.component.html',
  styleUrls: ['./add.component.scss']
})
export class AddComponent implements OnInit {
  model: Partial<Security> = {

  }
  constructor() {
  }

  ngOnInit(): void {
  }

}
