import { useEffect, useState } from "react";
import { useParams } from "react-router-dom";
import Carousel from "./Carousel";
import SimilarProducts from "./SimilarProducts";

const ProductDetails = ()=>{
    const [product,setProduct] = useState([]);
    let {id} = useParams();
    const getProduct = async ()=>{
        const resp = await fetch(`http://localhost:3000/products/${id}`);
        const data = await resp.json();
        setProduct(data);
        console.log(data);
    }
    useEffect(()=>{
        getProduct();
    },[])
    return(
        product.length==0?null:
        <>
        <div className="mt-44 flex justify-center">
            <div className="w-1/3 mx-4 justify-end">
            <Carousel 
                params = {
                    {
                        slides:product[0].img.map((x)=>x.imgurl),
                        autoSlide:true,
                        autoSlideInterval:3000,
                    }
                }
                />
            </div>
            <div className="">
                <h1 className="text-4xl font-bold">{product[0]?.brand.toUpperCase()}</h1>
                <h1 className="text-xl text-gray-500 my-2">{product[0]?.proddescription}</h1>
                <hr></hr>
                <div className="flex my-4">
                    <h1 className="font-bold">₹{product[0]?.discprice}</h1>
                    <h1 className="mx-2 text-gray-500">MRP <span className="line-through">{"₹"+product[0]?.mrp}</span></h1>
                    <h1 className="text-red-600 font-bold">{"("+product[0]?.discpercentage+"% OFF)"}</h1>
                </div>
                <h1 className="font-BOLD text-2xl my-4">SELECT SIZE</h1>
                <div className="flex my-4">
                    {Object.keys(product[0]?.sizes[0]).map((x)=>{
                        return product[0]?.sizes[0][x]==1
                        ?<button className="border rounded-sm text-lg w-10 text-center font-semibold mx-3 p-2 hover:bg-black hover:text-white">{x.toUpperCase()}</button>
                        :null
                    })}
                </div>
                <button className="my-4 text-2xl bg-black text-white rounded-lg p-3">ADD TO CART</button>
                <div className="my-4 text-gray-500">
                    <h1>100% Original Products</h1>
                    <h1>Pay on delivery might be available</h1>
                    <h1>Easy 14 days returns and exchanges</h1>
                    <h1>Try & Buy might be available</h1>
                </div>
            </div>
            
        </div>
        <hr className="mt-2"></hr>
        <h1 className="my-4 text-xl text-center font-bold">SIMILAR PRODUCTS</h1>
        <hr></hr>
        <SimilarProducts brand={product[0].brand} currprodid = {product[0].id}/>
        </>
    )
}

export default ProductDetails;