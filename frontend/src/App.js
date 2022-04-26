import {
  BrowserRouter ,
    Routes,
    Route
  } from "react-router-dom";
  import 'bootstrap/dist/css/bootstrap.min.css';
  import HomePage from './components/pages/HomePage';
//   import Login from './components/controllers/Auth/Login';
//   import Register from './components/controllers/Auth/Register';
import Category from './components/controllers/category/Category';
import Createcategory from './components/controllers/category/CreateCategory';
import Product from './components/controllers/product/Product';
import CreateProduct from './components/controllers/product/CreateProduct';

import Login from './components/controllers/Auth/Login';
import Register from './components/controllers/Auth/Register';

  import Dashboard from './components/dashboard/dashboard';
  // import { checkLoginBeforeRenderComponent } from './middlewares/AuthMiddleware'
  // import { checkIfNotLoginBeforeRenderComponent } from './middlewares/AuthMiddleware'

  
  
  function App() {
    return (
      
        <BrowserRouter>
        <Routes>
        <Route path="/" element={<HomePage />} />
        <Route path="/login" element={(<Login />)} />
        <Route path="/register" element={(<Register />)} />
        <Route path="/dashboard/category" element={(<Category/>)} />
        <Route path="/dashboard/category/create" element={(<Createcategory/>)} />
        <Route path="/dashboard/product" element={(<Product/>)} />
        <Route path="/dashboard/product/create" element={(<CreateProduct/>)} />
  
          <Route path="/dashboard" element={(<Dashboard/>)} />
  
        </Routes>
        </BrowserRouter>
      
    );
  }
  
  export default App;
  