import {createBrowserRouter } from "react-router-dom";
import App from "./App";
import Login from "./components/Login";

const routes = createBrowserRouter([
    {
        path: "/",
        element: <App />,
        children: [
            {
                path: "/",
                element: <App />
            },
            

        ]
    },
    {
        path: "/login",
        element: <Login />
    }
])

export default routes