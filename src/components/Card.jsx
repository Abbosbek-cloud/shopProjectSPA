import { Component } from "react";
import { Link } from "react-router-dom";

export default class Card extends Component {
  render() {
    const props = this.props;
    const dataItem = this.props.data;
    return (
      <div
        className={`card`}
        style={
          props.minline
            ? {
                marginInline: `${props.minline}`,
              }
            : null
        }
      >
        <div className="card-header">
          <Link to={`/products/${dataItem.id}`}>
            <img
              className="card-img-top"
              src={dataItem.img}
              height="200px"
              alt="Card image cap"
              style={{ objectFit: "cover" }}
            />
          </Link>
        </div>
        <div className={`card-body ${props.status && "d-none"}`}>
          <h5 className="card-title">{dataItem.name}</h5>
          <p className="card-text">{dataItem.inf}</p>
          <p className="card-text">Price: {dataItem.price}</p>
          <p className="card-text">
            Total Price: {dataItem.price * dataItem.quantity}
          </p>
        </div>
        <div
          className={`card-footer d-flex justify-content-between ${
            props.status && "d-none"
          }`}
        >
          <div className="d-flex align-items-center">
            <button
              className="btn btn-danger"
              onClick={this.props.dec}
              disabled={dataItem.quantity === 0 ? true : false}
            >
              -
            </button>
            <p className="mb-0 mx-2 fs-3 text-success">{dataItem.quantity}</p>
            <button className="btn btn-primary" onClick={this.props.inc}>
              +
            </button>
          </div>
          <button
            className="btn btn-success"
            onClick={this.props.buy}
            disabled={dataItem.quantity === 0 ? true : false}
          >
            Buy
          </button>
        </div>
      </div>
    );
  }
}
