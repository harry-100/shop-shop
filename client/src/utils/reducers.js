import {
    UPDATE_PRODUCTS,
    UPDATE_CATEGORIES,
    UPDATE_CURRENT_CATEGORY
} from "./actions";

export const reducer = (state, action) => {
    switch (action.type) {
         case UPDATE_PRODUCTS:
             return {
                 ...state,
                 products: [...action.products],
             };

            //  if its none of these actions, do not update state at all and keep things the same.
            default:
                return state;
    }
};
