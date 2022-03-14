//Es un componente destinado a mostrar información breve del producto que el user clickeará luego para 
//acceder a los detalles (los desarrollaremos más adelante)

function Item( {item} ){
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


export default Item;
