import React, { useEffect } from "react";
import fetchCurrencies from "../../services/currencies";
import { useDispatch } from "react-redux";
import { useTypedSelector } from "../../hooks/useTypeSelector";
import CurrencyScreen from "./screen";

const CurrencyContainer = () => {
  const dispatch = useDispatch();
  const { currencies } = useTypedSelector((state:any) => state.currencies);
  
  useEffect(() => {
    dispatch(fetchCurrencies() as any)
  }, [dispatch])
  return <CurrencyScreen currencies={currencies}/>
};

export default CurrencyContainer;