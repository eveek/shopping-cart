import { Link } from "react-router-dom"

const Home = () => {

    return (
        <div 
        style={{backgroundImage: `url('shoppingCart.jpg')`}}
        className="h-full bg-cover bg-no-repeat bg-center p-[20px] pt-[50px] flex flex-col items-center"
        >
            <h1 className="text-[35px] max-w-[20ch] text-black drop-shadow-md font-bold capitalize min-[600px]:text-[50px]">Let's give you that <span className="text-blue">amazing</span> shopping experience</h1>
            <Link to='/store'>
                <button className="p-2 px-3 shadow-md rounded-[12px] mt-[30px] text-white font-bold bg-blue hover:scale-95">Shop now</button>
            </Link>
        </div>
    )
}

export default Home