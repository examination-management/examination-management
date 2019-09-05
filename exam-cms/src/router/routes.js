import Loadable from "react-loadable"
import React from "react"
function Loading(){
    return <div></div>
}
let Home=Loadable({loading:Loading,loader:()=>import("../views/home/index")})
let Login=Loadable({loading:Loading,loader:()=>import("../views/login")})
// let Testquestion=Loadable({loading:Loading,loader:()=>import("../views/home/Testquestion")})
// let Trytoadd=Loadable({loading:Loading,loader:()=>import("../views/home/Trytoadd")})
// let Trytosee=Loadable({loading:Loading,loader:()=>import("../views/home/Trytosee")})
const routes = [
    {
        component:Home,
        // children:[
        //     {
        //         component:Testquestion,
        //         path:"/home/Testquestion"
               
        //     },{
        //         component:Trytoadd,
        //         path:"/home/Trytoadd"
               
        //     },{
        //         component:Trytosee,
        //         path:"/home/Trytosee"
               
        //     },
        //     {   
        //         path:"/home" ,
        //         redirect:"/home/Testquestion"
        //     }
        // ],
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