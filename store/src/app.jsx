import { CartContextProvider } from "./context/cartContext";
import { BrowserRouter, Link, Route, Routes } from "react-router-dom";
import { Routes as AuthorizedRoutes } from "./routes";

export const App = () => {
    return(
        <>
        <CartContextProvider>
            <BrowserRouter>
                <Link to="/" className="text-decoration-none">
                    <div className="container">
                        <header className="row text-white fs-5 bg-dark p-2 mx-4 mb-0 fw-light">Store</header>
                    </div>
                </Link>
                <Routes>
                    <Route>
                    {
                        AuthorizedRoutes().map((route, index) => <Route key={index} {...route} />)
                    }
                    </Route>
                </Routes>
            </BrowserRouter>
        </CartContextProvider>
        </> 
    );
}