import { useContext, useEffect } from "react";
import CartContext from "../../Utils/cartContext";

const CartItemCard = ({cartItemDetails})=>{
    const {cartItems,removeCart,updateQuantityItem,updateCartFromLS,setCartItem} = useContext(CartContext);
    useEffect(()=>{
        updateCartFromLS(setCartItem);
    },[])
    return(
        <div className="flex flex-row m-3">
            <img src={cartItemDetails.img[0].imgurl} className="w-28"/>
            <div className="ml-3">
                <h1 className="text-lg font-bold">{cartItemDetails.brand.toUpperCase()}</h1>
                <h1 className="text-sm text-gray-600">{cartItemDetails.proddescription}</h1>
                <div className="flex flex-row">
                    <h1 className="text-md font-bold mr-2">₹{cartItemDetails.discprice}</h1>
                    <h1 className="text-md line-through text-gray-600"> ₹{cartItemDetails.mrp} </h1>
                    <h1 className="text-md text-red-600 font-bold mx-2">{`(${cartItemDetails.discpercentage})%`}</h1>
                </div>
                <h1 className="font=semibold">SIZE : {cartItemDetails.size.toUpperCase()}</h1>
                <div className="flex">
                    <h1 className="mr-2 font-semibold">QUANTITY: </h1>
                    <button onClick={()=>{
                        updateQuantityItem(cartItemDetails,"decrement",setCartItem,cartItems);
                    }} className="font-bold text-md border text-white bg-black px-2 rounded-sm">-</button>
                    <h1 className="mx-1">{cartItemDetails.count}</h1>
                    <button onClick={()=>{
                        updateQuantityItem(cartItemDetails,"increment",setCartItem,cartItems);
                    }} className="font-bold text-md border px-2 text-white bg-black rounded-sm">+</button>
                    
                </div>
                
                <button className="bg-black text-sm text-white p-1 my-2 rounded-sm"
                onClick={()=>{
                    removeCart(cartItemDetails,setCartItem,cartItems)
                }}
                >Delete Item</button>
            </div>
        </div>
    )
}

export default CartItemCard;