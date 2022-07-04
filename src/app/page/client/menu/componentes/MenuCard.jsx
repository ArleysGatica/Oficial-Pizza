import React, { useState, useEffect, useContext } from "react";
import { useStyles } from "./Menu";
import Card from "@material-ui/core/Card";
import SaleItemContex from "../../../../context/deleteSaleContext";
import CardActionArea from "@material-ui/core/CardActionArea";
import CardActions from "@material-ui/core/CardActions";
import CardContent from "@material-ui/core/CardContent";
import CardMedia from "@material-ui/core/CardMedia";
import Button from "@material-ui/core/Button";
import Typography from "@material-ui/core/Typography";
import AddShoppingCartIcon from "@material-ui/icons/AddShoppingCart";
import ChromeReaderModeIcon from "@material-ui/icons/ChromeReaderMode";

export const MenuCard = (props) => {
  const saleItemContex = useContext(SaleItemContex);
  const [band, setBand] = useState(false);
  const [cantidad, setCantidad] = useState(1);
  const { info, Sale, setSale, setDetalle, setTotal, productoID, detalle } =
    props;
  console.log(info);
  const nombre = info.nombre;
  const precio = info.precio;
  const imagen = info.imagen;
  useEffect(() => {
    Sale.forEach((element) => {
      if (element.title === nombre) {
        setCantidad(element.cantidad);
        setBand(true);
      }
    });
  }, [Sale]);

  useEffect(() => {
    if (Object.keys(Sale).length === 0) {
      console.log("dsd");
      setCantidad(1);
      setBand(false);
    }
  }, [Sale]);

  useEffect(() => {
    if (nombre === saleItemContex.deleteSaleItem) {
      setCantidad(1);
      setBand(false);
      saleItemContex.setDeleteSaleItem("");
    }
  }, [saleItemContex.deleteSaleItem, nombre]);

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
          setTimeout(() => {
            if (element.title === nombre) {
              element.cantidad = cantidad + 1;
              setTotal((prevTotal) => prevTotal + parseInt(precio) * 1);
            }
          }, 20);
        });
        detalle.forEach((item) => {
          setTimeout(() => {
            if (item.ProductoID === productoID) {
              item.CatidadProductosVendido = cantidad + 1;
            }
          }, 20);
        });
      }
    }, 20);

    console.log(cantidad);
  };

  const apiUrl = "https://localhost:44323/";
  const classes = useStyles();
  return (
    <Card className={classes.root}>
      <CardActionArea>
        <CardMedia
          component="img"
          className={classes.media}
          alt={info.nombre}
          image={`${apiUrl}${info.imagen}`}
        />
        <CardContent>
          <Typography gutterBottom variant="h5" component="h2">
            {info.Producto}
          </Typography>
          <Typography>{`C$ ${info.precio}`}</Typography>
          <Typography variant="body2" color="textSecondary" component="p">
            {info.nombre}
          </Typography>
        </CardContent>
      </CardActionArea>
      <CardActions>
        <Button onClick={() => handleFdetail()} size="small" color="primary">
          <AddShoppingCartIcon />
        </Button>
        <Button size="small" color="primary">
          <strong>Leer más</strong>
        </Button>
      </CardActions>
    </Card>
  );
};
