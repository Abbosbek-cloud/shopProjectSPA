import { Component } from "react";
import { toast } from "react-toastify";
import { Alert, Button, Table } from "reactstrap";
import { products } from "../data/data";
import Card from "./Card";
import { RiDeleteBin6Line } from "react-icons/ri";

export default class Ecommerce extends Component {
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

    // increment function
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
    console.log(this.state.cart);
    return (
      <div className="container">
        <div className="row mt-3">
          {s.products.map((product) => (
            <div key={product.id} className="col-12 col-md-6 col-lg-4 mb-3">
              <Card
                data={product}
                inc={() => inc(product.id)}
                dec={() => dec(product.id)}
                buy={() => buy(product)}
              />
            </div>
          ))}
        </div>
        <div className="row d-flex justify-content-center">
          <div className="col-6">
            <div className="card text-center">
              <div className="card-header">Total Price</div>
              <div className="card-body">{s.totalSum} $</div>
              <div className="card-footer d-flex justify-content-end">
                <button
                  className="btn btn-success m-2"
                  disabled={s.totalSum === 0 ? true : false}
                >
                  Checkout
                </button>
              </div>
            </div>
          </div>
        </div>
        {s.cart.length !== 0 ? (
          <Table dark className="mt-5">
            <thead>
              <tr>
                <th>ID</th>
                <th>Product name</th>
                <th>Price</th>
                <th>Quantity</th>
                <th>Total Price</th>
                <th>Actions</th>
              </tr>
            </thead>
            <tbody>
              {s.cart.map((item) => (
                <tr>
                  <th scope="row">{item.id}</th>
                  <td>{item.name}</td>
                  <td>{item.price}</td>
                  <td>{item.quantity}</td>
                  <td>{item.price * item.quantity}</td>
                  <td>
                    <Button color="danger" onClick={() => del(item.id)}>
                      <RiDeleteBin6Line />
                    </Button>
                  </td>
                </tr>
              ))}
            </tbody>
          </Table>
        ) : (
          <Alert className="mt-3">Siz hech narsa xarid qilmadingiz!</Alert>
        )}
      </div>
    );
  }
}
