//const APIHOST = "https://careful-moth-life-jacket.cyclic.app/"
const APIHOST = "https://blue-fluffy-parrot.cyclic.app/"

export const useFetchProducts = async (api, setterFunction, prev,isLoadMore,setLoadMore) => {
    try {
        const response = await fetch(`${APIHOST}${api}`);
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
        const resp = await fetch(`${APIHOST}${api}`);
        const data = await resp.json();
        setProduct(data);
    }
    catch(err){
        console.log(err);
    }
}

