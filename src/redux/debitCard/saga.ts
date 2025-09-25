// sagas/fetchDataSaga.ts
import { call, put, takeLatest } from "redux-saga/effects";
import { Constants } from "../contains";
import { mockData } from "../../api/mocks/get_debit_card_mock";
import { IFMockData } from "../../types/debit_card.types";
import { GetDataSuccessAction, GetDataFailAction } from "../debitCard/action";

export const fetchDataApi = async (): Promise<IFMockData> => {
  await new Promise<void>((resolve) => setTimeout(resolve, 1000));
  return mockData;
};

function* fetchDataWorker() {
  try {
    const response: IFMockData = yield call(fetchDataApi);
    const successAction: GetDataSuccessAction = {
      type: Constants.GET_DATA_SUCCESS,
      payload: response,
    };
    yield put(successAction);
  } catch (error: any) {
    const failAction: GetDataFailAction = {
      type: Constants.GET_DATA_FAIL,
      payload: error.message,
    };
    yield put(failAction);
  }
}

export function* watchFetchData() {
  yield takeLatest(Constants.GET_DATA_LOAD, fetchDataWorker);
}
