import { React, useState, useEffect, useContext } from "react";
import UserContext from "../../../context/UserContext";
import PointOfSaleView from "./point-of-sale.view";
import { ServicesCategoryProduct } from "../../../../services/services-product";
import { postFactura } from "../../../../services/services-factura";
import CardSaleContext from "../../../context/CarSaleContext";
//import { CardSale } from "../../../context/CarSaleContext";

function PointOfSale() {
  const userContext = useContext(UserContext);
  const { Sale, setSale, detalle, setDetalle, total, setTotal } =
    useContext(CardSaleContext);
  // const [cardSale, setCardSale] = useState([]);
  const apiUrl = "https://localhost:44323/";
  const [data, setData] = useState([]);
  const [openAlert, setOpenAlert] = useState(false);
  const [bandB, setBandB] = useState(false);
  const [bandP, setBandP] = useState(false);
  const [ID, setID] = useState("Pizza");
  const fechaD = new Date();

  const factura = {
    ClienteID: userContext.user.clienteID
      ? userContext.user.clienteID
      : "invitado",
    EmpleadoID: "d82874a1-4476-4919-917d-c6eec25a0217",
    Fecha: `${fechaD.getFullYear()}-${
      parseInt(fechaD.getMonth()) + 1
    }-${fechaD.getDate()}`,
    facturaDetallesNav: detalle,
  };
  console.log(factura);
  const handleID = (e) => {
    console.log(e.target.innerText);
    switch (e.target.innerText) {
      case "Pizza":
        setID("Pizza");
        setBandP(true);
        break;
      case "Bebida":
        setID("bebidas");
        setBandB(true);
        break;
      default:
    }
  };

  const handlerClearCurrendOrder = () => {
    setSale([]);
    setDetalle([]);
    setTotal(0);
  };

  const handlerOrder = () => {
    if (factura.ClienteID !== "invitado") {
      postFactura(factura);
      handlerClearCurrendOrder();
    } else {
      setOpenAlert(true);
      console.log("Logueese amigo");
    }
  };

  useEffect(() => {
    ServicesCategoryProduct(ID).then((response) => setData(response));
  }, [ID, Sale]);
  return (
    <PointOfSaleView
      data={data}
      handleID={handleID}
      total={total}
      setID={setID}
      bandB={bandB}
      bandP={bandP}
      handlerOrder={handlerOrder}
      handlerClearCurrendOrder={handlerClearCurrendOrder}
      openAlert={openAlert}
      setOpenAlert={setOpenAlert}
      detalle={detalle}
      setDetalle={setDetalle}
      setTotal={setTotal}
    />
  );
}
export default PointOfSale;
