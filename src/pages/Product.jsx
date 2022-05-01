import { Component } from "react";
import { Alert, Button, Table } from "reactstrap";
import Card from "../components/Card";
import { RiDeleteBin6Line } from "react-icons/ri";
import { Outlet } from "react-router-dom";

export default class Product extends Component {
  render() {
    const s = this.props;
    console.log(s);
    return (
      <div className="container">
        <div className="row mt-3">
          {s.products.map((product) => (
            <div key={product.id} className="col-12 col-md-6 col-lg-4 mb-3">
              <Card
                data={product}
                inc={() => s.inc(product.id)}
                dec={() => s.dec(product.id)}
                buy={() => s.buy(product)}
              />
              <Outlet />
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
      </div>
    );
  }
}
