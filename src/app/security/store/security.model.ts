export interface Security {
  id?: number;
  productTypeId: number;

  organizationId: number;
  organizationName: string;

  securityNameId: number;
  securityName: string;
  issuerTypeId: number;
  issuerTypeName: string;

  issuerRatingId: number;
  issuerRatingName: string;
  currency: string;

  accountNo: number;
  investmentKindId: number;
  investmentTypeId: string;
  investmentType: string;
  unitAccountValue: number;
  startDate: Date;
  endDate: Date;

  quantity: number;
  brokerTradingFee: number;
  custodianTradingFee: number;

  interestRate: number;
  interestPaymentPeriodId: number;
  formOfInterestId: number;
}

export interface SecurityName {
  id: number;
  name: string;
}

export interface ProductType {
  id: number;
  name: string;
}
export interface IssuerType {
  id: number;
  name: string;
}

export interface InvestmentKind {
  id: number;
  name: string;
}
export interface InvestmentType {
  id: number;
  name: string;
}

export interface IssuerRating {
  id: number;
  name: string;
}

export interface InterestPaymentPeriod {
  id: number;
  name: string;
}

export interface FormOfInterest {
  id: number;
  name: string;
}
