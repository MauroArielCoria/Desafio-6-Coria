import Navbar from "./components/NavBar"
//import ItemListContainer from "./components/ItemListContainer"
import ItemDetailContainer from "./components/ItemDetailContainer"
//import Footer from "./components/Footer"


const App =() => {
    return (
        <>
            <Navbar/>
            {/*<ItemListContainer greeting="Hola"/>*/}
            <ItemDetailContainer greeting="ELIGE TU MEJOR CALZADO"/>
            {/*<Footer/>*/}
        </>
    )
}


export default App
