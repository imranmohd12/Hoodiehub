import { Link } from "react-router-dom";
import CartContext from "../../Utils/cartContext";
import { useContext, useEffect, useState } from "react";

const HoodieCard = (props) => {
    const { cartItem, setCartItem } = useContext(CartContext);
    const [path,setPath] = useState(`/details/${props.prodData.id}`);
    localStorage.setItem("hoodiehubcart", JSON.stringify(cartItem));
    return (
        <div className="flex flex-col m-4 sm:w-20  md:w-1/5 hover:shadow-xl transition-shadow items-center">
            <Link 
            to={path} 
            onClick={()=>{
                setPath(`/details/${props?.prodData?.id}`);
            }}
            className="flex flex-col m-4 text-center rounded-md h-5/6">
                <div className="h-3/4">
                    <img src={props?.prodData?.img[0]?.imgurl} className="rounded-tr-md rounded-tl-md h-full w-auto"></img>
                </div>
                <div>
                    <h1 className="text-lg font-bold">{props?.prodData?.brand}</h1>
                    <h1 className="text-sm">{props?.prodData?.proddescription}</h1>
                    <div className="flex flex-row justify-center">
                        <h1 className="m-1 text-lg font-bold">₹{props?.prodData?.discprice}</h1>
                        <h1 className="m-1 text-lg text-gray-600 line-through">₹{props?.prodData?.mrp}</h1>
                        <h1 className="m-1 text-lg font-bold text-red-600">{`(${props?.prodData?.discpercentage}% OFF)`}</h1>
                    </div>
                </div>
            </Link>
            <button
                className="bg-black text-white p-2 rounded-md w-5/6"
                onClick={() => {
                    setCartItem({
                        cartitems: [
                            ...cartItem.cartitems, { ...props.prodData, key: props.prodData.id }
                        ]
                    });

                }}
            >Add To Cart</button>
        </div>

    )
}

export default HoodieCard;