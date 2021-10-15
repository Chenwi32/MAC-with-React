import Header from "./components/header/Header";
import Home from "./components/home/Home";
import { BrowserRouter as Router, Switch, Route } from "react-router-dom";
import Checkout from "./components/checkout/Checkout";
import Login from "./components/login/Login";
import { useEffect } from "react";
import { auth } from "./firebase";
import { useStateValue } from "./StateProvider";
import Payment from "./components/checkout/Payment";
import Register from "./components/register/Register";
import Footer from "./components/footer/Footer";
import Products from "./components/productsPage/Products";
import HomeProducts from "./components/productsPage/HomeProducts/HomeProducts";
import Office from "./components/productsPage/OfficeProducts/Office";
import Dressing from "./components/productsPage/Dressing/Dressing";
import Fabrics from "./components/productsPage/Fabrics/Fabrics";
import ProductsPageBC from "./components/productsPage/ProductsPageBC";
import Blog from "./components/Blog/Blog";
import Gallery from "./components/Gallery/Gallery";
import AboutUs from "./components/Aboutus/AboutUs";

function App() {
  const dispatch = useStateValue()[1];
  // debugger

  // This will run only once when the app loads since we included the empty square brackets as a second parameter to this useEffect
  useEffect(() => {
    // So this keeps listening and acting when the user logs in or out, or depending on what we will put in the square brackets below
    auth.onAuthStateChanged((authUser) => {
      // debugger
      if (authUser) {
        // The user just logged in or the user was logged in
        dispatch({
          type: "SET_USER",
          user: authUser,
        });
      } else {
        // The user is logged out
        dispatch({
          type: "SET_USER",
          user: null,
        });
      }
    });
  }, [dispatch]);

  return (
    <Router>
      <div className="app">
        <Switch>
          <Route path="/">
            <Header />
            <Home />
            <Footer />
          </Route>

          <Route path="/register">
            <Register />
          </Route>

          <Route path="/login">
            <Login />
          </Route>

          <Route path="/checkout">
            <Header />
            <Checkout />
            <Footer />
          </Route>

          <Route path={"/payment"}>
            <Header />
            <Payment />
            <Footer />
          </Route>

          <Route path="/products">
            <Header />
            <ProductsPageBC />
            <Products />
            <Footer />
          </Route>

          <Route path="/homeitems">
            <Header />
            <ProductsPageBC />
            <HomeProducts />
            <Footer />
          </Route>

          <Route path="/officeitems">
            <Header />
            <ProductsPageBC />
            <Office />
            <Footer />
          </Route>

          <Route path="/dressing">
            <Header />
            <ProductsPageBC />
            <Dressing />
            <Footer />
          </Route>

          <Route path="/fabrics">
            <Header />
            <ProductsPageBC />
            <Fabrics />
            <Footer />
          </Route>

          <Route path="/blog">
            <Header />
            <Blog />
            <Footer />
          </Route>

          <Route path="/gallery">
            <Header />
            <Gallery />
            <Footer />
          </Route>

          <Route path="/aboutus">
            <Header />
            <AboutUs />
            <Footer />
          </Route>
        </Switch>
      </div>
    </Router>
  );
}

export default App;
