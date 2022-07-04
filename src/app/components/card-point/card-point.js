import { CardPointSaleView } from "./card-point.view";
import React, { useState, useEffect, useContext } from "react";
import SaleItemContex from "../../context/deleteSaleContext";
import CardSaleContext from "../../context/CarSaleContext";

const CardPointSale = (props) => {
  const saleItemContex = useContext(SaleItemContex);
  const { Sale, setSale } = useContext(CardSaleContext);
  const [band, setBand] = useState(false);

  const {
    nombre,
    ingrediente,
    precio,
    bandP,
    bandB,
    setDetalle,
    setTotal,
    imagen,
    productoID,
    detalle,
  } = props;

  const [cantidad, setCantidad] = useState(1);
  const apiUrl = "https://localhost:44323/";
  useEffect(() => {
    console.log("Que paso aqui");
    //bandP o bandB
    if (bandP || bandB) {
      setBand(false);
      setCantidad(1);
    }

    if (Object.keys(Sale).length === 0) {
      console.log("dsd");
      setCantidad(1);
      setBand(false);
    }

    if (nombre === saleItemContex.deleteSaleItem) {
      setCantidad(1);
      setBand(false);
      saleItemContex.setDeleteSaleItem("");
    }

    Sale.forEach((element) => {
      if (element.title === nombre) {
        setCantidad(element.cantidad);
        setBand(true);
      }
    });
  }, [bandP, bandB, Sale, saleItemContex.deleteSaleItem, nombre]);

  const handleFdetail = () => {
    /*if (Object.keys(Sale).length === 0) {
      console.log("dsd");
      setCantidad(1);
      setBand(false);
    }*/

    setTimeout(() => {
      if (band === false) {
        const sale = {
          ProductoID: productoID,
          title: nombre,
          cantidad,
          price: precio,
          image: `${apiUrl}${imagen}`,
        };
        setSale((prevSale) => [...prevSale, sale]);
        const Detalle = {
          ProductoID: productoID,
          CatidadProductosVendido: cantidad,
        };

        setDetalle((prevDetalle) => [...prevDetalle, Detalle]);
        setTotal((prevTotal) => prevTotal + parseInt(precio) * 1);
        setBand(true);
      } else {
        setCantidad(cantidad + 1);

        Sale.forEach((element) => {
          if (element.title === nombre) {
            element.cantidad = cantidad + 1;
            setTotal((prevTotal) => prevTotal + parseInt(precio) * 1);
          }
        });
        const results = [...Sale]; // make a separate copy of the array estructurado
        setSale(results);
        detalle.forEach((item) => {
          setTimeout(() => {
            if (item.ProductoID === productoID) {
              item.CatidadProductosVendido = cantidad + 1;
            }
          }, 20);
        });
      }
    }, 20);
  };
  return (
    <CardPointSaleView
      handleFdetail={handleFdetail}
      nombre={nombre}
      ingrediente={ingrediente}
      precio={precio}
      setDetalle={setDetalle}
      setTotal={setTotal}
      imagen={imagen}
    />
  );
};

export default CardPointSale;
