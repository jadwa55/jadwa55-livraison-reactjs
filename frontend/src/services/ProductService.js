import axios from "axios";
const APP_URL = "http://localhost:8080/api/";

axios.defaults.headers = {
  "Content-Type": "application/json",
  "auth-token": window.localStorage.getItem("token") ?? "",
};

export function getAllproduct() {
  return axios.get(APP_URL + "repas");
}

export function createProduct(name,decsription,price, image ,category_id ) {
    console.log("getAllcategory");
  
    
    return axios.post(APP_URL + "repas/create", {
      name: name,
      description: decsription,
      price: price,
      image: image,
      category_id: category_id

    });
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