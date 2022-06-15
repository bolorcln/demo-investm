import { Component, Input, OnInit } from '@angular/core';
import { FormBuilder, FormGroup } from '@angular/forms';
import { Security } from '../store/security.model';

@Component({
  selector: 'app-form',
  templateUrl: './form.component.html',
  styleUrls: ['./form.component.scss']
})
export class FormComponent implements OnInit {
  @Input() model: Security | undefined;

  private _model: Partial<Security>;
  formGroup: FormGroup;
  constructor(
    private formBuilder: FormBuilder
  ) {
    console.log(this.model);
    if (this.model) {
      this._model = this.model;
    } else {
      this._model = {
        organizationId: undefined,
        securityName: undefined,
        issuerTypeId: undefined,
        issuerTypeName: undefined,
        accountNo: undefined,
        investmentType: undefined,
        unitAccountValue: undefined,
        startDate: undefined,
        endDate: undefined
      }
    }
    this.formGroup = this.formBuilder.group({
      issuerName: [this._model.organizationName],
      securityName: [this._model.securityName],
      issuerTypeId: [this._model.issuerTypeId]
    })
  }

  ngOnInit(): void {

  }

  onSubmit() {
    console.log(this.formGroup.value)
  }

}
