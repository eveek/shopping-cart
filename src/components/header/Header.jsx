import { useState, useEffect, useContext } from "react"
import { Link, useLocation } from "react-router-dom"
import { FontAwesomeIcon } from '@fortawesome/react-fontawesome'
import NavLink from "../navLink"
import { 
    faCartShopping, 
    faBagShopping, 
} from '@fortawesome/free-solid-svg-icons'
import './header.css'
import { ShopContext } from "../../App"





const Header = () => {
    const {cartItems} = useContext(ShopContext)
    const location = useLocation()
    const [ menu, setMenu ] = useState(false)
    const [curLocation, setLocation] = useState(location.pathname)

    useEffect(() => {
        setLocation(location.pathname)
    }, [location.pathname])
    
    // console.log(curLocation)
    const toggleMenu = () => {
        setMenu(!menu)
    }
    const closeMenu = () => {
        setTimeout(() => {
            setMenu(false)
        }, 100);
    }

    return (
        <header className={`fixed z-[100] top-0 w-full h-[70px] bg-hover flex items-center justify-between py-[10px] px-[20px] min-[900px]:px-[40px] text-lg font-medium border-solid`}>
            <div className="font-bold text-[25px]">
                <FontAwesomeIcon icon={faBagShopping}  className="text-blue"/> ShopFlex
            </div>
            <div className="flex gap-[30px] items-center text-grey">
                <nav>
                    <ul className="flex gap-[30px] items-center">
                        <div className={`flex-row bottom-[-100vh] z-50 w-[70vw] top-0 transition-right gap-5 ease-in-out duration-300 absolute p-[30px] bg-white
                        min-[680px]:static min-[680px]:flex min-[680px]:bg-white min-[680px]:w-fit min-[680px]:p-0 ${menu?"right-0 inset-x-0":"right-[-70vw] inset-x-[-70vw] min-[680px]:justify-start"}`}>
                            <div className="font-bold text-[25px] text-black min-[680px]:hidden flex gap-1 items-center mb-[30px]">
                                <FontAwesomeIcon icon={faBagShopping} className="text-blue"/> ShopFlex
                            </div>
                            <li className="mb-[10px] min-[680px]:m-0 flex">
                                <NavLink
                                    curLocation={curLocation}
                                    onClick={closeMenu}
                                    path={'/'}
                                    element={"Home"}
                                />
                            </li>
                            <li className="flex flex-row mb-[10px] min-[680px]:m-0">
                                <NavLink
                                    curLocation={curLocation}
                                    onClick={closeMenu}
                                    path={'/store'}
                                    element={"Store"}
                                />
                            </li>
                            <button className="text-white bg-blue p-[10px] px-5 w-full rounded-[12px] min-[680px]:hidden">Sign in</button>
                        </div>
                    </ul>
                </nav>

            </div>
            <div className="flex flex-row items-center">
                <nav>
                    <ul className="flex items-center justify-between gap-[30px]">
                        <li className="relative text-grey">
                            <Link to="/cart" className={`hover:bg-hover p-3 rounded-[12px] ${curLocation=="/cart"?'text-blue':''}`}>
                                <FontAwesomeIcon icon={faCartShopping} />
                            </Link>
                            <span className={`text-[.625rem] font-bold absolute top-[-10px] right-[-10px] bg-blue text-white p-[4px] px-[7px] w-fit leading-[1.1] rounded-[50%] border-hover border-2 ${!cartItems.length?"hidden":""}`}>{cartItems.length}</span>
                        </li>
                        <li className="hidden min-[680px]:block">
                            <button className="text-white bg-blue p-[10px] px-5 rounded-[12px]">Sign in</button>
                        </li>
                    </ul>
                </nav>
                <button id="menu" className={`z-[60] ml-3 min-[680px]:hidden flex  hover:bg-hover p-3 rounded-[12px] ${menu?"open":""}`} onClick={toggleMenu}>
                    <div id="inMenu" >
                            <span></span>
                            <span></span>
                            <span></span>
                    </div>
                </button>
            </div>
            <div className={`absolute top-0 left-0 bottom-[-100vh] right-0 min-[680px]:hidden bg-hover ${!menu?"hidden":""}`} onClick={toggleMenu}></div>
        </header>
    )
}

export default Header