import { useEffect, useReducer } from "react";

const cartReducer = (state, action) => {
    switch(action.type) {
        case 'add': return [...state, action.cartObj];
        case 'remove': return state.filter(cartValue => cartValue.id !== action.cartObj.id);
        case 'INCREMENT': return state.map(item => {
            if(item.id === action.id) {
                const newItem = {...item};
                newItem.quantity += 1;
                return newItem;
            }
            return item;
        });
        case 'DECREMENT': return state.map(item => {
            if(item.id === action.id) {
                const newItem = {...item};
                if(newItem.quantity > 1) {
                    newItem.quantity -= 1;
                }
                return newItem;
            }
            return item;
        });
        default: return state;
    }
}


function useCartReducer(key = "Cart") {

    const [cart, setCart] = useReducer(cartReducer, [], initial => {
        const savedInCart = localStorage.getItem(key);

        return savedInCart ? JSON.parse(savedInCart) : initial;
    })

    useEffect(() => {
        localStorage.setItem(key, JSON.stringify(cart))
    }, [cart, key])

    return [cart, setCart];
}




export default useCartReducer;

