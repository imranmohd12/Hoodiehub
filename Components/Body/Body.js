import { useEffect, useState } from "react";
import HoodieCard from "./HoodieCard";
import { Link } from "react-router-dom";


const  Body = ()=>{
    const [searchText,setSearchText] = useState("");
    const [products,setProducts] = useState([]);
    const [searchItems,setSearchItems] = useState([]);
    const [printSearchText,setPrintSearchText] = useState([]);
    const [isAllProducts,setIsAllProducts] = useState(true);
    const [page,setPage] = useState(0);
    const [isAllLoaded,setIsAllLoaded] = useState(false);
    const fetchFunction = async (api,setterFunction,prev)=>{
        try{
        const response = await fetch(api);
        const data = await response.json();
        if(data.length==0) setIsAllLoaded(true);
        setterFunction([...prev,...data]);
        }
        catch(err)
        {
            console.log(err);
        }
    }
    useEffect(()=>{
        console.log("inside useeffect");
        fetchFunction(`http://localhost:3000/products/${page}/12`,setProducts,products);
        console.log(products);
    },[page]);
    useEffect(()=>{
        if(searchText.trim()!="")
            fetchFunction(`http://localhost:3000/seachItems/${searchText.trim()}`,setSearchItems,[]);
        else
            setSearchItems([]);
    },[searchText]);
    return (
        <>
            <div className="flex justify-center mt-44">
                <div className="">
                    <input 
                    type="text"
                    value={searchText} 
                    className="mx-2 p-2 border-2 border-solid border-black rounded-md w-64"
                    onBlur = {()=>
                        setTimeout(()=>{
                            setSearchItems([])
                        },200)}
                    onChange={(e)=>{
                        setSearchText(e.target.value);
                        console.log(searchText);
                    }}></input>
                    <ul className="absolute w-64 mx-2 bg-white">
                        {searchItems.length==0
                        ?null
                        :searchItems.map((x)=>{
                            return <Link className="hover:border hover:border-black" to={`/details/${x.id}`}>
                                <h1 className="px-2 text-lg">{x.brand}</h1>
                                <h1 className="px-2 text-sm text-gray-500">{x.proddescription.substring(0,32)+"..."}</h1>
                            </Link>
                        })
                        }
                    </ul>
                </div>
                <button 
                className="mx-2 bg-gray-900 text-white p-2 rounded-md h-auto"
                onClick = {()=>{
                    //setButtonItem(searchItem);
                    if(searchText.trim().length>0)
                    {
                        fetchFunction(`http://localhost:3000/similarproducts/${searchText.trim()}`,setProducts,[]);
                        setIsAllProducts(false);   
                    }
                    else if(!isAllProducts)
                    {
                        fetchFunction(`http://localhost:3000/products/${page}/12`,setProducts,products);
                        setIsAllProducts(true);
                    }
                    setPrintSearchText(searchText);
                }}
                >search</button>
            </div>
            {printSearchText.length>0?<h1 className="text-center text-lg font-bold my-4">{`Search Result For "${searchText}"`}</h1>:null}
            <div className="flex flex-wrap my-4 justify-center">
                {products.length==0?null:products.map((x) => <HoodieCard key={x.id} prodData = {x}/>)}
            </div>
            {isAllLoaded
            ?null
            :<button 
            className="text-lg font-bold text-center my-4 cursor-pointer w-full text-green-700 hover:text-green-500"
            onClick = {()=>{
                setPage(page+12);
            }}
            >Load More...</button>}
        </>
    )
}

export default Body;