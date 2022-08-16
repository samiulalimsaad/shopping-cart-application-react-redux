import React from "react";
import { useSelector } from "react-redux";
import { products } from "../Products/products";
import SingleCart from "./SingleCart";

const total = (state) =>
    Object.keys(state).reduce((t, c) => t + state[c].total, 0);

const CartDetail = () => {
    const totalItem = useSelector((state) => total(state));

    if (totalItem === 0) return null;

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
