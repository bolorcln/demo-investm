import { CurrencyPipe } from "@angular/common";
import { HttpClient } from "@angular/common/http";
import { Injectable } from "@angular/core";
import { map, Observable, of, tap } from "rxjs";
import { FormOfInterest, InterestPaymentPeriod, InvestmentKind, InvestmentType, IssuerRating, IssuerType, ProductType, Security, SecurityName } from "./security.model";


@Injectable()
export class SecurityService {
  private url = 'http://localhost:9002'
  constructor(
    private readonly http: HttpClient
  ) {}

  createSecurity(sec: any): Observable<Security> {
    console.log(sec)
    return this.http.post<Security>(`${this.url}/nav/securities`, sec);
  }

  getSecurities(): Observable<Security[]> {
    return this.http.get<any[]>(`${this.url}/nav/securities`).pipe(
      tap(console.log),
      map((data: any[]) => data.map((item: any) => ({
        id: item.id,
        productTypeId: item.product_type_id,
        organizationId: 2222,
        organizationName: item.issuer_of_security,
        securityNameId: item.security_name_id,
        securityName: item.security_name,
        issuerTypeId: item.issuer_type_id,
        issuerTypeName: item.issuer_type_name,
        accountNo: item.account_no,
        investmentKindId: item.investment_kind_id,
        investmentTypeId: item.investment_type_id,
        investmentType: item.investment_type_name,
        unitAccountValue: item.unit_account_value,
        startDate: item.start_date,
        endDate: item.end_date,
        issuerRatingId: item.issuer_rating_id,
        issuerRatingName: item.issuer_rating_name,
        currency: item.currency,
        quantity: item.quantity,
        brokerTradingFee: item.broker_trading_fee,
        custodianTradingFee: item.custodian_trading_fee,
        interestRate: Number(item.interest_rate * 100),
        interestPaymentPeriodId: item.interest_payment_period_id,
        formOfInterestId: item.form_of_interest_id
      })))
    )
  }

  getSecurityNames(): Observable<SecurityName[]> {
    return this.http.get<any[]>(`${this.url}/nav/security-names`).pipe(
      tap(console.log),
      map(data => data.map((item: any) => ({
        id: item.id,
        name: item.name,
      })))
    )
  }

  getProductTypes(): Observable<ProductType[]> {
    return this.http.get<any[]>(`${this.url}/nav/product-types`).pipe(
      tap(console.log),
      map(data => data.map((item: any) => ({
        id: item.id,
        name: item.name,
      })))
    )
  }

  getIssuerTypes(): Observable<IssuerType[]> {
    return this.http.get<any[]>(`${this.url}/nav/issuer-types`).pipe(
      tap(console.log),
      map(data => data.map((item: any) => ({
        id: item.id,
        name: item.name,
      })))
    )
  }

  getInvestmentKinds(): Observable<InvestmentKind[]> {
    return this.http.get<any[]>(`${this.url}/nav/investment-kinds`).pipe(
      tap(console.log),
      map(data => data.map((item: any) => ({
        id: item.id,
        name: item.name,
      })))
    )
  }

  getInvestmentTypes(): Observable<InvestmentType[]> {
    return this.http.get<any[]>(`${this.url}/nav/investment-types`).pipe(
      tap(console.log),
      map(data => data.map((item: any) => ({
        id: item.id,
        name: item.name,
      })))
    )
  }

  getIssuerRatings(): Observable<IssuerRating[]> {
    return this.http.get<any[]>(`${this.url}/nav/issuer-ratings`).pipe(
      tap(console.log),
      map(data => data.map((item: any) => ({
        id: item.id,
        name: item.name,
      })))
    )
  }

  getInterestPaymentPeriod(): Observable<InterestPaymentPeriod[]> {
    return this.http.get<any[]>(`${this.url}/nav/interest-payment-periods`).pipe(
      tap(console.log),
      map(data => data.map((item: any) => ({
        id: item.id,
        name: item.name,
      })))
    )
  }

  getFormOfInterests(): Observable<FormOfInterest[]> {
    return this.http.get<any[]>(`${this.url}/nav/form-of-interests`).pipe(
      tap(console.log),
      map(data => data.map((item: any) => ({
        id: item.id,
        name: item.name,
      })))
    )
  }
}
