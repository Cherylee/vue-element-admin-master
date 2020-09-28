import {
    login,
    logout
} from "@/api/login.js"
import {
    getToken,
    setToken,
    setExpiresIn,
    removeToken
} from '@/utils/auth'
const user = {
    state: {
        token: getToken(),
        expires_in: '',
        name: '',
        avatar: ''
    },
    mutations: {
        SET_TOKEN: (state, token) => {
            state.token = token
        },
        SET_EXPIRES_IN: (state, time) => {
            state.expires_in = time
        },
        SET_NAME: (state, name) => {
            state.name = name
        },
        SET_AVATAR: (state, avatar) => {
            state.avatar = avatar
        }
    },
    actions: {
        Login({
            commit
        }, userInfo) {
            const username = userInfo.userName
            const password = userInfo.password
            return new Promise((resolve, reject) => {
                login(username, password).then(res => {
                    console.log(res)
                    setToken(res.data.access_token)
                    commit('SET_TOKEN', res.data.access_token)
                    setExpiresIn(res.data.expires_in)
                    commit('SET_EXPIRES_IN', res.data.expires_in)
                    resolve()
                }).catch(error => {
                    reject(error)
                })
            })
        },
        // 获取用户信息
        GetInfo({
            commit,
            state
        }) {
            return new Promise((resolve, reject) => {
                getInfo(state.token).then(res => {
                    const user = res.user
                    const avatar = user.avatar == "" ? require("@/assets/profile.jpg") : process.env.VUE_APP_BASE_API + user.avatar;
                    commit('SET_NAME', user.userName)
                    commit('SET_AVATAR', avatar)
                    resolve(res)
                }).catch(error => {
                    reject(error)
                })
            })
        },
        // 退出系统
        LogOut({
            commit,
            state
        }) {
            return new Promise((resolve, reject) => {
                logout(state.token).then(() => {
                    commit('SET_TOKEN', '')
                    removeToken()
                    resolve()
                }).catch(error => {
                    reject(error)
                })
            })
        },
    }
}
export default user