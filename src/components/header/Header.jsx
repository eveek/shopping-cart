import { useState, useEffect } from "react"
import { Link, useLocation } from "react-router-dom"
import { FontAwesomeIcon } from '@fortawesome/react-fontawesome'
import NavLink from "../navLink"
import { 
    faCartShopping, 
    faBagShopping, 
    faHouse,
    faStore 
} from '@fortawesome/free-solid-svg-icons'
import './header.css'





const Header = () => {
    const location = useLocation()
    const [ menu, setMenu ] = useState(false)
    const [curLocation, setLocation] = useState(location.pathname)

    useEffect(() => {
        setLocation(location.pathname)
    }, [location.pathname])
    
    console.log(curLocation)
    const toggleMenu = () => {
        setMenu(!menu)
    }
    const closeMenu = () => {
        setTimeout(() => {
            setMenu(false)
        }, 100);
    }

    return (
        <header className="w-full h-[70px] flex items-center justify-between py-[10px] px-[20px] text-lg font-medium border-solid border-b-hover border-b-2">
            <div className="font-bold text-xl">
                <FontAwesomeIcon icon={faBagShopping} /> ShopFlex
            </div>
            <div className="flex gap-[30px] items-center">
                <nav>
                    <ul className="flex gap-[30px] items-center">
                        <div className={`flex-row h-full z-50 bg-white w-[70vw] top-0 transition-right gap-1 ease-in-out duration-300 absolute p-[30px] 
                        min-[425px]:static min-[425px]:flex min-[425px]:bg-transparent min-[425px]:w-fit min-[425px]:p-0 ${menu?"right-0 inset-x-0":"right-[-70vw] inset-x-[-70vw] min-[425px]:justify-start"}`}>
                            <div className="font-bold text-xl min-[425px]:hidden flex gap-1 items-center mb-[30px]">
                                <FontAwesomeIcon icon={faBagShopping} /> ShopFlex
                            </div>
                            <li className="mb-[10px] min-[425px]:m-0 flex">
                                <NavLink
                                    curLocation={curLocation}
                                    icon={faHouse}
                                    onClick={closeMenu}
                                    path={'/'}
                                    element={"Home"}
                                />
                            </li>
                            <li className="flex flex-row">
                                <NavLink
                                    curLocation={curLocation}
                                    icon={faStore}
                                    onClick={closeMenu}
                                    path={'/store'}
                                    element={"Store"}
                                />
                            </li>
                        </div>
                        <li>
                            <Link to="/cart" className={`hover:bg-hover p-[10px] py-[5px] rounded-[12px] ${curLocation=="/cart"?'bg-hover':''}`}>
                                <FontAwesomeIcon icon={faCartShopping} />
                            </Link>
                        </li>
                    </ul>
                </nav>
                <button id="menu" className={`z-[60] min-[425px]:hidden flex  hover:bg-hover p-[10px] rounded-[12px] ${menu?"open":""}`} onClick={toggleMenu}>
                    <div id="inMenu" >
                            <span></span>
                            <span></span>
                            <span></span>
                    </div>
                </button>
            </div>
            <div className={`absolute top-0 left-0 bottom-0 right-0 bg-hover ${!menu?"hidden":""}`} onClick={toggleMenu}></div>
        </header>
    )
}

export default Header