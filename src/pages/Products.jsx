import { useState, useContext } from "react"
import ItemList from "../components/ItemList"
import { ShopContext } from "../App"

const Product = () => {
    const [category, setCategory] = useState("all")
    const {productList, error, loading} = useContext(ShopContext)


    if (error) return <p>Unable to load items</p>;
    if (loading) return <p>Loading...</p>;

    return (
        <div className="overflow-scroll px-[20px] pb-[30px] mt-[80px] min-[900px]:px-[40px]">
            <div className="mb-5">
                <label htmlFor="category" className="flex items-center">
                    <h3 className="font-bold pr-2">Category: </h3>
                    <select 
                    className="shadow-md rounded-[10px] border-collapse"
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