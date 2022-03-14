
function ItemDetail({item}) {
    return(
            <div>
                <img src={item.imageUrl} />
                <div>
                    <h2>{item.calzado}</h2>
                    <h3>{item.precio}</h3>
                </div>
            </div>
        
        )
}


export default ItemDetail;
