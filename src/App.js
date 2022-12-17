import { Route, Switch } from "react-router-dom";
import Products from "./pages/Products";
import MainHeader from "./components/MainHeader";
import Welcome from "./pages/Welcome";
import ProductDetail from "./pages/ProductDetail";

function App() {
  return (
    <div>
      <MainHeader />
      <main>
        <Switch>
          <Route path="/welcome" exact>
            <Welcome />
          </Route>
          <Route exact path="/products">
            <Products />
          </Route>
          <Route exact path="/products/:productId">
            <ProductDetail />
          </Route>
        </Switch>
      </main>
    </div>
  );
}

export default App;
