import { Dispatch } from "redux";
import {
  fetchCurrenciesPending, 
  fetchCurrenciesSuccess, 
  fetchCurrenciesError 
} from "../redux/actionCreators/currencies";

const fetchCurrencies = () => {
  return (dispatch: Dispatch) => {
    dispatch(fetchCurrenciesPending());
    fetch("https://api.coinbase.com/v2/currencies")
    .then(res => res.json())
    .then(res => {
      if (res.error) {
        dispatch(fetchCurrenciesError(res.error));
      }
      dispatch(fetchCurrenciesSuccess(res.data));
    })
    .catch(error => {
      dispatch(fetchCurrenciesError(error));
    })
  }
}

export default fetchCurrencies;