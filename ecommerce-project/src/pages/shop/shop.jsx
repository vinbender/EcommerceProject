import React from "react";
import {PRODUCTS} from "../../products";
import {Product} from "./product";
import "./shop.css";

export const Shop = () => {
    return(
        <div className="shop">
            <div classname = "shopTitle"> 
                <h1>BenderStar Digital</h1>
            </div>
            <div className="products">{" "}
                {PRODUCTS.map((product) => (
                    <Product data={product}/>
                ))}
            </div>
        </div>
    );
    }