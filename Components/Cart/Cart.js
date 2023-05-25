import { useContext, useEffect, useState } from "react";
import CartContext from "../../Utils/cartContext";
import CartItemCard from "./CartItemCard";
import EmptyCart from "./EmptyCart";
const Cart = ()=>{
    const {cartItems} = useContext(CartContext);
    const [totalMrp,setTotalMrp] = useState(0);
    const [totalDiscout,setTotalDiscount] = useState(0);
    const [totalDiscountPrice,setTotalDiscountPrice] = useState(0);
    useEffect(()=>{
        let tmrp = 0;
        let tdisc = 0;
        let tdiscprice = 0;
        for(let x of cartItems){
            tmrp += x.mrp*x.count;
            tdisc += (x.mrp-x.discprice)*x.count;
            tdiscprice += x.discprice*x.count;
        }
        setTotalMrp(tmrp);
        setTotalDiscount(tdisc);
        setTotalDiscountPrice(tdiscprice);
    },[cartItems])
    return(
        cartItems.length==0
        ?<EmptyCart/>
        :<div className="mt-40 flex justify-around flex-wrap min-h-[65vh]">
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
                <div className="my-4">
                    <h1 className="font-bold">Check Coupan</h1>
                    <input type="text" className="border-black border-2 rounded-md p-1"/><button className="bg-black text-white py-1 px-2 rounded-md mx-2">Check</button>
                </div>
            </div>
        </div>
        
    )
}

export default Cart;