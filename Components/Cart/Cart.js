import { useContext, useEffect, useState } from "react";
import CartContext from "../../Utils/cartContext";
import CartItemCard from "./CartItemCard";
import EmptyCart from "./EmptyCart";
const Cart = ()=>{
    const {cartItems} = useContext(CartContext);
    const [totalMrp,setTotalMrp] = useState(0);
    const [totalDiscout,setTotalDiscount] = useState(0);
    const [totalDiscountPrice,setTotalDiscountPrice] = useState(0);
    const [coupan,setCoupan] = useState("");
    const [isValidCoupan,setIsValidCoupan] = useState(false);
    const [coupanValue,setCoupanValue] = useState(0);
    const [isError,setIsError] = useState(false); 
    useEffect(()=>{
        let tmrp = 0;
        let tdisc = 0;
        let tdiscprice = 0;
        for(let x of cartItems){
            tmrp += x.mrp*x.count;
            tdisc += (x.mrp-x.discprice)*x.count;
            tdiscprice += (x.discprice*x.count);
        }
        setTotalMrp(tmrp);
        setTotalDiscount(tdisc);
        setTotalDiscountPrice(tdiscprice-coupanValue);
    },[cartItems,coupanValue]);
    return(
        cartItems.length==0
        ?<EmptyCart/>
        :<div className="mt-44 flex justify-around flex-wrap min-h-[65vh]">
            <div className="pl-4">
                <h1 className="text-xl font-semibold">{`My Cart (${cartItems.length} Items)`}</h1>
                {cartItems.map((x)=>{
                    return <CartItemCard cartItemDetails={x} key={x.id}/>
                })}
            </div>
            <div className="mr-6">
                <h1 className="text-xl font-bold">Order Details</h1>
                <table className="text-gray-600 mt-4 table-fixed">
                    <tr>
                        <td className="text-left pr-14 py-4">Total MRP</td>
                        <td className="text-orange-600">₹{totalMrp}</td>
                    </tr>
                    <tr>
                        <td className="text-left pr-14 py-4">Toatl Discount</td>
                        <td className="text-green-600">-₹{totalDiscout}</td>
                    </tr>
                    {isValidCoupan
                    ?<tr>
                    <td className="text-left pr-14 py-4">Coupan Discount</td>
                    <td className="text-green-600">-₹{coupanValue}</td>
                    </tr>
                    :null
                    }
                    <tr>
                        <td className="text-left pr-14 py-4">Deliver Charges</td>
                        <td className="text-green-600">Free</td>
                    </tr>
                    <tr className="border-t-gray border-t-2 font-bold">
                        <td className="text-left pr-14 py-4">Total Amount</td>
                        <td className="">₹{totalDiscountPrice}</td>
                    </tr>
                </table>
                <button className="text-lg py-1 font-semibold bg-orange-700 text-white w-full rounded-md">Place Order</button>
                {isValidCoupan?<h1 className="text-md font-semibold text-green-500 my-2">Hurray..... Coupan Successfully Applied</h1>:null}
                {isError?<h1 className="text-md font-semibold text-red-500 my-2">Oops... Coupan is invalid</h1>:null}
                <div className="my-4">
                    <h1 className="font-bold">Check Coupan</h1>
                    <input type="text" className="border-black border-2 rounded-md p-1"
                    onChange={
                        (e)=>{
                        setCoupan(e.target.value)
                    }}
                    />
                    <button 
                    className="bg-black text-white py-1 px-2 rounded-md mx-2"
                    onClick={
                        ()=>{
                            if(coupan.toUpperCase().trim()=="FREE50"){
                                setCoupanValue(50);
                                setIsValidCoupan(true);
                                setIsError(false);
                                
                            }
                            else{
                                setCoupanValue(0);
                                setIsValidCoupan(false);
                                setIsError(true);
                            }
                        }
                    }
                    >Check</button>
                </div>

                <h1 className="text-lg font-semibold text-green-700">Use "FREE50" coupan for ₹50 Discount</h1>
            </div>
        </div>
        
    )
}

export default Cart;