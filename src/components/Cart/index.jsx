import React from "react";
import CartDetail from "./CartDetail";
import TotalItem from "./TotalItem";
import TotalPrice from "./TotalPrice";

const Cart = () => {
    return (
        <div class="col-span-12 sm:col-span-12 md:col-span-5 lg:col-span-4 xxl:col-span-4">
            <CartDetail />
            <TotalItem />
            <TotalPrice />
        </div>
    );
};

export default Cart;
