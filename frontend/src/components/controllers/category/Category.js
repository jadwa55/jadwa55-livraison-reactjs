import React from 'react';
import {  getAllcategory,updateCategory,getcategory,deleteCategory,getcategorydetails } from './../../../services/CategoryService';
import Navbar from './../../../components/layouts/navbar';
import Siderbar from './../../../components/layouts/siderbar';
import { handelCatchInAxios } from "../../../services/AxiosCatchService";


class Category extends React.Component {
  constructor(props) {
    super(props);
    this.state = {
      infocategory: this.infoCategory(),
      panding: true,
      infopdate: {},
      infouproducts: {},
      pandingcategory: true,
      pandingproducts: true,
      pandingupdate: true,
      newType: null,
    };
    this.handleType = this.handleType.bind(this);
    this.handleSubmit = this.handleSubmit.bind(this);
  }
  async infoCategory() {
    try {
      let res = await getAllcategory(); // get axios promise
      let data = res.data;
      console.log("ALL Categorys :", data.category);
      // get all data from pomise
      this.setState({  infocategory: data.category }); // Set data to state
      this.setState({ panding: false }); // Change status panding for render data
    } catch (e) {
      console.error(e);
    }
  }
async editButton (id) {
  try{

    let res = await  getcategory(id); // get axios promise
    let data = res.data;
    console.log("Categorys :", data);
    this.setState({ infopdate: data });
    this.setState({pandingupdate: false });
  
  }catch (e) {
    console.error(e);
  }
 

}
async deleteButton (id) {
  try {
    let deletecategory = await deleteCategory(id);
    console.log("deleteButton:", deletecategory);
    alert("category is deleted!");
    window.location = "/dashboard/category";
} catch (e) {
    console.error(e);
    handelCatchInAxios(e);
}

}
async detailsButton (id) {
  try {
    let detail = await getcategorydetails(id);
    let data = detail.data; 
    console.log("info category products:", data);  
    this.setState({ infoproducts: data });
    this.setState({pandingproducts: false });
    this.setState({pandingcategory: false });

   
} catch (e) {
    console.error(e);
    handelCatchInAxios(e);
}

}

handleType(event) {
  this.setState({ newType: event.target.value });
}

async handleSubmit(event) {
  event.preventDefault();

  let type = this.state.newType ?? this.state. infopdate.type;


  console.log("A type was updating: " + type);

  try {
      let resupdate = await updateCategory(
          this.state.infopdate.id,
          type,

      );
      console.log(resupdate);

      if (resupdate.status == 200) {
          window.location = "/dashboard/category";
      }
  } catch (error) {
      console.log(error);
      handelCatchInAxios(error);
  }
}


  render() {
    // table category:::::::::::::::::::::::::::::::::::::::::
    let tablecategory = "";
    if (!this.state.panding) {
      let ThisClass = this;
      const arr = this.state.infocategory
      console.log(arr);
      tablecategory = arr.map(function (category,index) {
        return (
          
          <tr  key={index}>
          <td className="text-center text-muted">{category.id}</td>
          <td>
            <div className="widget-content p-0">
              <div className="widget-content-wrapper">
               
                <div className="widget-content-left flex2">
                  <div className="widget-heading">{category.type}</div>
                </div>
              </div>
            </div>
          </td>
          <td className="text-center">
            <div className=" btn btn-warning btn-sm" onClick={() => ThisClass.editButton(category.id)}> <i class="fas fa-edit"></i> update</div>
          </td>
          <td className="text-center">
            <div className=" btn btn-danger btn-sm" onClick={() => ThisClass.deleteButton(category.id)}> <i className="pe-7s-trash btn-icon-wrapper"></i> delete</div>
          </td>
          {/* <td className="text-center">
            <button type="button" id="PopoverCustomT-1" className="btn btn-primary btn-sm" onClick={() => ThisClass.detailsButton(category.id)}>Details</button>
          </td> */}
        </tr>
        );
      });
    }

    // update category:::::::::::::::::::::::::::::::::::::::::
    let updateForm = "";

    if (!this.state.pandingupdate) {
        updateForm = (
          <div className='container '>
            <div className=' card text-white bg-muted 'style={{maxWidth: '100rem'}} >
            <div className="card-header text-dark">Update Category</div>
            <div className="card-body">
            <div>
              <form onSubmit={this.handleSubmit} enctype="multipart/form-data">
                <div class="mb-3">
                    <label for="exampleInputType1" class="form-label">Type</label>
                    <input type="text" value={this.state.newType ?? this.state.infopdate.type}  onChange={this.handleType}class="form-control" id="exampleInputType1" />
                </div>
                <button type="submit" class="btn btn-primary">Submit</button>
              </form>
            </div>
            </div>
            </div>
          </div>
            
        );
    }
//  info category :::::::::::::::::::::::::::::::::::::::::::::
    let infocategory = "";
    if (!this.state.pandingcategory) {

      infocategory = (

            <div>
                <h5 className='text-white p-2 bg-info' style={{maxWidth: '17rem'}}> Category Type : {this.state.infoproducts.type}</h5>

            </div>
        )
    }
    //  info products :::::::::::::::::::::::::::::::::::::::::::::

    let infoproducts = "";
    if (!this.state.pandingproducts) {
      infoproducts = this.state.infoproducts.products.map(function (product) {

            return  ( 
              <div className="card " style={{maxWidth: '20rem'}} >
              {/* <img className="card-img-top" src={src} height={'200px'} alt="Card image cap" /> */}
            <div className="card-body">
            <h5 className="card-title">{product.name}</h5>
           <p className="card-text">{product.decsription} </p>
           <p className="card-text">{product.price} $</p>

            </div>
    </div>

          )
            
        })

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
            <div>All Category
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
                <a   className="text-decoration-none text-white" href='/dashboard/category/create'>Create Category</a>
              </button>
             
            </div>
          </div>  </div>
                     </div>
      {/* :::::::::::::::::tables categorys::::::::::::::::::::: */}
  <div className="row">
  <div className="col-md-12">
    <div className="main-card mb-3 card">
      <div className="card-header">
        <div className="btn-actions-pane-right">        
        </div>
      </div>
    <div className="table-responsive">
    <table className="align-middle mb-0 table table-borderless table-striped table-hover">
      <thead>
        <tr>
          <th className="text-center">#</th>
          <th >Name</th>
          <th className="text-center">update</th>
          <th className="text-center">Delete</th>
        </tr>
      </thead>
      <tbody>
        { tablecategory}        
      </tbody>
    </table>
    </div>    
    </div>
  </div>
  </div>
     {updateForm}
     
     {infocategory}
     <div className="card-deck d-flex justify-content-center mt-3 ">
    {infoproducts}
    </div>
 
     
     </div>
    
      </div>
      </div>
      </div>




    );
  }
}

export default Category;