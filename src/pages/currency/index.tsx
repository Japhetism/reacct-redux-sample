import React, { useEffect } from "react";
import { Dispatch } from "redux";
import { connect } from "react-redux";
import { bindActionCreators } from "redux";

import fetchCurrenciesService from "../../services/currencies";
import {
  getCurrenciesLoading,
  getCurrencies,
  getCurrenciesError
} from "../../redux/reducers/currencies";
import { Currency, CurrencyResponseState } from '../../redux/reducers/currencies';

import CurrencyScreen from "./screen";

interface Props {
  currencies: Currency[],
  fetchCurrencies(): void,
}

const CurrencyContainer = (props:Props) => {
  const { currencies, fetchCurrencies } = props;
  useEffect(() => {
    fetchCurrencies();
  }, [fetchCurrencies]);
  return <CurrencyScreen currencies={currencies}/>
};

const mapStateToProps = (state:CurrencyResponseState) => ({
  error: getCurrenciesError(state),
  currencies: getCurrencies(state),
  loading: getCurrenciesLoading(state),
})

const mapDispatchToProps = (dispatch:Dispatch) => bindActionCreators({
  fetchCurrencies: fetchCurrenciesService
}, dispatch)

export default connect(
  mapStateToProps,
  mapDispatchToProps
)(CurrencyContainer);