import { Constants } from "../redux/contains";

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

export interface GetDataLoadAction {
  type: typeof Constants.GET_DATA_LOAD;
}

export interface GetDataSuccessAction {
  type: typeof Constants.GET_DATA_SUCCESS;
  payload: IFMockData;
}

export interface GetDataFailAction {
  type: typeof Constants.GET_DATA_FAIL;
  payload: string; 
}
export interface ToggleMenuOptionAction {
  type: typeof Constants.TOGGLE_MENU_OPTION;
  payload: { index: number; value: boolean }; 
}


export type DebitCardActions =
  | GetDataLoadAction
  | GetDataSuccessAction
  | GetDataFailAction
  | ToggleMenuOptionAction;  