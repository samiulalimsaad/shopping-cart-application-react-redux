import { DECREMENT_ASUS, DECREMENT_CANON, DECREMENT_DELL, INCREMENT_ASUS, INCREMENT_CANON, INCREMENT_DELL } from "./actionTypes";

export const incrementHandler = (name) => {
    if (name==='asus') {
        return {
            type: INCREMENT_ASUS;
        }
    }
    else if (name==='dell') {
        return {
            type: INCREMENT_DELL;
        }
    }
    else if (name==='canon') {
        return {
            type: INCREMENT_CANON;
        }
    }
};
export const decrementHandler = () => {
    if (name==='asus') {
        return {
            type: DECREMENT_ASUS;
        }
    }
    else if (name==='dell') {
        return {
            type: DECREMENT_DELL;
        }
    }
    else if (name==='canon') {
        return {
            type: DECREMENT_CANON;
        }
    }
};
