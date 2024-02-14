import './item.css'


const Item = ({item}) => {

    return (
        <section className="bg-hover h-[500px] w-full flex flex-col border-2 min-[470px]:flex-row min-[470px]:h-[300px] md:h-[230px]" >
            <div className="h-[200px] basis-1/2 w-full overflow-hidden  bg-no-repeat bg-cover min-[470px]:h-full min-[470px]:w-full md:basis-1/3" style={{backgroundImage: `url(${item.image})`}}>
                {/* <img src={item.image} alt="" /> */}
            </div>
            <div className="basis-1/2 p-3 flex flex-col justify-between md:basis-2/3">
                <div className="flex w-full justify-between gap-3 min-[470px]:flex-col min-[470px]:text-left">
                    <div className='text-left font-bold'><h3>{item.title}</h3></div>
                    <div><p>${item.price} </p></div>
                </div>
                <div className="lineClamp text-sm">
                    <p>{item.description}</p>
                </div>
                <div>
                    <div></div>
                    <div className='w-full'>
                        <button className='p-2 w-full border-black border-2'>Add to cart</button>
                    </div>
                </div>
            </div>
        </section>
    )
}

export default Item