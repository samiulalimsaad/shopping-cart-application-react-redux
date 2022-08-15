import {
    DECREMENT_ASUS,
    DECREMENT_CANON,
    DECREMENT_DELL,
    INCREMENT_ASUS,
    INCREMENT_CANON,
    INCREMENT_DELL,
} from "./actionTypes";

const cartInitialState = {
    asus: {
        price: 0,
        total: 0,
    },
    dell: {
        price: 0,
        total: 0,
    },
    canon: {
        price: 0,
        total: 0,
    },
};

const cartReducer = (state = cartInitialState, action) => {
    switch (action.type) {
        case INCREMENT_ASUS:
            return {
                ...state,
                asus: {
                    price: state.asus.price * (state.asus.total + 1),
                    total: state.asus.total + 1,
                },
            };
        case DECREMENT_ASUS:
            return {
                ...state,
                asus: {
                    price: state.asus.price * state.asus.total,
                    total: state.asus.total - 1,
                },
            };
        case INCREMENT_DELL:
            return {
                ...state,
                dell: {
                    price: state.dell.price * (state.dell.total + 1),
                    total: state.dell.total + 1,
                },
            };
        case DECREMENT_DELL:
            return {
                ...state,
                dell: {
                    price: state.dell.price * state.dell.total,
                    total: state.dell.total - 1,
                },
            };
        case INCREMENT_CANON:
            return {
                ...state,
                canon: {
                    price: state.canon.price * (state.canon.total + 1),
                    total: state.canon.total + 1,
                },
            };
        case DECREMENT_CANON:
            return {
                ...state,
                canon: {
                    price: state.canon.price * state.canon.total,
                    total: state.canon.total - 1,
                },
            };
        default:
            return state;
    }
};

export default cartReducer;
