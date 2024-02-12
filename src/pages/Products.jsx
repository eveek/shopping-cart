import { useState, useEffect } from "react"
import ItemList from "../components/ItemList"

const Product = () => {
    const [productList, setProductList] = useState(null)
    const [category, setCategory] = useState("men")
    const [error, setError] = useState(null)
    const [loading, setLoading] = useState(true)

    useEffect(() => {
        fetch("https://fakestoreapi.com/products", {mode: "cors"})
        .then(response => {
            if (response.status >= 400) {
                throw new Error("Server error")
            } else {
                return response.json()
            }
        })
        .then(response => {
            console.log(response)
            setProductList(response)
        })
        .catch(error => setError(error))
        .finally(() => setLoading(false))
    },[])


    if (error) return <p>Unable to load items</p>;
    if (loading) return <p>Loading...</p>;

    return (
        <div>
            <div>
                <label htmlFor="category" className="flex">
                    <h3>Category: </h3>
                    <select 
                    name="category" 
                    value={category} 
                    onChange={e => setCategory(e.target.value)}>
                        <option value="all">All</option>
                        <option value="men">Men</option>
                        <option value="women">Women</option>
                        <option value="jewelery">Jewelery</option>
                        <option value="electronics">Electronics</option>
                    </select>
                </label>
            </div>
            <div>
                <ItemList
                category={category} 
                productList={productList}
                />
            </div>
        </div>
    )
}

export default Product