import React, { useState, useEffect } from "react";
const Context = React.createContext({});

export const CardSaleContextProvider = ({ children }) => {
  const [cardsale, setCardsale] = useState({});
  const [Sale, setSale] = useState([]);
  const [detalle, setDetalle] = useState([]);
  const [total, setTotal] = useState(0);
  const [band, setBand] = useState(false);

  // metodo para obtener los datos de la venta
  useEffect(() => {
    const sale = JSON.parse(localStorage.getItem("Sale"));
    if (sale) {
      setSale(sale);
    }
  }, []);

  useEffect(() => {
    console.log(Sale);
    localStorage.setItem("Sale", JSON.stringify(Sale));
  }, [Sale]);

  // metodo para obtener los datos del detalle de la venta
  useEffect(() => {
    const detalle = JSON.parse(localStorage.getItem("Detalle"));
    if (detalle) {
      setDetalle(detalle);
    }
  }, []);

  useEffect(() => {
    localStorage.setItem("Detalle", JSON.stringify(detalle));
  }, [detalle]);

  // metodo para obtener los datos del total de la venta
  useEffect(() => {
    const total = JSON.parse(localStorage.getItem("Total"));
    if (total) {
      setTotal(total);
    }
  }, []);

  useEffect(() => {
    localStorage.setItem("Total", JSON.stringify(total));
  }, [total]);

  // metodo para obtener el band de la venta
  useEffect(() => {
    const band = JSON.parse(localStorage.getItem("Band"));
    if (band) {
      setBand(band);
    }
  }, []);

  useEffect(() => {
    localStorage.setItem("Band", JSON.stringify(band));
  }, [band]);

  return (
    <Context.Provider
      value={{
        cardsale,
        setCardsale,
        Sale,
        setSale,
        detalle,
        setDetalle,
        total,
        setTotal,
        band,
        setBand,
      }}
    >
      {children}
    </Context.Provider>
  );
};

export default Context;
