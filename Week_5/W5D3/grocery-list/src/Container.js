import React, { useState, useEffect } from 'react';
import ShoppingCart from './components/ShoppingCart.js';
import GroceryList from './components/GroceryList.js';




function Container() {
    const groceryItems = [
        { id: 1, title: "Appels", amount: 2 },
        { id: 2, title: "Brood", amount: 1 },
        { id: 3, title: "Melk", amount: 2 },
        { id: 5, title: "Banaan", amount: 2 },
        { id: 6, title: "Eieren", amount: 2 }
    ]
    const [groceryList, setGroceryItems] = useState(groceryItems)

    const cartItems = [
        { id: 4, title: "Muntje", amount: 2, cart: true },
        { id: 7, title: "tas", amount: 2, cart: true }
        ,
    ]
    const [cartList, setCartItems] = useState(cartItems)

    function verwijder(item) {
        setGroceryItems(groceryList.filter(currentItem => currentItem.title !== item.title))
        setCartItems([...cartList, item])
    }

    function emptyCart() {
        setCartItems([])
    }

    function addItem(input) {
        const newId = groceryList.length + 3;
        const newItem = { id: newId, title: input }
        setGroceryItems([...groceryList, newItem])
    }

    return (
        < div >
            <h3>boodschappenlijst</h3>
            <GroceryList addFunction={addItem} clickFunction={verwijder} value={groceryList} />
            <h3>winkelwagen</h3>
            <ShoppingCart clickFunction={emptyCart} value={cartList} />

        </div >
    );
}
export default Container
