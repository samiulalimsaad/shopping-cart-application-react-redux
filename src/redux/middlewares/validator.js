import {
    DECREMENT_ASUS,
    DECREMENT_CANON,
    DECREMENT_DELL,
    INCREMENT_ASUS,
    INCREMENT_CANON,
    INCREMENT_DELL,
} from "../actionTypes";

export const validator = (store) => (next) => (action) => {
    const { asus, dell, canon } = store.getState();

    if (
        (action.type === INCREMENT_ASUS && asus.total < 20) ||
        (action.type === DECREMENT_ASUS && asus.total > 0) ||
        (action.type === INCREMENT_DELL && dell.total < 35) ||
        (action.type === DECREMENT_DELL && dell.total > 0) ||
        (action.type === INCREMENT_CANON && canon.total < 72) ||
        (action.type === DECREMENT_CANON && canon.total > 0)
    ) {
        next(action);
    }
};
