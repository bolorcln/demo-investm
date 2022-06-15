import { HttpClient } from "@angular/common/http";
import { Injectable } from "@angular/core";
import { Observable, of } from "rxjs";
import { Security } from "./security.model";

@Injectable()
export class SecurityService {
  securities: Security[];
  constructor(
    private readonly http: HttpClient
  ) {
    this.securities = [
      {
        id: 1,
        organizationId: 223102,
        organizationName: 'Invescore',
        securityName: 'Компанийн бонд',
        issuerTypeId: 1,
        issuerTypeName: 'ББСБ',
        accountNo: 223334444,
        investmentType: 'Тогтмол орлоготой үнэт цаас',
        unitAccountValue: 100000,
        startDate: new Date('06/04/2022'),
        endDate: new Date('09/21/2022')
      },
      {
        id: 2,
        organizationId: 551616,
        organizationName: 'Golomt Bank',
        securityName: 'Байгууллагын хадгаламж',
        issuerTypeId: 2,
        issuerTypeName: 'Банк',
        accountNo: 11222333,
        investmentType: 'Тогтмол орлоготой үнэт цаас',
        unitAccountValue: 1000000000,
        startDate: new Date('06/04/2022'),
        endDate: new Date('06/04/2022')
      }
    ]
  }

  getSecurities(): Observable<Security[]> {
    return of(this.securities)
  }
}
