import './item.css'
import { ShopContext } from '../../App'
import { useContext } from 'react'


const Item = ({item}) => {
    const {addToCart} = useContext(ShopContext)

    return (
        <section className="bg-white rounded-[12px] h-[550px] w-full gap-3 flex flex-col overflow-hidden shadow-md min-[470px]:flex-row min-[470px]:h-[350px] md:h-[280px] p-5 min-[900px]:max-xl:h-[250px]" >
            <div className="h-[200px] basis-1/2 w-full overflow-hidden  bg-no-repeat bg-cover min-[470px]:h-full min-[470px]:w-full md:basis-1/3" style={{backgroundImage: `url(${item.image})`}}>
            </div>
            <div className="basis-1/2 flex flex-col justify-between md:basis-2/3">
                <div className="flex flex-col w-full justify-between gap-3 text-left">
                    <div className='text-left text-lg'><h3>{item.title}</h3></div>
                    <div><p><strong>${item.price} </strong></p></div>
                </div>
                <div className="lineClamp text-sm text-grey">
                    <p>{item.description}</p>
                </div>
                <div>
                    <div></div>
                    <div className='w-full min-[900px]:max-xl:w-fit min-[900px]:max-xl:float-end'>
                        <button className='p-2 w-full px-4 rounded-[12px] border-black border-2 hover:bg-black hover:text-white' onClick={() => addToCart(item.id)}>Add to cart</button>
                    </div>
                </div>
            </div>
        </section>
    )
}

export default Item