import { useEffect, useState } from "react";
import HoodieCard from "./HoodieCard";
import { Link } from "react-router-dom";
import ShimmerHome from "../Shimmer/ShimmerHome";
import { useFetchProducts,useFetchProductsWithoutLoadMore } from "../../Utils/fetchFunctions";

const Body = () => {
    const [searchText, setSearchText] = useState("");
    const [products, setProducts] = useState([]);
    const [searchItems, setSearchItems] = useState([]);
    const [printSearchText, setPrintSearchText] = useState([]);
    const [isAllProducts, setIsAllProducts] = useState(true);
    const [page, setPage] = useState(0);
    const [isAllLoadedMore, setIsAllLoadedMore] = useState(true);
    const [isSearchLoadMore, setIsSearchLoadMore] = useState(false);
    const [searchPage, setSearchPage] = useState(1);

    //Pagination for all products
    useEffect(() => {
        useFetchProducts(`/products/${page}/15`, setProducts, products,isAllLoadedMore,setIsAllLoadedMore)
    }, [page]);
    //Intelligent dropdown while typing in search input field
    useEffect(() => {
        if (searchText.trim() != "")
            useFetchProductsWithoutLoadMore(`/seachItems/${searchText.trim()}`, setSearchItems);
        else
            setSearchItems([]);
    }, [searchText]);
    //Pagination for search results
    useEffect(() => {
        if (searchText.trim().length > 0) {
            let len = useFetchProducts(`/similarproducts/${searchText.trim()}/${searchPage}/15`, setProducts, products,isSearchLoadMore,setIsSearchLoadMore)
            console.log("data length ", len);
        }
    }, [searchPage]);


    return (
        <>
            <div className="flex justify-center mt-44">
                <div className="">
                    <input
                        type="text"
                        value={searchText}
                        className="mx-2 p-2 border-2 border-solid border-black rounded-md w-64"
                        onBlur={() =>
                            setTimeout(() => {
                                setSearchItems([])
                            }, 200)}
                        onChange={(e) => {
                            setSearchText(e.target.value);
                            console.log(searchText);
                        }}></input>
                    <ul className="absolute w-64 mx-2 bg-white">
                        {searchItems.length == 0
                            ? null
                            : searchItems.map((x) => {
                                return <Link className="hover:border hover:border-black" to={`/details/${x.id}`}>
                                    <h1 className="px-2 text-lg">{x.brand}</h1>
                                    <h1 className="px-2 text-sm text-gray-500">{x.proddescription.substring(0, 32) + "..."}</h1>
                                </Link>
                            })
                        }
                    </ul>
                </div>
                <button
                    className="mx-2 bg-gray-900 text-white p-2 rounded-md h-auto"
                    onClick={() => {
                        //setButtonItem(searchItem);
                        if (searchText.trim().length > 0) {
                            useFetchProducts(`/similarproducts/${searchText.trim()}/0/15`, setProducts, []);
                            setIsSearchLoadMore(true);
                            setIsAllProducts(false);
                            setIsAllLoadedMore(false);
                        }
                        else if (!isAllProducts) {
                            console.log("isAllProducts false");
                            useFetchProducts(`/products/${page}/15`, setProducts, []);
                            setIsSearchLoadMore(false);
                            setIsAllProducts(true);
                            setIsAllLoadedMore(true);
                        }
                        setPrintSearchText(searchText);
                    }}
                >search</button>
            </div>
            {printSearchText.length > 0 ? <h1 className="text-center text-lg font-bold my-4">{`Search Result For "${searchText}"`}</h1> : null}
            {
                products?.length == 0
                    ? <ShimmerHome />
                    : <>
                        <div className="flex flex-wrap my-4 justify-center">
                            {products.length == 0 ? null : products.map((x) => <HoodieCard key={x.id} prodData={x} />)}
                        </div>
                        {
                            isAllLoadedMore
                                ? <button
                                    className="text-lg font-bold text-center my-4 cursor-pointer w-full text-red-700 hover:text-green-500"
                                    onClick={() => {
                                        console.log("setPage clicked")
                                        setPage(page + 15);
                                    }}
                                >Load More...</button>
                                : null
                                
                        }
                        {isSearchLoadMore
                            ? <button
                                className="text-lg font-bold text-center my-4 cursor-pointer w-full text-green-700 hover:text-green-500"
                                onClick={() => {
                                    console.log("setSearchPage clicked")
                                    setSearchPage(searchPage + 15);
                                }}>Load More...</button>
                            : null
                        }
                    </>
            }
        </>
    )
}

export default Body;