import { Link } from "react-router-dom";
import CartContext from "../../Utils/cartContext";
import { useContext, useEffect, useState } from "react";

const HoodieCard = (props) => {
    const { setCartItem,cartItems, addCart } = useContext(CartContext);
    const [path,setPath] = useState(`/details/${props.prodData.id}`);
    const [size,setSize] = useState("");
    const [showError,setShowError] = useState(false);
    const [isSizeSelected,setIsSizeSelected] = useState(false);
    return (
        <div className="flex flex-col m-4 hover:shadow-xl transition-shadow items-center w-64 rounded-md">
            <Link 
            to={path} 
            onClick={()=>{
                setPath(`/details/${props?.prodData?.id}`);
            }}
            className="flex flex-col mx-4 text-center rounded-md">
                <img src={props?.prodData?.img[0]?.imgurl} className="rounded-tr-md rounded-tl-md h-64"></img>
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
            <div className="">
                {Object.keys(props?.prodData?.sizes[0]).map((x)=>{
                    if(props?.prodData?.sizes[0][x]!=0)
                    {
                        return <><input type="radio" name={`size${props.prodData.id}`} value={x} id={x+props.prodData.id} className="" 
                        onChange={
                            (e)=>{
                                setSize(e.target.value);
                                setIsSizeSelected(true);
                                setShowError(false);
                            }
                        }/><label htmlFor={x+props.prodData.id} className="text-md font-bold px-2 focus:bg-black focus:text-white">{x.toUpperCase()}</label></>
                    }
                })}
            </div>
            {showError?<h1 className="text-red-700 text-sm">select size</h1>:null}
            <button
                className="bg-black text-white p-2 rounded-md w-5/6 my-2"
                onClick={() => {
                    if(isSizeSelected){
                        addCart({...props.prodData,key:props.prodData.id,size:size},setCartItem,cartItems);
                    }
                    else{
                        setShowError(true);
                    }
                }}
            >Add To Cart</button>
        </div>

    )
}

export default HoodieCard;