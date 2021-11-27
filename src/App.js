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
import SupportHeader from "./components/support/SupportHeader";
import Imformation from "./components/imformation/Imformation";
import SingleProduct from "./components/productsPage/SingleProduct";

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
          <Route path="/register">
            <Register />
          </Route>

          <Route path="/login">
            <Login />
          </Route>

          <Route path="/checkout">
            <div className="home__header">
              <Header />
            </div>
            <SupportHeader />
            <Checkout />
            <Footer />
          </Route>

          <Route path={"/payment"}>
            <div className="home__header">
              <Header />
            </div>
            <Payment />
            <Footer />
          </Route>

          <Route path="/products">
            <Header />
            <SupportHeader />
            <ProductsPageBC />
            <Products />
            <Footer />
          </Route>

          <Route path="/homeitems">
            <Header />
            <SupportHeader />
            <ProductsPageBC />
            <HomeProducts />
            <Footer />
          </Route>

          <Route path="/officeitems">
            <Header />
            <SupportHeader />
            <ProductsPageBC />
            <Office />
            <Footer />
          </Route>

          <Route path="/dressing">
            <Header />
            <SupportHeader />
            <ProductsPageBC />
            <Dressing />
            <Footer />
          </Route>

          <Route path="/fabrics">
            <Header />
            <SupportHeader />
            <ProductsPageBC />
            <Fabrics />
            <Footer />
          </Route>

          <Route path="/product/:id" component={SingleProduct}>
            {/* <Header />
              <SingleProduct/>
            <Footer /> */}
          </Route>

          <Route path="/blog">
            <div className="home__header">
              <Header />
            </div>
            <SupportHeader />
            <Blog />
            <Footer />
          </Route>

          <Route path="/gallery">
            <div className="home__header">
              <Header />
            </div>
            <SupportHeader />
            <Gallery />
            <Footer />
          </Route>

          <Route path="/aboutus">
            <div className="home__header">
              <Header />
            </div>
            <SupportHeader />
            <AboutUs />
            <Footer />
          </Route>

          <Route path="/" component={Home} exact>
            <Imformation />
            <div className="home__header">
              <Header />
            </div>
            <SupportHeader />
            <Home />
            <Footer />
          </Route>
        </Switch>
      </div>
    </Router>
  );
}

export default App;
