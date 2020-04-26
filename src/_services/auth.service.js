import axios from 'axios';

const API_URL = '/api/auth/v1/';

class AuthService {
    login(user) {
        return axios
            .post(API_URL + 'login', {
                userLoginId: user.username,
                currentPassword: user.password
            })
            .then(response => {
                if (response.data.token) {
                    localStorage.setItem('user', JSON.stringify(response.data));
                }

                return response.data;
            });
    }

    logout() {
        localStorage.removeItem('user');
        localStorage.removeItem("userlogin");
    }

    register(user) {
        return axios.post(API_URL + 'signup', {
            username: user.username,
            email: user.email,
            password: user.password
        });
    }
}

export default new AuthService();
