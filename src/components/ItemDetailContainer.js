import storage from "./storageItems"
import React, { useEffect, useState } from "react"
import ItemDetail from "./ItemDetail";

function getDatos() {
    return new Promise((resolve, reject) => {
        setTimeout(function(){
            resolve(storage[1]);
        }, 2000);
    });
}

function ItemDetailContainer( { greeting } ) {
    const [item, setItem] = useState([]);

    useEffect(() => {
        getDatos()
        .then( respuestaPromise => setItem(respuestaPromise))
        }, []);

    return (
        <>
        <h1>{greeting}</h1>
        <ItemDetail item={item}/>
        </>
    )
}

export default ItemDetailContainer