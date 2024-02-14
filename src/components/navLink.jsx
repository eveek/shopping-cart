import { Link } from "react-router-dom"
import { FontAwesomeIcon } from '@fortawesome/react-fontawesome'


const NavLink = ({curLocation, icon, path, onClick, element}) => {

    return (
        <>
            <Link to={path} className={`w-full bg-transparent hover:bg-hover h-fit p-[10px] min-[425px]:py-[5px] rounded-[12px] ${curLocation==path?'bg-hover':''}`} onClick={onClick}>
                <button className="flex flex-row gap-1">
                    <div className="min-[425px]:hidden">
                    <FontAwesomeIcon icon={icon} />
                    </div>
                    <div>{element}</div>
                </button>
            </Link>
        </>
    )
}

export default NavLink