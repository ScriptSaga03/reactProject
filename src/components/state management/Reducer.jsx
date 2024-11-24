import { createSlice } from "@reduxjs/toolkit";

const reducerSlice = createSlice({
    name: 'modal',
    initialState: {
        isOpen: false,
        cardDetails: null,
        carts: [], // Cart mein product details
        cardSlide: false,
        productPrice: 0, // Total price of all products
    },
    reducers: {
        // Open Modal
        openModal: (state, action) => {
            state.isOpen = true;
            state.cardDetails = action.payload;
        },
        // Close Modal
        closeModal: (state) => {
            state.isOpen = false;
            state.cardDetails = null;
        },
        // Add To Cart
        addToCart: (state, action) => {
            const newProduct = { 
                ...action.payload, 
                quantity: 1, 
                subtotal: action.payload.price // Default subtotal
            };
            state.carts.push(newProduct);
        },
        // Remove from Cart
        removeFromCart: (state, action) => {
            const productIndex = action.payload;
            if (state.carts[productIndex]) {
                state.carts.splice(productIndex, 1); // Remove the product
            }
        },
        // Card Slider
        cardSlider: (state) => {
            state.cardSlide = true;
        },
        cardSliderClose: (state) => {
            state.cardSlide = false;
        },
        // Quantity Increase
        increamentQuantity: (state, action) => {
            const productIndex = action.payload;
            if (state.carts[productIndex]) {
                state.carts[productIndex].quantity += 1;
                state.carts[productIndex].subtotal = 
                    state.carts[productIndex].quantity * state.carts[productIndex].price; // Update subtotal
            }
        },
        // Quantity Decrease
        decrementQuantity: (state, action) => {
            const productIndex = action.payload;
            if (state.carts[productIndex] && state.carts[productIndex].quantity > 1) {
                state.carts[productIndex].quantity -= 1;
                state.carts[productIndex].subtotal = 
                    state.carts[productIndex].quantity * state.carts[productIndex].price; // Update subtotal
            }
        },
        // Calculate Total Product Price
        calculateProductPrice: (state) => {
            state.productPrice = state.carts.reduce((total, item) => total + item.subtotal, 0);
        }
    }
});

export const {
    openModal,
    closeModal,
    addToCart,
    cardSlider,
    cardSliderClose,
    increamentQuantity,
    decrementQuantity,
    calculateProductPrice,
    removeFromCart
} = reducerSlice.actions;

export default reducerSlice.reducer;
