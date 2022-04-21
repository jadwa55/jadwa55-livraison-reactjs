import React from 'react';
import { createCategorys } from './../../../services/CategoryService'
import { handelCatchInAxios } from "../../../services/AxiosCatchService";
import Navbar from './../../../components/layouts/navbar';
import Siderbar from './../../../components/layouts/siderbar';


class createcategory extends React.Component {
    constructor(props) {
        super(props);
        this.state = { name: '', image: '' };

        this.handleName = this.handleName.bind(this);
       
        this.handleImage = this.handleImage.bind(this);
        this.handleSubmit = this.handleSubmit.bind(this);

        
    }
    handleName(event) {
        this.setState({ name: event.target.value });
    }
  
    handleImage(event) {
        console.log('event.target.files', event.target.files);
        this.setState({ image: event.target.files[0] });
    }

    async handleSubmit(event) {
        event.preventDefault();

        console.log('A name was submitted: ' + this.state.name);
        console.log('A image was submitted: ' + this.state.image);

        try {

            let rescreatecategory = await createCategorys(this.state.name, this.state.image)

            if (rescreatecategory .status == 200) {
                console.log('Done Req  : ');
                window.location = "/dashboard/category";
            }

            console.log('rescreatecategory : ', rescreatecategory);

        } catch (error) {
            console.log('error', error);
            handelCatchInAxios(error)
        }
    }
    render() {
        return (

           

<div class="app-container app-theme-white body-tabs-shadow fixed-sidebar fixed-header">
{/* <Navbar /> */}
<div class="app-main">
{/* <Siderbar /> */}
<div class="app-main__outer">
    <div className="container mt-5">

    <div className="app-page-title">
      <div className="page-title-wrapper">
        <div className="page-title-heading">
          <div className="page-title-icon">
            <i className="pe-7s-note2 icon-gradient bg-mean-fruit">
            </i>
          </div>
          <div>
            {/* All Category */}
          </div>
        </div>
        <div className="page-title-actions">
          {/* <button type="button" data-toggle="tooltip" title="Example Tooltip" data-placement="bottom" className="btn-shadow mr-3 btn btn-dark">
            <i className="fa fa-star" />
          </button> */}
          {/* <div className="d-inline-block dropdown">
            <button type="button" className="btn-shadow  btn btn-info">
              <span className="btn-icon-wrapper pr-2 opacity-7">
              <i class="fas fa-plus-circle"></i>
              </span><a  className="text-decoration-none text-white" href='/dashboard/category/create'>Create Category</a>
            </button>
           
          </div> */}
        </div>  </div>
                   </div>

    {/* :::::::::::::::::create categorys::::::::::::::::::::: */}
    <div className='container'>
   <div className=' card text-white bg-light 'style={{maxWidth: '100rem'}} >
  <div className="card-header text-dark">Create Category</div>
  <div className="card-body">
  <div>
                <form onSubmit={this.handleSubmit} enctype="multipart/form-data">
                    <div class="mb-3">
                        <label for="exampleInputName1" class="form-label">Name</label>
                        <input type="text" value={this.state.name} onChange={this.handleName} class="form-control" id="exampleInputName1" />
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
export default createcategory;