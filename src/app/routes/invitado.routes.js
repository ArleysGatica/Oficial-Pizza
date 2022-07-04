import React, { Suspense, lazy } from "react";
import { BrowserRouter, Switch, Route } from "react-router-dom";
import image from "../../assets/image/logo.png";
//import Home from "../page/client/home/home";
const Customization = lazy(() =>
  import("../page/client/customization/customization")
);

const MenuCombo = lazy(() =>
  import("../page/client/menu/menu-combo/menu-combo")
);
const MenuDrink = lazy(() =>
  import("../page/client/menu/menu-drink/menu-drink")
);
const MenuPizza = lazy(() =>
  import("../page/client/menu/menu-pizza/menupizza")
);
const Login = lazy(() => import("../page/shared/login/login"));
const MenuSmoothie = lazy(() =>
  import("../page/client/menu/menu-smoothie/menu-smoothie")
);
const Home = lazy(() => import("../page/client/home/home"));
const PointOfSale = lazy(() =>
  import("../page/client/point-of-sale/point-of-sale")
);
const divStyle = {
  height: "100vh",
  width: "100vw",
};
function InvitadoRoutes() {
  return (
    <BrowserRouter>
      <Suspense
        fallback={
          <div className="logo">
            <img style={divStyle} src={image} alt="" />
          </div>
        }
      >
        <Switch>
          <Route exact path="/" component={Home} />
          <Route exact path="/point-of-sale" component={PointOfSale} />
          <Route exact path="/customization" component={Customization} />
          <Route exact path="/menu-combo" component={MenuCombo} />
          <Route exact path="/menu-bebida" component={MenuDrink} />
          <Route exact path="/menu-pizza" component={MenuPizza} />
          <Route exact path="/menu-batido" component={MenuSmoothie} />
          <Route exact path="/login" component={Login} />

          <Route component={Home} />
        </Switch>
      </Suspense>
    </BrowserRouter>
  );
}

export default InvitadoRoutes;
