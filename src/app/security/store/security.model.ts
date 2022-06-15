export interface Security {
  id?: number;

  organizationId: number;
  organizationName: string;

  securityName: string;
  issuerTypeId: number;
  issuerTypeName: string;

  accountNo: number;
  investmentType: string;
  unitAccountValue: number;
  startDate: Date;
  endDate: Date;
}
