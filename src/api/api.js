import * as axios from 'axios';

const instance = axios.create({
    withCredentials: true,
    baseURL: 'https://social-network.samuraijs.com/api/1.0/',
    headers: {
        "API-KEY": ""
    }
})

export const usersAPI = {

    getUsers(currentPage = 1, pageSize = 10) {

        //baseURL сам приплюсовывается к пути

        return instance.get(`users?page=${currentPage}&count=${pageSize}`)
            .then(response => {
                return response.data;
            });
    },

    unfollowUsers(id) {
        return instance.delete(`follow/${id}`)
            .then(response => {
                return response.data;
            });
    },

    //проверить без нула вторым параметром

    followUsers(id) {
        return instance.post(`follow/${id}`, null,)
            .then(response => {
                return response.data;
            });
    }
}

export const authAPI = {
    me() {
        return instance.get(`auth/me`,)
            .then(response => {
                return response.data;
            });
    },

    login( email, password, rememberMe = false ) {
        return instance.post(`/auth/login`, { email, password, rememberMe });
    },

    logout() {
        return instance.delete(`/auth/login`);
    }
}

export const profileAPI = {
    getProfile(userId) {
        return instance.get(`profile/` + userId)
            .then(response => {
                return response.data;
            });
    },
    
    getStatus(userId) {
        return instance.get(`profile/status/${userId}`)
    },

    updateStatus (status) {
        return instance.put(`profile/status/`, { status: status })
    }
}
