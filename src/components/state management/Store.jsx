// import { configureStore } from "@reduxjs/toolkit";
// import reducerSlice from './Reducer'

// const store=configureStore({
//     reducer:{
//         modal:reducerSlice
//     }
// })

// export default store;

import { configureStore } from "@reduxjs/toolkit";
import reducerSlice from './Reducer';

// LocalStorage से Redux State लोड करें
const loadFromLocalStorage = () => {
    try {
        const serializedState = localStorage.getItem("reduxState");
        if (serializedState === null) return undefined;     // अगर LocalStorage खाली है
        return JSON.parse(serializedState);
    } catch (error) {
        console.error("Could not load state from localStorage:", error);
        return undefined;
    }
};

// Redux State को LocalStorage में Save करें
const saveToLocalStorage = (state) => {
    try {
        const serializedState = JSON.stringify(state);
        localStorage.setItem("reduxState", serializedState);
    } catch (error) {
        console.error("Could not save state to localStorage:", error);
    }
};

// LocalStorage से लोड की गई State
const preloadedState = loadFromLocalStorage();

// Redux Store बनाएं
const store = configureStore({
    reducer: {
        modal: reducerSlice,
    },
    preloadedState, // LocalStorage से प्रीलोड की गई स्टेट
});

// Redux Store Update होने पर LocalStorage को Update करें
store.subscribe(() => {
    saveToLocalStorage(store.getState());
});

export default store;
