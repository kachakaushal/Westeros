import React, { createContext, useEffect, useState } from "react";


export const ShopContext = createContext(null)
const GetDefaultCart = () => {
    let Cart = {};
    for (let index = 0; index < 300 + 1; index++) {
        Cart[index] = 0;

    }
    return Cart;
}

const ShopContextProvider = (props) => {
    const [all_products, setAll_Product] = useState([]);
    const [CartItems, setCrtItems] = useState(GetDefaultCart())

    useEffect(() => {
        fetch('http://localhost:4000/allproducts').then((response) => response.json()).then((data) => setAll_Product(data))

        if (localStorage.getItem('auth-token')) {
            fetch('http://localhost:4000/getcart', {
                method: 'POST',
                headers: {
                    Accept: 'application/form-data',
                    'auth-token': `${localStorage.getItem('auth-token')}`,
                    'Content-Type': 'application/json',
                },
                body: ""
            }).then((responce) => responce.json()).then((data) => setCrtItems(data))
        }
    }, [])

    const addToCart = (itemId) => {
        setCrtItems((prev) => ({ ...prev, [itemId]: prev[itemId] + 1 }))
        if (localStorage.getItem('auth-token')) {
            fetch('http://localhost:4000/addtocart', {
                method: 'POST',
                headers: {
                    Accept: 'application/form-data',
                    'auth-token': `${localStorage.getItem('auth-token')}`,
                    'Content-Type': 'application/json'
                },
                body: JSON.stringify({ "itemId": itemId }),
            })
                .then((responce) => responce.json()).then((data) => console.log(data))
        }

    }
    const RemoveFromCart = (itemId) => {
        setCrtItems((prev) => ({ ...prev, [itemId]: prev[itemId] - 1 }))
        if (localStorage.getItem('auth-token')) {
            fetch('http://localhost:4000/removefromcart', {
                method: 'POST',
                headers: {
                    Accept: 'application/form-data',
                    'auth-token': `${localStorage.getItem('auth-token')}`,
                    'Content-Type': 'application/json'
                },
                body: JSON.stringify({ "itemId": itemId }),
            })
                .then((responce) => responce.json()).then((data) => console.log(data))
        }
    }
    const GetTotalAmount = () => {
        let totalAmount = 0;
        for (const item in CartItems) {
            if (CartItems[item] > 0) {
                let itemInfo = all_products.find((product) => product.id === Number(item))
                totalAmount += itemInfo.new_price * CartItems[item];
            }

        }
        return totalAmount;
    }
    const GetTotalCartItem = () => {
        let totalItem = 0;
        for (const item in CartItems) {
            if (CartItems[item] > 0) {
                totalItem += CartItems[item];
            }
        }
        return totalItem;
    }
    const contextValue = { GetTotalCartItem, GetTotalAmount, all_products, CartItems, addToCart, RemoveFromCart };
    return (
        <ShopContext.Provider value={contextValue}>
            {props.children}
        </ShopContext.Provider>
    )
}

export default ShopContextProvider