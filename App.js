import ReactDOM from "react-dom/client";
import Header from "./Components/Header/Header";
import Body from "./Components/Body/Body";
import { RouterProvider,Outlet } from "react-router";
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
    console.log("created");
    return dummycart;
}


const AppLayout = ()=>{
    const LS = localStorage.getItem("hoodiehubcart")==="undefined" || localStorage.getItem("hoodiehubcart")==="null" ?setLocalStorage():JSON.parse(localStorage.getItem("hoodiehubcart"));
    console.log(LS);
    const [cartItems,setCartItem] = useState(LS);

    useEffect(()=>{
        localStorage.setItem("hoodiehubcart", JSON.stringify(cartItems));   
    },[cartItems]);

//     const updateQuantityItem = (item,op)=>{
//         console.log("inside updateQuantityItem ",item);
//         let idx = -1;
//         let tempCartItems = cartItems.map((x,i)=>{
//             if(x.id==item.id){
//                 idx = i;
//             }
//             return x;
//         }) 
//         if(op=="increment"){
//             tempCartItems[idx] = {...item,count:item.count+1};
//             console.log(cartItems);
//             setCartItem(tempCartItems);
//         }
//         else if(op=="decrement"){
//             if(item.count==1){
//                 removeCart(item);
//             }
//             else{
//                 tempCartItems[idx] = {...item,count:item.count-1};
//                 setCartItem(tempCartItems);
//             }
//         }
//     }
//     const addCart = (item)=>{
//         let idx = -1;
//         let updatedCart = cartItems.map((x,i)=>{
//             if(x.id==item.id){
//                 idx = i;
//             }
//             return x;
//         }) 
//         if(idx==-1){
//             setCartItem([...updatedCart,{...item,count:1}]);
//             console.log("after update ",cartItems);
//         }
//         else{
//             console.log("item quantity count ",item.count)
// ;            updatedCart[idx] = {...item,count:updatedCart[idx].count+1};
//             setCartItem(updatedCart);
//         }
//     }
//     const removeCart = (item)=>{
//         let filteredcart = cartItems.filter((x)=>item.id!=x.id);
//         setCartItem(filteredcart);
//     }
//     const updateCartFromLS = ()=>{
//         setCartItem(JSON.parse(localStorage.getItem("hoodiehubcart")));
//     }
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