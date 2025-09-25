import { DebitCardActions } from './action';
import { IFMockData } from '../../types/debit_card.types';
import { Constants } from '../contains';

interface DebitCardState {
  loading: boolean;
  data: IFMockData | null;
  error: string | null;
}

const initialState: DebitCardState = {
  loading: false,
  data: null,
  error: null,
};

const getDataReducer = (
  state: DebitCardState = initialState,
  action: DebitCardActions
): DebitCardState => {
  switch (action.type) {
    case Constants.GET_DATA_LOAD:
      return { ...state, loading: true, error: null };

    case Constants.GET_DATA_SUCCESS:
      return {
        ...state,
        loading: false,
        data: action.payload,
        error: null,
      };

    case Constants.GET_DATA_FAIL:
      return {
        ...state,
        loading: false,
        error: action.payload,
      };

    default:
      return state;
  }
};

export default getDataReducer;
