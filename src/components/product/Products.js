import React, { useState,useEffect } from "react";
// import products from "./products.json";
import axios from "axios"
import "./Products.css";
import AddButton from "./AddButton.js";
export default function Products() {
  const PATH = process.env.REACT_APP_PATH;
  const [products,setProducts] = useState([])
  useEffect(() => {
    axios.get("http://localhost:8080/product/all").then((res) => {
      setProducts(res.data);
    });
  }, []);
  return (
    <div className="Product-container">
      {products &&
        products.map((value) => (
          <div key={value.id} className="Product-items">
            <div>
              <img
               
                className="Product-img"
                // src={`${PATH}${value.url}`}
                src={`${value.url}`}
                alt={value.name}
              />
            </div>
            <h3>{value.name}</h3>
            <h3>hello</h3>
            <p style={{ textAlign: "justify", padding: "10px" }}>
              {value.desc}
            </p>
            <div className="priceBtn">
              <div className="priceTxt">₹{value.price}</div>
              <div className="Product-button">
                <AddButton id={value.id} />
              </div>
               </div>
          </div>
        ))}
    </div>
  );
}
