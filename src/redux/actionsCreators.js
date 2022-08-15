import {
    DECREMENT_ASUS,
    DECREMENT_CANON,
    DECREMENT_DELL,
    INCREMENT_ASUS,
    INCREMENT_CANON,
    INCREMENT_DELL,
} from "./actionTypes";

export const incrementHandler = (name, quantity) => {
    if (name === "asus") {
        return {
            type: INCREMENT_ASUS,
            payload: {
                asus: { quantity },
            },
        };
    } else if (name === "dell") {
        return {
            type: INCREMENT_DELL,
            payload: {
                dell: { quantity },
            },
        };
    } else if (name === "canon") {
        return {
            type: INCREMENT_CANON,
            payload: {
                canon: { quantity },
            },
        };
    }
};

export const decrementHandler = (name) => {
    if (name === "asus") {
        return {
            type: DECREMENT_ASUS,
        };
    } else if (name === "dell") {
        return {
            type: DECREMENT_DELL,
        };
    } else if (name === "canon") {
        return {
            type: DECREMENT_CANON,
        };
    }
};
