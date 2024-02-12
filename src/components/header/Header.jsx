import { useState } from "react"
import { Link } from "react-router-dom"
import { FontAwesomeIcon } from '@fortawesome/react-fontawesome'
import { 
    faCartShopping, 
    faBagShopping, 
    faBars, 
    faXmark 
} from '@fortawesome/free-solid-svg-icons'
import './header.css'





const Header = () => {
        const [ menu, setMenu ] = useState(false)

    const openMenu = () => {
        setMenu(!menu)
    }

    return (
        <header className="w-full flex justify-between py-[20px] px-[20px] text-lg font-medium border-solid border-b-grey border-b-2">
            <div className="font-bold text-xl">
                <FontAwesomeIcon icon={faBagShopping} /> ShopFlex
            </div>
            <div className="flex gap-[30px] items-center">
                <nav>
                    <ul className="flex gap-[30px]">
                        <div className={`flex-row h-full z-50 bg-pink-400 w-[50vw] top-0 transition-right ease-in-out duration-300 gap-[40px] absolute pt-[70px] min-[425px]:static min-[425px]:flex min-[425px]:bg-transparent min-[425px]:w-fit min-[425px]:p-0 ${menu?"right-0":"right-[-50vw]"}`}>
                            <li className="mb-[20px] min-[425px]:m-0">
                                <Link to="/" >Home</Link>
                            </li>
                            <li>
                                <Link to="/products" >Store</Link>
                            </li>
                        </div>
                        <li>
                            <Link to="/cart" >
                                <FontAwesomeIcon icon={faCartShopping} />
                            </Link>
                        </li>
                    </ul>
                </nav>
                <div className="z-[60] min-[425px]:hidden">
                    <button id="menu" className={menu?"open":""} onClick={() => openMenu()}>
                        <span></span>
                        <span></span>
                        <span></span>
                        {/* <FontAwesomeIcon icon={menu?faXmark:faBars} /> */}
                    </button>
                </div>
            </div>
        </header>
    )
}

export default Header