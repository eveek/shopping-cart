import { FontAwesomeIcon } from '@fortawesome/react-fontawesome'
import { faMinus, faPlus } from '@fortawesome/free-solid-svg-icons'
import { ShopContext } from '../../App'
import { useContext } from 'react'
import './cartItem.css'

const CartItem = (item) => {
    const {deleteFromCart, qtyIncreament, qtyDecreament} = useContext(ShopContext)


    return (
        <section className="bg-white h-[600px] p-5 gap-3 w-full flex flex-col shadow-md rounded-[12px] overflow-hidden min-[470px]:flex-row min-[470px]:h-[350px] md:h-[230px]" >
            <div className="h-[200px] basis-1/2 w-full overflow-hidden  bg-no-repeat bg-cover min-[470px]:h-full min-[470px]:w-full md:basis-1/3" style={{backgroundImage: `url(${item.item.image})`}}>
                {/* <img src={item.image} alt="" /> */}
            </div>
            <div className="basis-1/2 flex flex-col justify-between md:basis-2/3">
                <div className='text-left text-lg'><h3>{item.item.title}</h3></div>
                <div className='text-left'><p><strong>${item.item.price} </strong></p></div>
                <div className='flex flex-col gap-5 min-[768px]:flex-row'>
                    <div className="text-sm w-full flex border-black border-2 justify-between">
                        <span>
                            <button className='bg-black text-white font-bold p-2 px-4 h-full' onClick={() => qtyIncreament(item.item.id)}>
                                <FontAwesomeIcon icon={faPlus} />
                            </button>
                        </span>
                        {/* <input type="number" className='w-full text-center' onChange={houh} defaultValue={item.item.qty} /> */}
                        <span className='w-full text-center text-[20px] leading-[1.8]'>{item.item.qty}</span>
                        <span>
                            <button className='bg-black text-white font-bold p-2 px-4 h-full' onClick={() => qtyDecreament(item.item.id)}>
                                <FontAwesomeIcon icon={faMinus} />
                            </button>
                        </span>
                    </div>
                    <div className='w-full'>
                        <button className='p-2 w-full rounded-[12px] border-black border-2 hover:bg-black hover:text-white' onClick={() => deleteFromCart(item.item.id)}>Remove</button>
                    </div>
                </div>
            </div>
        </section>
    )
}

export default CartItem