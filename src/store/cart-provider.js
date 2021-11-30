import React, { useReducer, useEffect } from "react";
import CartContext from "./cart-context";

const initialState = {
    cartItems: [],
    totalAmount: 0,
    totalItems: 0,
};

const cartReducer = (state, action) => {
    if (action.type === "add") {
        const itemsInCart = state.cartItems;
        const itemToAddInCart = action.itemToAdd;
        const find = itemsInCart?.find((item) => item.id === itemToAddInCart.id)
        const index = itemsInCart?.findIndex((item) => item?.id === itemToAddInCart.id);
        if (find === undefined) {
            return {
                cartItems: [...itemsInCart, { ...itemToAddInCart, quantity: +1 }],
                totalItems: state.totalItems + 1,
                totalAmount: state.totalAmount + action.itemToAdd.price,
            };
        } else {
            console.log(index);
            const itemAlreadyExistsInCart = itemsInCart[index];
            const quant = itemAlreadyExistsInCart.quantity;
            const updatedItemsInCart = [...itemsInCart]
            updatedItemsInCart[index] = { ...itemAlreadyExistsInCart, quantity: quant + 1 }
            return {
                cartItems: [...updatedItemsInCart],
                totalItems: state.totalItems + 1,
                totalAmount: state.totalAmount + action.itemToAdd.price,
            };
        }
    } else if (action.type === "remove") {
        const index = state.cartItems?.findIndex((item) => item.id === action.id);
        const item = state.cartItems[index];
        const changedQuantity = state.totalItems - item.quantity;
        const changedAmount = state.totalAmount - item.price * item.quantity;
        const itemsInCart = [...state.cartItems];
        const updatedItems = itemsInCart.filter((i) => i.id !== item.id)
        console.log(updatedItems, 'updatedItems');
        return {
            cartItems: [...updatedItems],
            totalItems: changedQuantity,
            totalAmount: changedAmount
        }
    } else if (action.type === 'changeQuantity') {
        if (action.itemToAlter.id) {
            const itemUpdate = action.itemToAlter;
            const itemsAvailInCart = state.cartItems;
            const itemExistInCart = state.cartItems?.find((product) => product.id === itemUpdate.id);
            const index = itemsAvailInCart?.findIndex((item) => item?.id === itemUpdate.id);
            const changedQuantity = +state.totalItems - +itemExistInCart?.quantity + +itemUpdate?.quantity;
            const changedAmount =  +state.totalAmount - +itemExistInCart?.price* +itemExistInCart?.quantity + +itemUpdate.quantity*itemUpdate.price;
            const updatedItems = [...itemsAvailInCart];
            updatedItems[index] = itemUpdate;
            return {
                cartItems: [...updatedItems],
                totalAmount: changedAmount,
                totalItems: changedQuantity
            };
        }
    }
};

const CartProvider = (props) => {
    const [cartState, dispatchCartAction] = useReducer(cartReducer, initialState);

    useEffect(()=>{
        fetch('https://fir-eee36-default-rtdb.firebaseio.com/amazon_clone.json', {
        method: "PUT",
        headers: {
            'Accept': 'application/json',
            'Content-Type': 'application/json'
        },
        mode:'CORS',
        body: JSON.stringify({
            ...cartState
        })
        })
        .then( (response) => { 
            console.log(response);
        })
        .catch((error) =>{
            console.log(error);
        })
    },[cartState]);

    const addItemToCartHandeler = (item) => {
        dispatchCartAction({ type: "add", itemToAdd: item });
    };
    const onChangeQuantity = (item) => {
        console.log(item, 'quant cart provider');
        dispatchCartAction({ type: 'changeQuantity', itemToAlter: item })
    };
    const removeItemFromCartHandeler = (id) => {
        dispatchCartAction({ type: "remove", id: id });
    };

    const cartContext = {
        cartItems: cartState?.cartItems,
        totalItems: cartState?.totalItems,
        totalAmount: cartState?.totalAmount,
        addItem: addItemToCartHandeler,
        changeQuantity: onChangeQuantity,
        removeItem: removeItemFromCartHandeler,
    };

    return (
        <CartContext.Provider value={cartContext}>
            {props.children}
        </CartContext.Provider>
    );
};

export default CartProvider;



// if (action.type === "add") {
//     const itemsInCart = state.cartItems;
//     console.log(itemsInCart, 'prev cart');
//     const itemExistsInCart = itemsInCart.find((item) => item.id === action.itemToAdd.id);
//    console.log(itemExistsInCart, 'itemExistsInCart');
//     if (state.cartItems.length === 0 || itemExistsInCart === undefined) {
//         console.log('if');
//         const item = { ...action.itemToAdd, quantity: +1 };
//         const updatedItem = state.cartItems.concat(item);
//         // console.log(updatedItem, "updatedItem");
//         return {
//             cartItems: [...updatedItem],
//             totalItems: state.totalItems + 1,
//             totalAmount: state.totalAmount + action.itemToAdd.price,
//         };
//     } else {
//         console.log('else');
//         console.log(itemExistsInCart.quantity, 'Q  itemExist in cart');
//         const index = itemsInCart.findIndex((item) => item.id === itemExistsInCart.id);
//         const updatedItemsInCart = itemsInCart;
//         updatedItemsInCart[index] = {...itemExistsInCart,quantity: itemExistsInCart.quantity + 1};
//         console.log( updatedItemsInCart[index].quantity, 'aftr update');
//         return {
//             cartItems: [updatedItemsInCart],
//             totalItems: state.totalItems + 1,
//             totalAmount: state.totalAmount + action.itemToAdd.price,
//         };