import { useEffect,useState } from "react";
import HoodieCard from "./HoodieCard";


const SimilarProducts = ({brand,currprodid})=>{
    const [products,setProduct] = useState([]);
    const [page,setPage] = useState(0);
    const fetchSimilarProducts = async ()=>{
        try{
        const res = await fetch(`http://localhost:3000/similarproducts/${brand}/${page}/12`);
        const data = await res.json();
        setProduct([...products,...data]);
        }
        catch(err){
            console.log("fetching caused error ",err);
        }
    }
    useEffect(()=>{
        fetchSimilarProducts();
    },[page])
    return(
        products.length==0
        ?null
        :<div className="flex flex-wrap justify-center">
            <div className="flex flex-wrap justify-center">
            {products.map((x)=>{
                if(x.id!=currprodid)
                {
                    return <HoodieCard prodData = {x} key={x.id}/>
                }
            })}
            </div>
            <button
            className="text-lg font-bold text-center my-4 cursor-pointer w-full text-green-700 hover:text-green-500"
            onClick={()=>{
                setPage(page+12);
            }}
            >
            Load More...
            </button>
        </div>
    )
}

export default SimilarProducts;