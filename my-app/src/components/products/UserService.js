import axios from 'axios'

const USERS_REST_API_URL = 'http://localhost:8080/admin';

class UserService {

    getProducts(){
        return axios.get(USERS_REST_API_URL);
    }
    addProduct(product){
        return axios.post(USERS_REST_API_URL + '/addProduct' , product);
    }

    getProduct(productId){
        return axios.get(USERS_REST_API_URL + '/productEdit/' + productId);
    }

    updateProduct(product, productId){
        return axios.post(USERS_REST_API_URL + '/productEdit/' + productId, product);
    }

    productDelete(productId){
        return axios.delete(USERS_REST_API_URL + '/delete/' + productId);
    }

    getCartProducts(){
        return axios.get("http://localhost:8080/Cart");
    }
    deleteCartProduct(productId){
        return axios.delete("http://localhost:8080/Cart/delete/"+productId)
    }
    addToCart(product){
        return axios.post("http://localhost:8080",product);
    }
}

export default new UserService();