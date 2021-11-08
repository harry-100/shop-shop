import { useReducer } from "react";
import {
  UPDATE_PRODUCTS,
  UPDATE_CATEGORIES,
  UPDATE_CURRENT_CATEGORY
} from "./actions";

export const reducer = (state, action) => {
  switch (action.type) {
    case UPDATE_PRODUCTS:
      return { products:[...state.products], ...action.payload };
      // 

    case UPDATE_CATEGORIES:
      return { ...action, categories: [...state.categories] };

    case UPDATE_CURRENT_CATEGORY:
      return {
        ...state,
        currentCategory: action.currentCategory
      }

    default:
      return state;
  }
};

export function useProductReducer(initialState) {
  return useReducer(reducer, initialState)
}