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
let Adduser=Loadable({loading:Loading,loader:()=>import("../views/home/user/adduser")})
let Usershow=Loadable({loading:Loading,loader:()=>import("../views/home/user/usershow")})
let Addexam=Loadable({loading:Loading,loader:()=>import("../views/home/exam/addexam")})
let Examlist=Loadable({loading:Loading,loader:()=>import("../views/home/exam/examlist")})
let Class=Loadable({loading:Loading,loader:()=>import("../views/home/class/class")})
let Classrome=Loadable({loading:Loading,loader:()=>import("../views/home/class/classrome")})
let Student=Loadable({loading:Loading,loader:()=>import("../views/home/class/student")})
let Stayclass=Loadable({loading:Loading,loader:()=>import("../views/home/yueparper/stayclass")})
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
        },{
            component:Adduser,
            path:"/home/adduser"
        },{
            component:Usershow,
            path:"/home/usershow"
        },{
            component:Addexam,
            path:"/home/addexam"
        },{
            component:Class,
            path:"/home/class"
        },{
            component:Classrome,
            path:"/home/classrome"
        },{
            component:Student,
            path:"/home/student"
        },{
            component:Examlist,
            path:"/home/examlist"
        },{
            component:Stayclass,
            path:"/home/stayclass"
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