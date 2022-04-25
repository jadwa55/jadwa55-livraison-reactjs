import {
  BrowserRouter as Router,
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
  import { checkLoginBeforeRenderComponent } from './middlewares/AuthMiddleware'
  import { checkIfNotLoginBeforeRenderComponent } from './middlewares/AuthMiddleware'

  
  
  function App() {
    return (
      <div className="root">
        <link href="https://cdn.jsdelivr.net/npm/bootstrap@5.1.3/dist/css/bootstrap.min.css" rel="stylesheet" integrity="sha384-1BmE4kWBq78iYhFldvKuhfTAU6auU8tT94WrHftjDbrCEXSU1oBoqyl2QvZ6jIW3" crossorigin="anonymous"></link>
        
        <Routes>
        <Route path="/" element={(<HomePage />)} />
        <Route path="/login" element={checkIfNotLoginBeforeRenderComponent(<Login />)} />
        <Route path="/register" element={checkIfNotLoginBeforeRenderComponent(<Register />)} />
        <Route path="/dashboard/category" element={checkLoginBeforeRenderComponent(<Category/>)} />
        <Route path="/dashboard/category/create" element={checkLoginBeforeRenderComponent(<Createcategory/>)} />
        <Route path="/dashboard/product" element={checkLoginBeforeRenderComponent(<Product/>)} />
        <Route path="/dashboard/product/create" element={checkLoginBeforeRenderComponent(<CreateProduct/>)} />
  
          <Route path="/dashboard" element={(<Dashboard/>)} />
  
        </Routes>
        <script src="https://cdn.jsdelivr.net/npm/bootstrap@5.1.3/dist/js/bootstrap.bundle.min.js" integrity="sha384-ka7Sk0Gln4gmtz2MlQnikT1wXgYsOg+OMhuP+IlRH9sENBO0LRn5q+8nbTov4+1p" crossorigin="anonymous"></script>
      </div>
    );
  }
  
  export default App;
  