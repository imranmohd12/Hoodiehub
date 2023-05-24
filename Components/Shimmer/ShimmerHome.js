
const ShimmerHome = ()=>{
    return(
        <div className="flex flex-wrap justify-center">
            {
                new Array(12).fill(0).map((x,i)=>{
                    return <div className="w-1/5 h-72 bg-slate-300 m-4 rounded-md"></div>
                })
            }
        </div>
    )
}

export default ShimmerHome;