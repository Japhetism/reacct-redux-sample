import { Currency } from '../reducers/currencies';

export enum CurrenciesActionType {
  GET_CURRENCIES_PENDING = 'GET_CURRENCIES_PENDING',
  GET_CURRENCIES_SUCCESS = 'GET_CURRENCIES_SUCCESS',
  GET_CURRENCIES_FAIL = 'GET_CURRENCIES_FAIL',
}

interface actionCurrenciesPending {
  type: CurrenciesActionType.GET_CURRENCIES_PENDING;
}

interface actionCurrenciesSuccess {
  type: CurrenciesActionType.GET_CURRENCIES_SUCCESS;
  payload: Currency[];
}

interface actionCurrenciesFail {
  type: CurrenciesActionType.GET_CURRENCIES_FAIL;
  payload: string;
}

export type CurrenciesAction = actionCurrenciesPending | actionCurrenciesSuccess | actionCurrenciesFail;