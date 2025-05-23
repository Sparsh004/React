import React from "react";
import {createRoot} from "react-dom/client";
import Header from "./components/Header";
import Body from "./components/Body";
import About from "./components/About";
import ContactUs from "./components/ContactUs";
import Error from "./components/Error";
import RestaurantMenu from "./components/RestaurantMenu";
import {createBrowserRouter, Outlet} from "react-router-dom";
import {RouterProvider} from "react-router-dom" ;



const AppLayout = ()=>{
    return (
        <div className = "app">
        <Header/>
        <Outlet/>
        </div>
    )
} 

const appRouter = createBrowserRouter([
    {
        path: "/",
        element: <AppLayout/>,
        children:[
            {
                path:"/",
                element:<Body/>
            },
            {
                path:"/about",
                element:<About/>
            },
            {
                path:"/contactus",
                element:<ContactUs/>

            },
            {
                path:"/restaurant/:resId",
                element:<RestaurantMenu/>
            }

        ],
        errorElement:<Error/>
    },
 
])

const root = createRoot(document.getElementById("root"));

root.render(<RouterProvider  router = {appRouter}/>);


