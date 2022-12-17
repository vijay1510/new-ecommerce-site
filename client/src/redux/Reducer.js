import localCurrencyData from "./data/currencies.json";
import localCategoryData from "./data/categories.json";
import localAllData from "./data/alldata.json";

const initialState = {
  details: null,
  currency: null,
  symbol: "$",
  cart: [],
  category: null,
  name: null,
  single: null,
};

export const reducer = (state = initialState, action) => {
  switch (action.type) {
    case "PRODUCTS_DETAILS": {
      const findSingleItem = action.payload;
      const single = localAllData.data.category.products;
      return {
        ...state,
        details: single.find((e) => e.id === findSingleItem),
      };
    }
    case "CURRENCY_DETAILS": {
      return {
        ...state,
        currency: localCurrencyData.data.currencies,
      };
    }
    case "SYMBOL_CHANGE": {
      return {
        ...state,
        symbol: action.payload,
      };
    }
    case "ADD_TO_CART": {
      const data = action.payload;

      const isAvailable = state.cart.findIndex((e) => e.altId === data.altId);
      if (isAvailable === -1) {
        return {
          ...state,
          cart: [...state.cart, data],
        };
      } else {
        state.cart[isAvailable].amount = state.cart[isAvailable].amount + 1;
        return {
          ...state,
          cart: [...state.cart],
        };
      }
    }

    case "INCREMENT": {
      const isAvailable = state.cart.findIndex(
        (e) => e.altId === action.payload
      );
      state.cart[isAvailable].amount = state.cart[isAvailable].amount + 1;
      return {
        ...state,
        cart: [...state.cart],
      };
    }

    case "DECREMENT": {
      const isAvailable = state.cart.findIndex(
        (e) => e.altId === action.payload
      );
      state.cart[isAvailable].amount = state.cart[isAvailable].amount - 1;
      if (state.cart[isAvailable].amount === 0) {
        return {
          ...state,
          cart: state.cart.filter((e) => e.altId !== action.payload),
        };
      }
      return {
        ...state,
        cart: [...state.cart],
      };
    }

    case "ALL_CATEGORY": {
      return {
        ...state,
        category: localCategoryData.data.categories,
      };
    }
    case "GET_NAME": {
      return {
        ...state,
        name: action.payload,
      };
    }
    case "SINGLE_CATEGORY": {
      const selectedCategory = action.payload;
      const allProductsData = localAllData.data.category.products;
      let filteredCategory = [];
      if (selectedCategory === "clothes") {
        filteredCategory = allProductsData.filter(
          (e) => e.category === "clothes"
        );
      } else if (selectedCategory === "tech") {
        filteredCategory = allProductsData.filter((e) => e.category === "tech");
      } else if (selectedCategory === "all") {
        filteredCategory = allProductsData.filter(
          (e) => e.category === "tech" || "clothes"
        );
      }

      return {
        ...state,
        single: filteredCategory,
      };
    }

    default:
      return state;
  }
};
