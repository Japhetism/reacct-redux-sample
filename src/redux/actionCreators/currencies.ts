import { CurrenciesActionType } from '../actionTypes/currencies';
import { Currency } from '../reducers/currencies';

export const fetchCurrenciesPending = () => {
  return {
    type: CurrenciesActionType.GET_CURRENCIES_PENDING
  }
}

export const fetchCurrenciesSuccess = (currencies: Currency[]) => {
  return {
    type: CurrenciesActionType.GET_CURRENCIES_SUCCESS,
    payload: currencies
  }
}

export const fetchCurrenciesError = (error: string) => {
  return {
    type: CurrenciesActionType.GET_CURRENCIES_FAIL,
    payload: error
  }
}