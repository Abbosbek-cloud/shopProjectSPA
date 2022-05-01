import React, { Component } from "react";
import { Table, Button, Alert } from "reactstrap";
import { RiDeleteBin6Line } from "react-icons/ri";

export default class Cart extends Component {
  render() {
    const s = this.props;
    return (
      <div className="container">
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
                    <Button color="danger" onClick={() => s.del(item.id)}>
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
