import { Constants } from '../contains';
import { IFMockData } from '../../types/debit_card.types';

export interface GetDataLoadAction {
  type: typeof Constants.GET_DATA_LOAD;
}

export interface GetDataSuccessAction {
  type: typeof Constants.GET_DATA_SUCCESS;
  payload: IFMockData;
}

export interface GetDataFailAction {
  type: typeof Constants.GET_DATA_FAIL;
  payload: string; // error message
}

export type DebitCardActions =
  | GetDataLoadAction
  | GetDataSuccessAction
  | GetDataFailAction;

export const getData = (): GetDataLoadAction => ({
  type: Constants.GET_DATA_LOAD,
});


export const toggleCardVisibility = () => ({
  type: Constants.TOGGLE_CARD_VISIBILITY,
});