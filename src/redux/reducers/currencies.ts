import { CurrenciesAction, CurrenciesActionType } from '../actionTypes/currencies';

export interface Currency {
  id: string,
  name: string,
  min_size: string,
}

interface State {
  currencies: Currency[],
  loading: boolean,
  error: string | null
}

export interface CurrencyResponseState {
  currencies: State
}

const initialState = {
  currencies: [],
  loading: false,
  error: null
}


export const currencyReducer = (state = initialState, action: CurrenciesAction):State => {
  switch(action.type) {
    case CurrenciesActionType.GET_CURRENCIES_PENDING:
      return {
        loading: true,
        currencies: [],
        error: null,
      }
    case CurrenciesActionType.GET_CURRENCIES_SUCCESS:
      return {
        loading: false,
        currencies: action.payload,
        error: null
      }
    case CurrenciesActionType.GET_CURRENCIES_FAIL:
      return {
        loading: false,
        error: action.payload,
        currencies: []
      }
    default:
      return state;
  }
}

export default currencyReducer;

export const getCurrencies = (state:CurrencyResponseState) => state.currencies.currencies;
export const getCurrenciesLoading = (state:CurrencyResponseState) => state.currencies.loading;
export const getCurrenciesError = (state:CurrencyResponseState) => state.currencies.error;