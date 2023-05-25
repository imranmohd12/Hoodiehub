import { Link } from "react-router-dom";
import EmptyCartSVG from "../../Utils/EmptyCartSVG.svg";

const EmptyCart = ()=>{
    return(
        <div className="mt-[12.5rem] min-h-[65vh] flex-col text-Center">
            <img src={EmptyCartSVG} alt="Empty Cart Image" className="w-1/5 ml-auto mr-auto"/>
            <h1 className="text-xl font-semibold text-orange-500">Your cart is empty lets fill with some...</h1>
            <h1 className="text-xl font-semibold text-orange-500">Lets go to home</h1>
            <Link to="/"><button className="bg-black text-white px-4 py-2 text-lg rounded-md m-4">HOME</button></Link>
        </div>
    )
}

export default EmptyCart;