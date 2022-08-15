import React from "react";
import Product from "./Product";
import { products } from "./products";

const Products = () => {
    return (
        <div class="col-span-12 sm:col-span-12 md:col-span-7 lg:col-span-8 xxl:col-span-8">
            {products.map((v) => (
                <Product
                    key={v.id}
                    id={v.id}
                    name={v.name}
                    quantity={v.quantity}
                    price={v.price}
                />
            ))}
        </div>
    );
};

export default Products;
