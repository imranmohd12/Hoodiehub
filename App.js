import ReactDOM from "react-dom/client";
import Header from "./Components/Header/Header";
import Body from "./Components/Body/Body";
import { RouterProvider,Outlet } from "react-router";
import { createBrowserRouter } from "react-router-dom";
import Cart from "./Components/Cart/Cart";
import { useContext, useState } from "react";
import CartContext from "./Utils/cartContext";
import ProductDetails from "./Components/Body/ProductDetails";
import About from "./Components/Footer/About";
const setLocalStorage = ()=>{
    let dummycart = {
        cartitems : [],
    }
    localStorage.setItem("hoodiehubcart",JSON.stringify(dummycart));
    console.log("created");
    return dummycart;
}
const AppLayout = ()=>{
    const LS = localStorage.getItem("hoodiehubcart")==="undefined" || localStorage.getItem("hoodiehubcart")==="null" ?setLocalStorage():JSON.parse(localStorage.getItem("hoodiehubcart"));
    console.log(LS);
    const [cartItem,setCartItem] = useState(LS);
    return (
        <CartContext.Provider value={{
            cartItem : cartItem,
            setCartItem : setCartItem,
        }}>
            <Header/>
            <Outlet/>
            <About/>
        </CartContext.Provider>
    )
}
const AppRoute = createBrowserRouter([
    {
        path : '/',
        element : <AppLayout/>,
        errorElement : <Error/>,
        children : [
            {
                path : '/',
                element : <Body/>
            },
            {
                path : '/cart',
                element : <Cart/>
            },
            {
                path : '/details/:id',
                element : <ProductDetails/>
            }
        ]
    }
])

const root = ReactDOM.createRoot(document.getElementById("root"));
root.render(<RouterProvider router={AppRoute}/>)