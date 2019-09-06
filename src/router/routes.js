import Loadable from "react-loadable"
import React from "react"
function Loading(){
    return <div></div>
}
let Home=Loadable({loading:Loading,loader:()=>import("../views/home/index")})
let Login=Loadable({loading:Loading,loader:()=>import("../views/login")})
let Add=Loadable({loading:Loading,loader:()=>import("../views/home/testpaper/add")})
let Classify=Loadable({loading:Loading,loader:()=>import("../views/home/testpaper/classify")})
let Lookover=Loadable({loading:Loading,loader:()=>import("../views/home/testpaper/lookover")})
let Mangement =Loadable({loading:Loading,loader:()=>import("../views/home/testpaper/management")})
const routes = [
    {
        component:Home,
        path:"/home",
        children:[{
            component:Add,
            path:"/home/add"
        },{
            component:Classify,
            path:"/home/classify"
        },{
            component:Lookover,
            path:"/home/lookover"
        },
        {
            component:Mangement,
            path:"/home/mangement"
        },{
            path:"/home" ,
            redirect:"/home/classify"
        }]
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