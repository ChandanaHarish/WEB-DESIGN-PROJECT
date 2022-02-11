import axios from "axios";

const API = axios.create({ baseURL: "http://localhost:8000" });

//Set User
API.interceptors.request.use((req) => {
  if (localStorage.getItem("profile")) {
    req.headers.authorization = `Bearer ${
      JSON.parse(localStorage.getItem("profile")).token
    }`;
  }
  return req;
});

//Gets the items from API
export const fetchItems = () => API.get("/items");

//Search Items
export const fetchItemsBySearch = (searchText) => {
  console.log(searchText);
  return API.get(`/items/search?searchQuery=${searchText || "none"}`);
};

//Create an item
export const createItem = (newItem) => API.post("/items", newItem);

//Get user items
export const fetchItem = (id) => API.get(`/items/${id}`);

//Signin
export const signIn = (formData) => API.post("/users/signin", formData);

//Signup
export const signUp = (formData) => API.post("/users/signup", formData);
