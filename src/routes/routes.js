import Product from "../components/Product/Product"
import Home from "../pages/Home/Home"
import NewUser from "../pages/NewUser/NewUser"
import Products from '../pages/Products/Products'
import UsersList from "../pages/Users/UsersList"

const routes = [
    {path:'/' , element: <Home />},
    {path:'/users' , element: <UsersList />},
    {path:'/newUser' , element: <NewUser />},
    {path:'/products' , element: <Products />},
    {path: '/product/:productID', element: <Product />},

]

export default routes