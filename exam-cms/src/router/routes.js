import Loadable from "react-loadable"
import React from "react"
function Loading(){
    return <div></div>
}
let Home=Loadable({loading:Loading,loader:()=>import("../views/home/index")})
let Login=Loadable({loading:Loading,loader:()=>import("../views/login")})
const routes = [
    {
        component:Home,
        path:"/home"
    },
    {
        component:Login,
        path:"/login"
       
    },
    {   
        path:"/" ,
        redirect:"/login"
    }
]
export {
    routes
}