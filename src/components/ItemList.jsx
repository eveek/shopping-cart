import PropTypes from 'prop-types';
import { useState, useEffect} from 'react';
import Item from './item/Item';


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
        <article className='flex gap-5 flex-col xl:grid xl:grid-cols-2'>
            {
                list.map(li => {
                    return (
                        <div key={li.id}>
                            <Item item={li} />
                        </div>
                    )
                })
            }
        </article>
    )
}



ItemList.protoTypes = {
    category: PropTypes.string,
    productList: PropTypes.array
}


export default ItemList