
const ShimmerHome = ()=>{
    return(
        <div className="flex flex-wrap justify-center">
            {
                new Array(15).fill(0).map((x,i)=>{
                    return (
                        <div className="w-64  m-6 rounded-md border p-2" key={`shimmerhome${i}`}>
                              <div className="h-60 w-full  bg-slate-300 mb-2"></div>  
                              <div className="h-10 w-full  bg-slate-300 mb-1"></div>
                              <div className="h-2 w-full  bg-slate-300 mb-1"></div>
                              <div className="h-2 w-full  bg-slate-300 mb-1"></div>
                              <div className="h-3 w-full  bg-slate-300 mb-1"></div>
                              <div className="h-15 w-full  bg-slate-300 mb-1"></div>
                        </div>
                    )
                })
            }
        </div>
    )
}

export default ShimmerHome;