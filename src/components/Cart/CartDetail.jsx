import React from "react";
import { products } from "../Products/products";
import SingleCart from "./SingleCart";

const CartDetail = () => {
    return (
        <div className="bg-white py-4 px-4 shadow-md rounded-lg my-4 mx-4">
            {products.map((v) => (
                <SingleCart
                    key={v.id}
                    id={v.id}
                    name={v.name}
                    quantity={v.quantity}
                />
            ))}
        </div>
    );
};

export default CartDetail;
