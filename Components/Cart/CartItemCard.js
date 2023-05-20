import { useContext } from "react";
import CartContext from "../../Utils/cartContext";

const CartItemCard = ({cartItemDetails,key})=>{
    const {cartItem,setCartItem} = useContext(CartContext);
    console.log(cartItemDetails);
    console.log(cartItem);
    localStorage.setItem("hoodiehubcart",JSON.stringify(cartItem));
    return(
        <div className="flex flex-row m-3">
            <img src={cartItemDetails.img[0].imgurl} className="w-20"/>
            <div className="ml-3">
                <h1>{cartItemDetails.brand}</h1>
                <h1>{cartItemDetails.proddescription}</h1>
                <div className="flex flex-row">
                    <h1 className="text-md">RS.{cartItemDetails.discprice}</h1>
                    <h1 className="text-sm line-through ml-1">RS.{cartItemDetails.mrp}</h1>
                    <h1>{`(${cartItemDetails.discpercentage})%`}</h1>
                </div>
                <button className="bg-black text-sm text-white p-1 rounded-md"
                onClick={()=>{
                    setCartItem({
                        cartitems : cartItem.cartitems.filter((x)=>x.id!=cartItemDetails.id)
                    })
                    
                }}
                >Delete Item</button>
            </div>
        </div>
    )
}

export default CartItemCard;