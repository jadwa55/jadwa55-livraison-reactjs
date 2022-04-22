import React from 'react';
import {  getAllproduct ,deleteproduct ,getproduct ,updateproduct} from './../../../services/ProductService';
import { getAllcategory } from './../../../services/CategoryService';
import Navbar from './../../../components/layouts/navbar';
import Siderbar from './../../../components/layouts/siderbar';
// import CardDash from './../../../components/layouts/carddash';
import { handelCatchInAxios } from "../../../services/AxiosCatchService";




class Product extends React.Component {
  constructor(props) {
    super(props);
    this.state = {
      infoproduct: this.infoProduct(),
      panding: true,
      infopdate:{},
      infocategory:{},
      pandingupdate:true,
      newname: null,
      newdescription: null,
      newprice: null,
      newcategory_id: null,
    };
    this.handleName = this.handleName.bind(this);
    this.handleDescription = this.handleDescription.bind(this);
    this.handlPrice = this.handlPrice.bind(this);
    this.handleCategory_id = this.handleCategory_id.bind(this);
    this.handleSubmit = this.handleSubmit.bind(this);
  }
  async infoProduct() {
    try {
      let res = await  getAllproduct(); // get axios promise
      let data = res.data;
      console.log("ALL products :", data);
      // get all data from pomise
      this.setState({ infoproduct: data }); // Set data to state
      this.setState({ panding: false }); // Change status panding for render data
    } catch (e) {
      console.error(e);
      handelCatchInAxios(e);

    }
  }
  async deleteButton (id) {
    try {
      let res = await deleteproduct(id); // get axios promise
      let data = res.data;
      console.log("delete products :", data);
      alert("category is deleted!");
      window.location = "/dashboard/product";
    } catch (e) {
      console.error(e);
      handelCatchInAxios(e);

    }

  }

  async editButton (id) {
    try{
  
      let res = await  getproduct(id); // get axios promise
      let data = res.data;
      console.log("product :", data);
      let category = await getAllcategory();
      this.setState({ infocategory: category.data });

      this.setState({ infopdate: data });
      this.setState({pandingupdate: false });
    
    }catch (e) {
      console.error(e);
    }
   
  
  }

  handleName(event) {
    this.setState({ newname: event.target.value });
}
handleDescription(event) {
    this.setState({ newdescription: event.target.value });
}
handlPrice(event) {
    this.setState({ newprice: event.target.value });
}


handleCategory_id(event) {
    this.setState({ newcategory_id: event.target.value });
}
async handleSubmit(event) {
  event.preventDefault();

  let name = this.state.newname ?? this.state. infopdate.name;
  let decsription = this.state.newdescription ?? this.state. infopdate.decsription;
  let price = this.state.newprice ?? this.state. infopdate.price;
  let category_id = this.state.newcategory_id ?? this.state.infocategory.category_id;





  console.log("A name was updating: " + name);

  try {
      let resupdate = await updateproduct(
          this.state.infopdate.id,
          name,decsription,price,category_id
      );
      console.log(resupdate);

      if (resupdate.status == 200) {
          window.location = "/dashboard/product";
      }
  } catch (error) {
      console.log(error);
      handelCatchInAxios(error);
  }
}
 

  
 

  render() {
    // table product:::::::::::::::::::::::::::::::::::::::::
    let tableproduct = "";
    if (!this.state.panding) {
      let ThisClass = this;
      tableproduct = this.state.infoproduct.map(function (product,index) {
        let src = "http://localhost:8080/" + product.image ;
        return (
          
          <tr  key={index}>
          <td className="text-center text-muted">{product.id}</td>
          <td>
            <div className="widget-content p-0">
              <div className="widget-content-wrapper">
               
                <div className="widget-content-left flex2">
                  <div className="widget-heading">{product.name}</div>
                </div>
              </div>
            </div>
          </td>
          <td className="text-center">
            <img width={60} className="" src={src} alt />
             </td>
             <td className="text-center">
             <div className="widget-heading">{product.price}</div>
          </td>
          <td className="text-center">
             <div className="widget-heading">{product.decsription}</div>
          </td>
          <td className="text-center">
            <div className=" btn btn-warning btn-sm"onClick={() => ThisClass.editButton(product.id)} > <i class="fas fa-edit"></i> update</div>
          </td>
          <td className="text-center">
            <div className=" btn btn-danger btn-sm" onClick={() => ThisClass.deleteButton(product.id)}> <i className="pe-7s-trash btn-icon-wrapper"></i> delete</div>
          </td>
          <td className="text-center">
            <button type="button" id="PopoverCustomT-1" className="btn btn-primary btn-sm"  >Details</button>
          </td>
        </tr>
        );
      });
    }

    // update product :::::::::::::::::::::::::::::::::::::::::
    let updateForm = "";

    if (!this.state.pandingupdate) {
        updateForm = (
           
            <div className='container '>
            <div className=' card text-white bg-muted 'style={{maxWidth: '100rem'}} >
           <div className="card-header text-dark">Update Product</div>
           <div className="card-body">
           <div>
                         <form onSubmit={this.handleSubmit} enctype="multipart/form-data">
                         <div class="mb-3">
                                 <label for="exampleInputName1" class="form-label">Name</label>
                                 <input type="text" value={this.state.newname ?? this.state.infopdate.name}  onChange={this.handleName}class="form-control" id="exampleInputName1" />
                             </div>
                           
                             <div class="mb-3">
                                 <label for="exampleInputName1" class="form-label">Decsription</label>
                                 <input type="text" value={this.state.newdescription ?? this.state.infopdate.decsription}  onChange={this.handleName}class="form-control" id="exampleInputName1" />
                             </div>
                             <div class="mb-3">
                                 <label for="exampleInputName1" class="form-label">Price</label>
                                 <input type="number" value={this.state.newprice ?? this.state.infopdate.price}  onChange={this.handleName}class="form-control" id="exampleInputName1" />
                             </div>
                             <div class="mb-3">
            <label for="exampleInputPassword1" class="form-label">
              Category
            </label>
            <select
              className="form-select"
              value={this.state.newcategory_id}
              onChange={this.handleCategory_id}
            >
              <option> Please select category</option>
              {this.state. infocategory.map(function (category) {
                return <option value={category.id}>{category.name}</option>;
              })}
            </select>
          </div>
                         
                             <button type="submit" class="btn btn-primary">Submit</button>
                         </form>
                     </div>
           </div>
         </div>
         
         </div>
            
        );
    }


    return (
  <div class="app-container app-theme-white body-tabs-shadow fixed-sidebar fixed-header">
  <Navbar />
  <div class="app-main">
  <Siderbar />
  <div class="app-main__outer">
      <div className="container mt-5 " >

      <div className="app-page-title">
        <div className="page-title-wrapper">
          <div className="page-title-heading">
            <div className="page-title-icon">
              <i className="pe-7s-note2 icon-gradient bg-mean-fruit">
              </i>
            </div>
            <div>All Products
            </div>
          </div>
          <div className="page-title-actions">
            <button type="button" data-toggle="tooltip" title="Example Tooltip" data-placement="bottom" className="btn-shadow mr-3 btn btn-dark">
              <i className="fa fa-star" />
            </button>
            <div className="d-inline-block dropdown">
              <button type="button" className="btn-shadow  btn btn-info">
                <span className="btn-icon-wrapper pr-2 opacity-7">
                <i class="fas fa-plus-circle"></i>
                </span>
                <a   className="text-decoration-none text-white" href='/dashboard/product/create'>Create Product</a>
              </button>
             
            </div>
          </div>  </div>
                     </div>
      {/* <CardDash/> */}
      {/* :::::::::::::::::tables product::::::::::::::::::::: */}
       <div className="row">
  <div className="col-md-12">
    <div className="main-card mb-3 card">
      <div className="card-header">Table Products
        <div className="btn-actions-pane-right">
          <div role="group" className="btn-group-sm btn-group">
            <button className="active btn btn-focus">Create Products</button>
          </div>
        </div>
      </div>
      <div className="table-responsive">
        <table className="align-middle mb-0 table table-borderless table-striped table-hover">
          <thead>
            <tr>
              <th className="text-center">#</th>
              <th >Name</th>
              <th className="text-center">Image</th>
              <th className="text-center">Price</th>
              <th className="text-center">decsription</th>
              <th className="text-center">update</th>
              <th className="text-center">Delete</th>
              {/* <th className="text-center">info</th> */}
            </tr>
          </thead>
          <tbody>
          { tableproduct}

          
          </tbody>
        </table>
      </div>
      
    </div>
  </div>
       </div>
     {  updateForm}
     
     {/* {infocategory}
     <div className="card-deck d-flex justify-content-center mt-3 ">
    {infoproducts} */}
    </div>
 
     
     </div>
    
      </div>
      </div>
    //   </div>




    );
  }
}

export default Product;