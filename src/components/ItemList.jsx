import PropTypes from 'prop-types';
import { useState, useEffect} from 'react';


const ItemList = ({category, productList}) => {
    const [list, setList] = useState(null)

    const setCart = () => {
        setList(() => {
            if (category == "all") {
                return productList
            } else if (category == "men") {
                return productList.filter(li => li.category == "men's clothing")
            } else if (category == "women") {
                return productList.filter(li => li.category == "women's clothing")
            } else if (category == "jewelery") {
                return productList.filter(li => li.category == "jewelery")
            } else {
                return productList.filter(li => li.category == "electronics")
            }
        })
    }

    useEffect(() => {
        setCart()
    }, [category])

    if (!list) return <p>Loading...</p>


    return (
        <div>
            {
                list.map(( li, index) => {
                    return <h2 key={index}>{li.title}</h2>
                })
            }
        </div>
    )
}



ItemList.protoTypes = {
    category: PropTypes.string,
    productList: PropTypes.array
}


export default ItemList