import { useEffect,useState } from "react";
import HoodieCard from "./HoodieCard";


const SimilarProducts = ({brand,currprodid})=>{
    const [products,setProduct] = useState([]);
    const fetchSimilarProducts = async ()=>{
        const res = await fetch(`http://localhost:3000/similarproducts/${brand}`);
        const data = await res.json();
        setProduct(data);
    }
    useEffect(()=>{
        fetchSimilarProducts();
    },[])
    return(
        products.length==0
        ?null
        :<div className="flex flex-wrap justify-center">
            {products.map((x)=>{
                if(x.id!=currprodid)
                {
                    return <HoodieCard prodData = {x} key={x.id}/>
                }
            })}
        </div>
    )
}

export default SimilarProducts;