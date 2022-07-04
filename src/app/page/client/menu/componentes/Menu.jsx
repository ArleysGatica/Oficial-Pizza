import React, { useContext } from "react";
import CardSaleContext from "../../../../context/CarSaleContext";
import SaleItem from "../../../../components/SaleItem/saleItem";
import { MenuCard } from "./MenuCard";
import { makeStyles } from "@material-ui/core/styles";
import { useModal } from "../../../../hooks/useModal-material";
import { Modal } from "../../../../components/modal-material/modal/modal";
import Header from "../../../../components/header/header";
import Button from "@material-ui/core/Button";
import ShoppingCartIcon from "@material-ui/icons/ShoppingCart";
import Badge from "@material-ui/core/Badge";

export const useStyles = makeStyles({
  root: {
    maxWidth: 300,
    maxHeight: 360,
    boxShadow: "1px 4.5px 4.5px rgba(0,0,0,0.3)",
  },
  center: {
    display: "flex",
    flexWrap: "nowrap",
    justifyContent: "space-around",
  },
  media: {
    height: 120,
  },
  tittle: {
    fontSize: "1.25rem",
    fontFamily: "Roboto, Helvetica, Arial, sans-serif",
    fontWeight: "bold",
    lineHeight: 1.6,
    letterSpacing: "0.0075em",
    color: "#3f51b5",
  },
  bar: {
    display: "flex",
    flexWrap: "nowrap",
    justifyContent: "space-around",
    backgroundColor: "rgba(190,190,190)",
    width: "89%",
    marginLeft: "auto",
    marginRight: "auto",
    borderRadius: "15px",
    marginBottom: "30px",
    marginTop: "20px",
  },
});

const Menu = (props) => {
  const { Sale, setSale, setTotal, detalle, setDetalle } =
    useContext(CardSaleContext);
  const [open, handleClose, handleClickOpen] = useModal(false);
  const { data, tittle } = props;

  const classes = useStyles();

  return (
    <>
      <Header />
      <div className={classes.bar}>
        <h1 className={classes.tittle}>{tittle}</h1>
        <Button onClick={handleClickOpen} size="small">
          <Badge badgeContent={Object.keys(Sale).length} color="secondary">
            <ShoppingCartIcon fontSize="large" color="primary" />
          </Badge>
        </Button>
        <Modal titulo="Agregar Producto" open={open} handleClose={handleClose}>
          <div className="products__currentOrder">
            {Sale.map((sale) => (
              <SaleItem
                setSale={setSale}
                Sale={Sale}
                setDetalle={setDetalle}
                setTotal={setTotal}
                detalle={detalle}
                image={sale.image}
                title={sale.title}
                cantidad={sale.cantidad}
                productoID={sale.ProductoID}
                price={sale.price}
              />
            ))}
          </div>
        </Modal>
      </div>
      <div className={classes.center}>
        {data
          ? data.map((info) => (
              <MenuCard
                Sale={Sale}
                info={info}
                setSale={setSale}
                setDetalle={setDetalle}
                setTotal={setTotal}
                detalle={detalle}
              />
            ))
          : null}
      </div>
    </>
  );
};
export default Menu;
