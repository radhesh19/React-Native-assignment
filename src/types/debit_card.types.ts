// types.ts
export interface IAccountInfo {
  availableBalance: {
    amount: number;
    currency: string;
  };
}

export interface ICardDetails {
  cardName: string;
  cardNumber: string;
  expiryDate: string;
  cvv: string;
}

export interface IMenuOption {
  title: string;
  description?: string | null; // allow null
  action: string;
  isToggleable?: boolean;
  isToggledOn?: boolean;
}


export interface IFMockData {
  accountInfo: IAccountInfo;
  cardDetails: ICardDetails;
  menuOptions: IMenuOption[];
}

export interface IDebitCardState {
  loading: boolean;
  data: IFMockData | null;
  error: string | null;
}

  