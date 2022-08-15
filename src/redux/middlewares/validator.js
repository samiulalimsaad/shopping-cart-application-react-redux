import {
    DECREMENT_ASUS,
    DECREMENT_CANON,
    DECREMENT_DELL,
    INCREMENT_ASUS,
    INCREMENT_CANON,
    INCREMENT_DELL,
} from "../actionTypes";

// validator to prevent max quantity for a particular product
export const validator = (store) => (next) => (action) => {
    const { asus, dell, canon } = store.getState();

    if (
        (action.type === INCREMENT_ASUS &&
            asus.total < action.payload?.asus?.quantity) ||
        (action.type === DECREMENT_ASUS && asus.total > 0) ||
        (action.type === INCREMENT_DELL &&
            dell.total < action.payload?.dell?.quantity) ||
        (action.type === DECREMENT_DELL && dell.total > 0) ||
        (action.type === INCREMENT_CANON &&
            canon.total < action.payload?.canon?.quantity) ||
        (action.type === DECREMENT_CANON && canon.total > 0)
    ) {
        next(action);
    }
};
