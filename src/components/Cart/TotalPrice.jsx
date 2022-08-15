import React from "react";
import { useSelector } from "react-redux";

const total = (state) =>
    Object.keys(state).reduce((t, c) => t + state[c].price, 0);

const TotalPrice = () => {
    const totalPrice = useSelector((state) => total(state));

    return (
        <div className="bg-white py-4 px-4 shadow-md rounded-lg my-4 mx-4">
            <div className="flex justify-center items-center text-center">
                <div className="text-xl font-semibold">
                    <p>Total Price</p>
                    <p className="text-5xl">{totalPrice}</p>
                </div>
            </div>
        </div>
    );
};

export default TotalPrice;
