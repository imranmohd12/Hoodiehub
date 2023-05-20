import { Link } from "react-router-dom";
import { useContext } from "react";
import CartContext from "../../Utils/cartContext";

const NavBar = ()=>{
    const {cartItem} = useContext(CartContext);
    return (
        <div className="flex flex-row rounded-md">
            <Link to="/" className="m-2 mt-auto p-2 hover:bg-black hover:rounded-md hover:text-white transition-shadow">Home</Link>
            <Link to="/" className="m-2 mt-auto p-2 hover:bg-black hover:rounded-md hover:text-white transition-shadow">About</Link>
            <Link to="/cart" className="m-2 mt-auto p-2 hover:bg-black hover:rounded-md hover:text-white transition-shadow">Cart {cartItem?.cartitems?.length===0?"":cartItem?.cartitems?.length}</Link>
        </div>
    )
}
export default NavBar;