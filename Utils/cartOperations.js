//Below function increment or decrement of cart item's quantity
export const updateQuantityItem = (item,op,setCartItem,cartItems)=>{
    console.log("inside updateQuantityItem ",item);
    let idx = -1;
    let tempCartItems = cartItems.map((x,i)=>{
        if(x.id==item.id){
            idx = i;
        }
        return x;
    }) 
    if(op=="increment"){
        tempCartItems[idx] = {...item,count:item.count+1};
        console.log(cartItems);
        setCartItem(tempCartItems);
    }
    else if(op=="decrement"){
        if(item.count==1){
            removeCart(item,setCartItem,cartItems);
        }
        else{
            tempCartItems[idx] = {...item,count:item.count-1};
            setCartItem(tempCartItems);
        }
    }
}
//adding items to cart
export const addCart = (item,setCartItem,cartItems)=>{
    let idx = -1;
    let updatedCart = cartItems.map((x,i)=>{
        if(x.id==item.id){
            idx = i;
        }
        return x;
    }) 
    if(idx==-1){
        setCartItem([...updatedCart,{...item,count:1}]);
        console.log("after update ",cartItems);
    }
    else{
        console.log("item quantity count ",item.count)
;            updatedCart[idx] = {...item,count:updatedCart[idx].count+1};
        setCartItem(updatedCart);
    }
}
//Remove item from cart
export const removeCart = (item,setCartItem,cartItems)=>{
    let filteredcart = cartItems.filter((x)=>item.id!=x.id);
    setCartItem(filteredcart);
}
//updating the cartItems from Local Storage
export const updateCartFromLS = (setCartItem)=>{
    setCartItem(JSON.parse(localStorage.getItem("hoodiehubcart")));
}