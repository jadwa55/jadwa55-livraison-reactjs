import React from 'react';
import {  createProduct } from './../../../services/ProductService'
import { handelCatchInAxios } from "../../../services/AxiosCatchService";
import Navbar from './../../../components/layouts/navbar';
import Siderbar from './../../../components/layouts/siderbar';
import { getAllcategory } from './../../../services/CategoryService';


class CreateProduct extends React.Component {
    constructor(props) {
        super(props);
        this.state = { name: '',decsription :'',price:'', image: '',category_id :'',infocategory: this.infocategory(),pandingcategory:true };

        this.handleName = this.handleName.bind(this);
        this.handleDescription = this.handleDescription.bind(this);
        this.handlPrice = this.handlPrice.bind(this);
        this.handleImage = this.handleImage.bind(this);
        this.handleCategory_id = this.handleCategory_id.bind(this);
        this.handleSubmit = this.handleSubmit.bind(this);

        
    }
    handleName(event) {
        this.setState({ name: event.target.value });
    }
    handleDescription(event) {
        this.setState({ decsription: event.target.value });
    }
    handlPrice(event) {
        this.setState({ price: event.target.value });
    }
  
    handleImage(event) {
        console.log('event.target.files', event.target.files);
        this.setState({ image: event.target.files[0] });
    }
    handleCategory_id(event) {
        this.setState({ category_id: event.target.value });
    }

    async handleSubmit(event) {
        event.preventDefault();

        console.log('A name was submitted: ' + this.state.name);
        console.log('A image was submitted: ' + this.state.image);

        try {

            let rescreate = await createProduct (this.state.name,this.state.decsription,this.state.price, this.state.image,this.state.category_id)

            if (rescreate .status == 200) {
                console.log('Done Req  : ');
                window.location = "/dashboard/product";
            }

            console.log('rescreateproduct : ', rescreate);

        } catch (error) {
            console.log('error', error);
            handelCatchInAxios(error)
        }
    }
    async infocategory() {
        try {
          let res = await  getAllcategory(); // get axios promise
          let data = res.data;
          console.log("ALL category :", data);
          // get all data from pomise
          this.setState({ infocategory: data }); // Set data to state
          this.setState({ pandingcategory: false }); // Change status panding for render data
        } catch (e) {
          console.error(e);
          handelCatchInAxios(e);
    
        }
      }



    render() {

   let selectcategory = '';
   if (!this.state.pandingcategory) {
    selectcategory = (
        <select class="form-control form-select" value={this.state.category_id} onChange={this.handleCategory_id}  >
        <option> Please select category</option>
        {this.state.infocategory.map(function (category) {
          return <option value={category.id} >{category.name}</option>;
        })}
      </select>
    )  
   }

        return (

           

<div class="app-container app-theme-white body-tabs-shadow fixed-sidebar fixed-header">
<Navbar />
<div class="app-main">
<Siderbar />
<div class="app-main__outer">
    <div className="container mt-5">

    <div className="app-page-title">
      <div className="page-title-wrapper">
        <div className="page-title-heading">
          <div className="page-title-icon">
            <i className="pe-7s-note2 icon-gradient bg-mean-fruit">
            </i>
          </div>
          <div>All Product
            {/* <div className="page-title-subheading">Lorem ipsum dolor sit amet consectetur adipisicing elit.
            </div> */}
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
              </span><a  className="text-decoration-none text-white" href='/dashboard/product/create'>Create product</a>
            </button>
           
          </div>
        </div>  </div>
                   </div>
    {/* <Cards/> */}
    {/* :::::::::::::::::create categorys::::::::::::::::::::: */}
    <div className='container'>
   <div className=' card text-white bg-light 'style={{maxWidth: '100rem'}} >
  <div className="card-header text-dark">Create Product</div>
  <div className="card-body">
  <div>
                <form onSubmit={this.handleSubmit} enctype="multipart/form-data">
                    <div class="mb-3">
                        <label for="exampleInputName1" class="form-label">Name</label>
                        <input type="text" value={this.state.name} onChange={this.handleName} class="form-control" id="exampleInputName1" />
                    </div>
                    <div class="mb-3">
                        <label for="exampleInputName1" class="form-label">Decsription</label>
                        <input type="text" value={this.state.decsription} onChange={this.handleDescription} class="form-control" id="exampleInputName1" />
                    </div>
                    <div class="mb-3">
                        <label for="exampleInputName1" class="form-label">Price</label>
                        <input type="number" value={this.state.price} onChange={this.handlPrice} class="form-control" id="exampleInputName1" />
                    </div>
                    <div class="mb-3">
                           {selectcategory}
                    </div>
                    <div class="mb-3">
                        <label for="exampleInputImage1" class="form-label">Image</label>
                        <input type="file" onChange={this.handleImage} class="form-control" id="exampleInputImage1" multiple="multiple" />
                    </div>

                    <button type="submit" class="btn btn-primary">Submit</button>
                </form>
            </div>
  </div>
</div>

</div>

   
    </div>
    </div>
    </div>

</div>

        );
    }
}
export default CreateProduct;