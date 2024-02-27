import { ShopContext } from "../App"
import { useContext, useEffect, useState, useMemo} from "react"
import { Link } from "react-router-dom"
import CartItem from "../components/cartItem/cartItem"

const Cart = () => {
    const {cartItems} = useContext(ShopContext)

    const totalPrice = useMemo(() => {
        return cartItems.reduce(
            (total, item) => total + item.price * item.qty, 0
        )
    }, [cartItems])
    
    
    if (cartItems.length == 0) return (
        <>
            <h2 className="text-xl mb-4 mt-[150px]">Cart is empty</h2>
            <Link to='/store'>
                <button className="bg-white shadow-md rounded-[12px] p-[10px] font-bold">
                        Shop now!
                </button>
            </Link>

        </>
    )
    

    return (
        <article className="min-[900px]:flex gap-5 mt-[80px] justify-between px-[20px] pb-[30px] min-[900px]:px-[40px]">
            <section className="flex flex-col gap-5 min-[900px]:w-full min-[900px]:basis-2/3">
                {
                    cartItems.map(item => {
                        return (
                            <div key={item.id}>
                                <CartItem item={item} />
                            </div>
                        )
                    })
                }
            </section>
            <section className="mt-5 flex text-grey flex-col gap-2 min-[900px]:w-[28vw] min-[900px]:fixed min-[900px]:right-[40px] min-[900px]:top-[80px]">
                <div className="flex justify-between">
                    <p>Total price:</p>
                    <p>${parseFloat(totalPrice).toFixed(2)}</p>
                </div>
                <div className="flex justify-between">
                    <p>Delivery fee:</p>
                    <p>$0</p>
                </div>
                <div className="flex justify-between ">
                    <p>Shipping fee:</p>
                    <p>$0</p>
                </div>
                <div className="flex justify-between text-black">
                    <p><strong>Total fee:</strong></p>
                    <p><strong>${parseFloat(totalPrice).toFixed(2)}</strong></p>
                </div>
                <div>
                    <button className="p-2 w-full rounded-[12px] border-blue text-white border-2 bg-blue mt-5">Checkout</button>
                </div>
            </section>
        </article>
    )
}

export default Cart