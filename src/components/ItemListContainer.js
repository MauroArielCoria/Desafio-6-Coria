import ItemList from "./ItemList"
import storage from "./storageItems"
import { useEffect, useState } from "react"

function getDatos() {
    return new Promise((resolve, reject)=>{
        setTimeout(function(){
            resolve(storage);
        },2000);
    });
}

function ItemListContainer( { greeting } ) {
    const [items, setItems] = useState([]);

    useEffect(() => {
        getDatos()
        .then( respuestaPromise => setItems(respuestaPromise))
        },[]);

    return (
    <>
        <h1>{greeting}</h1>
        <ItemList items={items}/>
    <>
    )
}

export default ItemListContainer