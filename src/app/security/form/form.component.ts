import { Component, Input, OnInit } from '@angular/core';
import { FormBuilder, FormGroup } from '@angular/forms';
import { Store } from '@ngrx/store';
import { addSecurity } from '../store/security.actions';
import { Security } from '../store/security.model';
import { SecurityState } from '../store/security.reducer';
import { SecurityService } from '../store/security.service';

@Component({
  selector: 'app-form',
  templateUrl: './form.component.html',
  styleUrls: ['./form.component.scss']
})
export class FormComponent implements OnInit {
  @Input() model: Security | undefined;

  private _model: Partial<Security> | undefined;
  formGroup: FormGroup | undefined;

  securityNames$ = this.service.getSecurityNames()
  productTypes$ = this.service.getProductTypes()
  issuerTypes$ = this.service.getIssuerTypes()
  investmentKinds$ = this.service.getInvestmentKinds();
  investmentTypes$ = this.service.getInvestmentTypes();
  issuerRatings$ = this.service.getIssuerRatings();
  currency = [
    'MNT',
    'USD',
    'CNY'
  ]
  interestPaymentPeriods$ = this.service.getInterestPaymentPeriod();
  formOfInterests$ = this.service.getFormOfInterests();

  constructor(
    private formBuilder: FormBuilder,
    private service: SecurityService,
    private store: Store<SecurityState>
  ) {
  }

  ngOnInit(): void {
    if (this.model) {
      this._model = this.model;
    } else {
      this._model = {}
    }
    console.log(this._model);
    this.formGroup = this.formBuilder.group({
      productType: [this._model.productTypeId],
      issuerName: [this._model.organizationName],
      securityName: [this._model.securityNameId],
      issuerType: [this._model.issuerTypeId],
      accountNo: [this._model.accountNo],
      investmentKind: [this._model.investmentKindId],
      investmentType: [this._model.investmentTypeId],
      issuerRating: [this._model.issuerRatingId],
      currency: [this._model.currency],
      start_date: [this._model.startDate],
      end_date: [this._model.endDate],
      unitAccountValue: [this._model.unitAccountValue],
      quantity: [this._model.quantity],
      brokerTradingFee: [this._model.brokerTradingFee],
      custodianTradingFee: [this._model.custodianTradingFee],
      interestRate: [this._model.interestRate],
      interestPaymentPeriod: [this._model.interestPaymentPeriodId],
      formOfInterest: [this._model.formOfInterestId]
    })
  }

  onSubmit() {
    const req = {
        product_type_id: this.formGroup?.value.productType,
        issuer_of_security: this.formGroup?.value.issuerName,
        security_name_id: this.formGroup?.value.securityName,
        issuer_type_id: this.formGroup?.value.issuerType,
        account_no: this.formGroup?.value.accountNo,
        investment_kind_id: this.formGroup?.value.investmentKind,
        investment_type_id: this.formGroup?.value.investmentType,
        issuer_rating_id: this.formGroup?.value.issuerRating,
        start_date: this.formGroup?.value.start_date,
        end_date: this.formGroup?.value.end_date,
        unit_account_value: this.formGroup?.value.unitAccountValue,
        quantity: this.formGroup?.value.quantity,
        broker_trading_fee: this.formGroup?.value.brokerTradingFee,
        custodian_trading_fee: this.formGroup?.value.custodianTradingFee,
        interest_rate: this.formGroup?.value.interestRate,
        interest_payment_period_id: this.formGroup?.value.interestPaymentPeriod,
        form_of_interest_id: this.formGroup?.value.formOfInterest
      }
    if (!this._model?.id) {
      this.store.dispatch(addSecurity({sec: req}))
    }
  }

}
