import router from './router'
import {
    getToken
} from '@/utils/auth'


const whiteList = ['/login']

router.beforeEach((to, from, next) => {
    console.log(getToken())
    if (getToken()) {
        /* has token*/
        if (to.path === '/login') {
            next({
                path: '/'
            })
        } else {
            // next({ ...to, replace: true })
            next()
        }
    } else {
        // 没有token
        if (whiteList.indexOf(to.path) !== -1) {
            // 在免登录白名单，直接进入
            next()
        } else {
            next(`/login`) // 否则全部重定向到登录页
        }
    }
})
