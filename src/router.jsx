import Cart from './pages/Cart'
import Home from './pages/Home'
import Product from './pages/Products'
import Header from './components/header/Header'
import { 
    createBrowserRouter, 
    RouterProvider, 
    Outlet,
    } from 'react-router-dom'


    const Router = () => {
        const Layout = () => {
        return (
            <div className='w-screen h-screen font-main'>
                <Header />
                <Outlet />
            </div>
        )
        }

    const router = createBrowserRouter([
        {
        path: "/",
        element: <Layout />,
        children: [
            {
            path: "/",
            element: <Home />,
            },
            {
            path: "products",
            element: <Product />,
            },
            {
            path: "cart",
            element: <Cart />,
            }
        ]
        }
    ])

    return <RouterProvider router={router} />
    }

    export default Router