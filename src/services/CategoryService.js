import axios from "axios";
// axios.defaults.baseURL = "http://localhost:8080/";
// axios.defaults.headers.common = {
//   Authorization: `bearer ${localStorage.getItem("authToken")}`,
// };

const config = {
  headers: { Authorization: `Bearer ${localStorage.getItem("authToken")}` },
};

const bodyParameters = {
  key: "value",
};

// Axios.post(
//   'http://localhost:8000/api/v1/get_token_payloads',
//   bodyParameters,
//   config
// ).then(console.log).catch(console.log);

const CATEGORY_REST_API_URL = "http://localhost:8080/api/categories";

class CategoryService {
  getAllCategories() {
    return axios.get(CATEGORY_REST_API_URL, bodyParameters, config);
  }
  createCategory(category) {
    return axios.post(CATEGORY_REST_API_URL, category);
  }
}

export default new CategoryService();
