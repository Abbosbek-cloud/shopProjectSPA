import { ToastContainer } from "react-toastify";
import { Route, Routes } from "react-router-dom";
import Product from "./pages/Product";
import About from "./pages/About";
import Contact from "./pages/Contact";
import Cart from "./pages/Cart";
import NotFound from "./pages/NotFound";
import Navbar from "./components/Navbar";
import { Component } from "react";
import { products } from "./data/data";
import { toast } from "react-toastify";
import Home from "./pages/Home";
import "react-toastify/dist/ReactToastify.min.css";
import "slick-carousel/slick/slick.css";
import "slick-carousel/slick/slick-theme.css";
import FullProductInfo from "./pages/FullProductInfo";

class App extends Component {
  constructor(props) {
    super(props);

    this.state = {
      products: products,
      totalSum: 0,
      cart: [],
    };
  }
  render() {
    const s = this.state;

    const inc = (id) => {
      this.setState({
        products: s.products.map((item) => {
          if (item.id === id) {
            return {
              ...item,
              quantity: item.quantity + 1,
            };
          } else {
            return item;
          }
        }),
      });
    };
    // decrement function
    const dec = (id) => {
      this.setState({
        products: s.products.map((item) => {
          if (item.id === id) {
            return {
              ...item,
              quantity: item.quantity - 1,
            };
          } else {
            return item;
          }
        }),
      });
    };

    // buy function
    const buy = (data) => {
      let product = s.cart.find((item) => item.id === data.id);
      console.log(product);
      if (product === undefined) {
        this.setState({
          cart: [...s.cart, data],
          totalSum: data.price * data.quantity,
        });
      } else {
        this.setState({
          cart: s.cart.map((item) => {
            if (data.id === item.id) {
              return {
                ...item,
                quantity: data.quantity,
              };
            } else {
              return item;
            }
          }),
          totalSum:
            s.totalSum + (data.quantity - product.quantity) * data.price,
        });
      }
      toast.success("Siz bu mahsulotni sotib oldingiz!", {
        autoClose: 700,
      });
    };

    // del function
    const del = (id) => {
      this.setState({ cart: s.cart.filter((item) => item.id !== id) });
    };
    return (
      <div className="App">
        <ToastContainer />
        <Navbar productNum={s.cart.length} />
        <Routes>
          <Route
            path="/"
            element={<Home products={s.products} status={true} />}
          />
          <Route
            exact
            path="/products"
            element={
              <Product
                products={s.products}
                totalSum={s.totalSum}
                inc={inc}
                dec={dec}
                buy={buy}
              />
            }
          />
          <Route path="/about" element={<About />} />
          <Route path="/contact" element={<Contact />} />
          <Route path="/cart" element={<Cart cart={s.cart} del={del} />} />
          <Route path="/products/:id" element={<FullProductInfo />} />
          <Route path="*" element={<NotFound />} />
        </Routes>
      </div>
    );
  }
}

export default App;
