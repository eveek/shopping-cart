import Cart from './pages/Cart'
import Home from './pages/Home'
import Product from './pages/Products'
import Header from './components/header/Header'
import { 
    Route,
    Routes,
    } from 'react-router-dom'


const Layout = () => {

    return (
        <div className='w-screen h-screen font-main'>
            <Header />
            <div className='px-[20px] pb-[30px] mt-[80px] min-[900px]:px-[40px]'>
                <Routes>
                    <Route path='/' element={<Home />} />
                    <Route path='/store' element={<Product />} />
                    <Route path='/cart' element={<Cart />} />
                </Routes>
            </div>
        </div>
    )
}

export default Layout