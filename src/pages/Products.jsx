import { useState, useContext } from "react"
import ItemList from "../components/ItemList"
import { ShopContext } from "../App"

const Product = () => {
    const [category, setCategory] = useState("all")
    const {productList, error, loading} = useContext(ShopContext)


    if (error) return <p>Unable to load items</p>;
    if (loading) return <p>Loading...</p>;

    return (
        <div>
            <div className="mb-5">
                <label htmlFor="category" className="flex items-center">
                    <h3 className="font-bold pr-2">Category: </h3>
                    <select 
                    className="border-2 border-collapse"
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