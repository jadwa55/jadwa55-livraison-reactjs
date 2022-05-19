import axios from "axios";
const APP_URL = "http://localhost:8080/api/";

// axios.defaults.headers = {
//   "Content-Type": "application/json",
//   "auth-token": window.localStorage.getItem("token") ?? "",
// };

export function getAllcategory() {
  return axios.get(APP_URL + "Category");
}
export function getcategory(id) {
  return axios.get(APP_URL + "Category/"+id);
}

export function createCategorys(type) {
  console.log("getAllcategory");

  // formData.append("image", image, image.name);

  // formData.append("name", name);

  // console.log("formData : ", formData.get("image"));

  return axios.post(APP_URL+"category/create", {type:type});
}

export function updateCategory(id, type) {
  console.log('category updating');
  return axios.post(APP_URL + "category/update/" + id, { type: type });
}

export function deleteCategory(id) {
  console.log('category deleted');
  return axios.delete(APP_URL + "category/delete/" + id);
}


export function getcategorydetails(id) {
  console.log("getcategorydetails");
  return axios.get(APP_URL + "category/products/"+id);
}