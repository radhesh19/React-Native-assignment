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

export const getData = (): GetDataLoadAction => ({
  type: Constants.GET_DATA_LOAD,
});

export const toggleMenuOption = (index: number, value: boolean): ToggleMenuOptionAction => ({
  type: Constants.TOGGLE_MENU_OPTION,
  payload: { index, value },
});