// import Layouts from "../layouts/Layout";
import App from "../App";
import About from "../pages/About";
import Layout from "../layouts/Layouts";
import {createBrowserRouter} from "react-router-dom";

const MAIN_ROUTES = [
    {
        path: "/",
        element: <Layout />,
        children:[
            {
                path: "",
                element: <App />
            },
            {
                path:"/about",
                element: <About />
            }
        ]
    }
]
export const router = createBrowserRouter(MAIN_ROUTES);