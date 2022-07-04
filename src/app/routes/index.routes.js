import React, { useState, Suspense, lazy, useContext } from "react";
import image from "../../assets/image/logo.png";
import UserContext from "../context/UserContext";
import { DeleteSaleItemContextProvider } from "../context/deleteSaleContext";
import { CardSaleContextProvider } from "../context/CarSaleContext";
const ClientRoutes = lazy(() => import("./client.routes"));
const DependentRoutes = lazy(() => import("./dependent.routes"));
const AdminRoutes = lazy(() => import("./administrador.routes"));
const RootRoutes = lazy(() => import("./root.routes"));
const InvitadoRoutes = lazy(() => import("./invitado.routes"));
function IndexRoutes() {
  const { Current, SetCurrent } = useContext(UserContext);
  console.log(Current, SetCurrent);

  const divStyle = {
    height: "100vh",
    width: "100vw",
  };
  return (
    <Suspense
      fallback={
        <div className="logo">
          <img style={divStyle} alt="" src={image} />
        </div>
      }
    >
      {Current === 1 ? (
        <DeleteSaleItemContextProvider>
          <CardSaleContextProvider>
            <ClientRoutes />
          </CardSaleContextProvider>
        </DeleteSaleItemContextProvider>
      ) : Current === 2 ? (
        <DependentRoutes />
      ) : Current === 3 ? (
        <AdminRoutes />
      ) : Current === 4 ? (
        <RootRoutes />
      ) : Current === 0 ? (
        <DeleteSaleItemContextProvider>
          <CardSaleContextProvider>
            <InvitadoRoutes />
          </CardSaleContextProvider>
        </DeleteSaleItemContextProvider>
      ) : null}
    </Suspense>
  );
}

export default IndexRoutes;
