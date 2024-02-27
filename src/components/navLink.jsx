import { Link } from "react-router-dom"
import { FontAwesomeIcon } from '@fortawesome/react-fontawesome'


const NavLink = ({curLocation, path, onClick, element}) => {

    return (
        <>
            <Link to={path} className={`w-full bg-transparent rounded-[12px] hover:bg-hover h-fit p-[10px] min-[680px]:px-5 min-[680px]:rounded-none ${curLocation==path?'text-blue':''}`} onClick={onClick}>
                <button className="flex flex-row gap-1">
                    <div>{element}</div>
                </button>
            </Link>
        </>
    )
}

export default NavLink