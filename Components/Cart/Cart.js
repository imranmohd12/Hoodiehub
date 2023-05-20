import { useContext } from "react";
import CartContext from "../../Utils/cartContext";
import CartItemCard from "./CartItemCard";

const Cart = ()=>{
    const {cartItem} = useContext(CartContext);
    
    return(
        <div className="mt-40">
            <div>
                <h1>Total Items {cartItem.cartitems.length}</h1>
                {cartItem.cartitems.map((x)=>{
                    return <CartItemCard cartItemDetails={x} key={x.id}/>
                })}
            </div>
        </div>
        
    )
}

export default Cart;