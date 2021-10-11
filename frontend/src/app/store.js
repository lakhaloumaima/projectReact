import { configureStore } from '@reduxjs/toolkit';
import usersReducer from "../features/users/usersSlice";
import productsReducer from "../features/products/productsSlice";
import cartReducer from "../features/cart/cartSlice";
import ordersReducer from "../features/orders/ordersSlice";
import categoriesReducer from "../features/categories/categoriesSlice";
import clientsReducer from "../features/clients/clientsSlice";



export const store = configureStore({
  reducer: {
    users: usersReducer,
    clients: clientsReducer,
    categories: categoriesReducer,
    products: productsReducer,
    cart: cartReducer,
    orders: ordersReducer,
  },
});
