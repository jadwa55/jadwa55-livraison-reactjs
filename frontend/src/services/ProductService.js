import axios from "axios";
const APP_URL = "http://localhost:8080/api/";

axios.defaults.headers = {
  "Content-Type": "application/json",
  "auth-token": window.localStorage.getItem("token") ?? "",
};

export function getAllproduct() {
  return axios.get(APP_URL + "product");
}

export function createProduct(name,decsription,price, image ,category_id ) {
    console.log("getAllcategory");
  
    const formData = new FormData();
  
    formData.append("image", image, image.name);
  
    formData.append("name", name);
    formData.append("decsription", decsription);
    formData.append("price", price);
    formData.append("category_id", category_id);



  
    console.log("formData : ", formData.get("image"));
  
    return axios.post(APP_URL + "product/create", formData);
  }

  export function deleteproduct(id) {
    return axios.delete(APP_URL + "product/delete/" + id);
  }


  export function getproduct(id) {
    return axios.get(APP_URL + "product/" + id);
  }

  export function updateproduct(id,name,decsription,price,category_id ) {
    return axios.post(APP_URL + "product/update/" + id ,{ name: name, decsription:decsription ,price:price,category_id :category_id  });
  }