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
        <div className='w-screen h-screen font-main bg-hover'>
            <Header />
            <div className='mt-[60px] h-full'>
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