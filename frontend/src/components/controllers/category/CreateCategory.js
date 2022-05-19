import React from 'react';
import { createCategorys } from './../../../services/CategoryService'
import { handelCatchInAxios } from "../../../services/AxiosCatchService";
import Navbar from './../../../components/layouts/navbar';
import Siderbar from './../../../components/layouts/siderbar';


class createcategory extends React.Component {
    constructor(props) {
        super(props);
        this.state = { type: '' };

        this.handleType = this.handleType.bind(this);
        this.handleSubmit = this.handleSubmit.bind(this);

        
    }
    handleType(event) {
        this.state.type= event.target.value
        console.log(this.state.type)
    }

     async handleSubmit () {



        console.log('A type was submitted: ' + this.state.type);
        try {

            let rescreatecategory = await createCategorys(this.state.type)

            if (rescreatecategory .status == 200) {
                console.log('Done Req  : ');
                window.location = "/dashboard/category";
            }

            console.log('rescreatecategory : ', rescreatecategory);

        } catch (error) {
            console.log('error', error);
            handelCatchInAxios(error)
        }

        console.log(this.state.type);
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
          </div> 
        </div>
       </div>

    {/* :::::::::::::::::create categorys::::::::::::::::::::: */}
    <div className='container'>
      <div className=' card text-white bg-light 'style={{maxWidth: '100rem'}} >
        <div className="card-header text-dark">Create Category</div>
          <div className="card-body">
            <div>
               
                    <div class="mb-3">
                        <label for="exampleInputType1" class="form-label">Type</label>
                        <input type="text"  onChange={this.handleType} class="form-control" id="exampleInputType1" />
                    </div>
                    <button onClick={(e)=>{
                      this.handleSubmit()
                    }} type="submit" class="btn btn-primary">Submit</button>

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