import { ShopContext } from "../App"
import { useContext, useEffect, useState, useMemo} from "react"
import CartItem from "../components/cartItem/cartItem"

const Cart = () => {
    const {cartItems} = useContext(ShopContext)

    const totalPrice = useMemo(() => {
        return cartItems.reduce(
            (total, item) => total + item.price * item.qty, 0
        )
    }, [cartItems])
    
    
    if (cartItems.length == 0) return <h1>Cart is empty</h1>
    

    return (
        <article >
            <section className="flex flex-col gap-5">
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
            <section className="mt-5">
                <div className="flex justify-between">
                    <p>Total price:</p>
                    <p><strong>${parseFloat(totalPrice).toFixed(2)}</strong></p>
                </div>
                <div>
                    <button className="p-2 w-full border-black border-2 hover:bg-black hover:text-white mt-5">Checkout</button>
                </div>
            </section>
        </article>
    )
}

export default Cart