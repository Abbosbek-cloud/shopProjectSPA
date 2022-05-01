import { Link, useLocation, useParams } from "react-router-dom";
import { products } from "../data/data";
import React from "react";
import { Alert, Breadcrumb, BreadcrumbItem } from "reactstrap";
import Slider from "react-slick";

const FullProductInfo = () => {
  const { id } = useParams();
  const { pathname } = useLocation();
  const pathArr = pathname.split("/");
  console.log(pathname);
  console.log(pathArr);
  const product = products.find((item) => item.id == id);
  let styles = {
    textDecoration: "none",
    fontSize: "19px",
  };
  return (
    <div className="container">
      <Alert className="mt-3">
        <Breadcrumb className="">
          <BreadcrumbItem>
            <Link style={styles} to={`/`}>
              Home
            </Link>
          </BreadcrumbItem>
          <BreadcrumbItem>
            <Link style={styles} to={`/${pathArr[1]}`}>
              {pathArr[1]}
            </Link>
          </BreadcrumbItem>
          <BreadcrumbItem>
            <Link style={styles} to={`${pathname}`}>
              {product.name}
            </Link>
          </BreadcrumbItem>
        </Breadcrumb>
      </Alert>
      <h1>{product.name}</h1>
      <img style={{ width: "100%" }} src={product.img} alt={product.inf} />
      <p className="fs-4">
        Lorem ipsum dolor sit amet consectetur adipisicing elit. Veritatis
        cumque delectus soluta optio est rerum laboriosam beatae repellat illo
        pariatur omnis nemo molestiae tempore, mollitia provident, ex unde neque
        facere. Lorem ipsum, dolor sit amet consectetur adipisicing elit.
        Praesentium, ducimus. Nesciunt unde voluptatem ea magnam porro, odio rem
        nobis ex architecto, reiciendis nulla minima maxime officiis totam. Ab,
        iusto eos!
      </p>

      <button className="btn btn-primary fs-4 mb-4">Sotib olmoq</button>
    </div>
  );
};

export default FullProductInfo;
