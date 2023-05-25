
export const useFetchProducts = async (api, setterFunction, prev,isLoadMore,setLoadMore) => {
    try {
        const response = await fetch(api);
        const data = await response.json();
        if(data.length==0) setLoadMore(!isLoadMore);
        setterFunction([...prev, ...data]);
    }
    catch (err) {
        console.log(err);
    }
}

export const useFetchProductsWithoutLoadMore = async (api,setProduct)=>{
    try{
        const resp = await fetch(api);
        const data = await resp.json();
        setProduct(data);
    }
    catch(err){
        throw new Error(err);
    }
}

// export const useFetchSimilarProducts = async (api,setProduct,products,setLoadMoreVisitble)=>{
//     try{
//     const res = await fetch(api);
//     const data = await res.json();
//     if(data.length==0) setLoadMoreVisitble(false);
//     setProduct([...products,...data]);
//     }
//     catch(err){
//         console.log("fetching caused error ",err);
//     }
// }
