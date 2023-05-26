import ReactDOM from "react-dom/client";
import Header from "./Components/Header/Header";
import Body from "./Components/Body/Body";
//import { RouterProvider,Outlet } from "react-router";
import { RouterProvider,Outlet } from "react-router-dom";
import { createBrowserRouter } from "react-router-dom";
import Cart from "./Components/Cart/Cart";
import { useContext, useEffect, useState } from "react";
import ProductDetails from "./Components/Body/ProductDetails";
import About from "./Components/Footer/About";
import CartContext from "./Utils/cartContext";
import { addCart,updateQuantityItem,removeCart,updateCartFromLS } from "./Utils/cartOperations";
 
const setLocalStorage = ()=>{
    let dummycart = []
    localStorage.setItem("hoodiehubcart",JSON.stringify(dummycart));
    return dummycart;
}
const AppLayout = ()=>{
    const LS = localStorage.getItem("hoodiehubcart")?JSON.parse(localStorage.getItem("hoodiehubcart")):setLocalStorage();
    const [cartItems,setCartItem] = useState(LS);

    useEffect(()=>{
        localStorage.setItem("hoodiehubcart", JSON.stringify(cartItems));   
    },[cartItems]);
    return (
        <CartContext.Provider value={{
            cartItems,
            addCart,
            removeCart,
            updateQuantityItem,
            updateCartFromLS,
            setCartItem
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