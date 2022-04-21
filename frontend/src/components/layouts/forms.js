import React from "react";


class Forms extends React.Component {
  render() {
    return (
 
        <div className='container'>
        <div className=' card text-white bg-success 'style={{maxWidth: '100rem'}} >
       <div className="card-header">Create Category</div>
       <div className="card-body">
       <div>
                     <form >
                         <div class="mb-3">
                             <label for="exampleInputName1" class="form-label">Name</label>
                             <input type="text"  class="form-control" id="exampleInputName1" />
                         </div>
                         <div class="mb-3">
                             <label for="exampleInputImage1" class="form-label">Image</label>
                             <input type="file"  class="form-control" id="exampleInputImage1" multiple="multiple" />
                         </div>
     
                         <button type="submit" class="btn btn-primary">Submit</button>
                     </form>
                 </div>
       </div>
     </div>
     
     </div>



    );
  }
}

export default Forms;
