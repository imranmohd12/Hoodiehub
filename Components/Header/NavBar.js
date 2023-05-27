import { Link } from "react-router-dom";
import { useContext } from "react";
import CartContext from "../../Utils/cartContext";

const NavBar = ()=>{
    const {cartItems} = useContext(CartContext);
    const contextItems = useContext(CartContext);
    return (
        <div className="flex justify-around sm:justify-normal">
            <Link to="/" className="m-2 mt-auto p-2 hover:bg-black hover:rounded-md hover:text-white transition-shadow">Home</Link>
            <a href="#about" className="m-2 mt-auto p-2 hover:bg-black hover:rounded-md hover:text-white transition-shadow">About</a>
            <Link to="/cart" className="m-2 mt-auto p-2 hover:bg-black hover:rounded-md hover:text-white transition-shadow">Cart {cartItems.length===0?null:<span className="bg-red-500 text-white rounded-md p-1 w-3 h-3">{cartItems.length}</span>}</Link>
        </div>
    )
}
export default NavBar;