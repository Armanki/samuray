import * as axios from "axios";

const instance = axios.create({
    withCredentials: true,
    baseURL: `https://social-network.samuraijs.com/api/1.0/`,
    headers: {
        "API-KEY": "18a0e82d-982d-41a3-a0d2-68fe50f7a1c3"
    }

})

export const usersAPI = {
    getUsers(currentPage = 1, pageSize = 10)  {
        return instance.get(`users?page=${currentPage}&count=${pageSize}`)
            .then(response => {
                return response.data
            });
    },
    follow(userId) {
       return  instance.post(`follow/${userId}`)
    },
    unfollow(userId) {
      return   instance.delete(`follow/${userId}`)
    },
    getProfile(userId) {
      return   instance.get(`profile/` + userId)
    }
}
export const authAPI = {
    me() {
      return   instance.get(`auth/me`)
    }
}
