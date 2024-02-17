import { ShopContext } from "../App"
import { useContext, useEffect, useState } from "react"
import CartItem from "../components/cartItem/cartItem"

const Cart = () => {
    const {cartItems} = useContext(ShopContext)


    if (cartItems.length == 0) return <h1>Cart is empty</h1>

    return (
        <article className="flex flex-col gap-5">
            {
                cartItems.map(item => {
                    return (
                        <div key={item.id}>
                            <CartItem item={item} />
                        </div>
                    )
                })
            }
        </article>
    )
}

export default Cart