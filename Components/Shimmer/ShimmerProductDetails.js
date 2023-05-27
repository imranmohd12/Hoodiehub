import ShimmerHome from "./ShimmerHome"


const ShimmerProductDetails = ()=>{
    return (
        <div>
            <div className="flex justify-center flex-wrap mt-44 mb-6">
                <div className="h-[450px] w-[350px] bg-slate-300 mr-2"></div>
                <div className="flex flex-col sm:justify-center h-[450px] w-[350px] ml-2 mt-4 sm:mt-0">
                    <div className="h-[50px] w-3/5 bg-slate-300 ml-4"></div>
                    <div className="h-[25px] w-9/10 bg-slate-300 my-4"></div>
                    <div className="h-[30px] w-8/10 bg-slate-300 my-4"></div>
                    <div className="h-[30px] w-8/10 bg-slate-300 my-4"></div>
                    <div className="h-[30px] w-8/10 bg-slate-300 my-4"></div>
                    <div className="h-[15px] w-6/10 bg-slate-300 mt-4"></div>
                    <div className="h-[15px] w-6/10 bg-slate-300 my-1"></div>
                    <div className="h-[15px] w-6/10 bg-slate-300 my-1"></div>
                    <div className="h-[15px] w-6/10 bg-slate-300 my-1"></div>
                </div>
            </div>
            <ShimmerHome/>
        </div>
    )
}

export default ShimmerProductDetails;