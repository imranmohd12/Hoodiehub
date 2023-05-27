import NavBar from "./NavBar"
import Title from "./Title"

const Header = ()=>{
    return (
        <div className="flex justify-center sm:justify-between flex-wrap fixed w-full top-0 left-0 right-0 bg-white z-10">
            <Title />
            <NavBar/>
        </div>
    )
}

export default Header;