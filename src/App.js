import logo from './logo.svg';
import './App.css';
import {
  Route,
  Router,
  Routes,
} from 'react-router-dom';
import Login from './Components/Admin/Login';
import Register from './Components/Admin/Register';
import AdminPenal from './Pages/AdminPenal';
import Dashboard from './Components/Admin/Dashboard';
import Order from './Components/Admin/Order';
import Product from './Components/Admin/Product';
import Invoice from './Components/Admin/Invoice';
import Setting from './Components/Admin/Setting';
import Main from './Pages/Main';
import ProductHome from './Pages/Product';
import UserRole from './Components/Admin/UserRole';
import CategoryList from './Components/Admin/CategoryList';
import AttributeList from './Components/Admin/AttributeList';
import AttributeValueList from './Components/Admin/AttributeValueList';
import MetalTouch from './Components/Admin/MetalTouch';
import ProductDetail from './Pages/ProductDetail';

function App() {
  return (
    <>
      <Routes>
        <Route path='/login' element={<Login />} />
        <Route path='/register' element={<Register />} />
        <Route path='/admin' element={<AdminPenal />}>
          <Route path='/admin/dashboard' element={<Dashboard />} />
          <Route path='/admin/order' element={<Order />} />
          <Route path='/admin/product' element={<Product />} />
          <Route path='/admin/invoice' element={<Invoice />} />
          <Route path='/admin/categorylist' element={<CategoryList />} />
          <Route path='/admin/metaltouch' element={<MetalTouch />} />
          <Route path='/admin/attributelist' element={<AttributeList />} />
          <Route path='/admin/attributevaluelist' element={<AttributeValueList />} />
          <Route path='/admin/user-role' element={<UserRole />} />
          <Route path='/admin/setting' element={<Setting />} />
        </Route>
        <Route path='/' element={<Main />} />
        <Route path='/product' element={<ProductHome />} />
        <Route path='/productdetail' element={<ProductDetail />} />
      </Routes>
    </>
  );
}

export default App;
