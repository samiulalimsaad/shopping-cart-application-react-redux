import React from "react";
import { cartDetail } from "./cartDetail";
import SingleCart from "./SingleCart";

const CartDetail = () => {
    return (
        <div className="bg-white py-4 px-4 shadow-md rounded-lg my-4 mx-4">
            {cartDetail.map((v) => (
                <SingleCart key={v.id} name={v.name} />
            ))}
        </div>
    );
};

export default CartDetail;
