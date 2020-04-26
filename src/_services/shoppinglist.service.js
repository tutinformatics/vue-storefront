import axios from 'axios';
import authHeader from 'auth-header';
import UserService from "user.service";

const API_URL = '/api/generic/v1/';

class ShoppinglistService {

    createShoppingList() {
        let userLogin = UserService.getUserLogin();
        return axios.post(API_URL + "/services/createShoppingList", {
            userLogin: userLogin,
            partyId: userLogin.userLoginId
            // Siia lisada vajadusel muid parameetreid
        }, {
            header: authHeader(),
        })
    }

    getShoppingListItems() {
        return axios.get(API_URL + "entity/ShoppingListItem?shoppingListId=10000", { headers: authHeader() });
    }


}

export default new ShoppinglistService();
