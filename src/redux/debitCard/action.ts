import { Constants } from '../contains';
import { GetDataLoadAction, ToggleMenuOptionAction } from '../../types/debit_card.types';


export const getData = (): GetDataLoadAction => ({
  type: Constants.GET_DATA_LOAD,
});

export const toggleMenuOption = (index: number, value: boolean): ToggleMenuOptionAction => ({
  type: Constants.TOGGLE_MENU_OPTION,
  payload: { index, value },
});