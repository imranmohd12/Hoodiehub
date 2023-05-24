import { Link } from "react-router-dom";
import { useContext } from "react";
import CartContext from "../../Utils/cartContext";

const NavBar = ()=>{
    const {cartItems} = useContext(CartContext);
    const contextItems = useContext(CartContext);
    console.log("cart context from navbar",CartContext);
    return (
        <div className="flex flex-row rounded-md">
            <Link to="/" className="m-2 mt-auto p-2 hover:bg-black hover:rounded-md hover:text-white transition-shadow">Home</Link>
            <a href="#about" className="m-2 mt-auto p-2 hover:bg-black hover:rounded-md hover:text-white transition-shadow">About</a>
            <Link to="/cart" className="m-2 mt-auto p-2 hover:bg-black hover:rounded-md hover:text-white transition-shadow">Cart {cartItems.length===0?"":cartItems.length}</Link>
        </div>
    )
}
export default NavBar;