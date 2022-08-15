import React from "react";
import { useSelector } from "react-redux";

const total = (state) =>
    Object.keys(state).reduce((t, c) => t + state[c].total, 0);

const TotalItem = () => {
    const totalItem = useSelector((state) => total(state));
    return (
        <div className="flex justify-center items-center text-center">
            <div className="text-xl font-semibold">
                <p>Total Item</p>
                <p className="text-5xl">{totalItem}</p>
            </div>
        </div>
    );
};

export default TotalItem;
