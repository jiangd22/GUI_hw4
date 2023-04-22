import { useState, useEffect, useContext } from "react";
import { Link } from "react-router-dom";
import { getProducts } from "../../api/productsApi";
import { CartContext } from "../../context/cartContext";

export const ProductList = () => {
    const context = useContext(CartContext);
    const [ products, setProducts ] = useState(undefined);

    useEffect(() => {
        getProducts().then(response => setProducts(response));
    }, []);

    if(!products) {
        return <>
            Loading...
        </>;
    }

    return <>
        <div className="container">
            <div className="row bg-light mb-2 mx-4">
                <nav aria-label="breadcrumb" className="p-2">
                    <ol className="breadcrumb mb-0">
                        <li className="breadcrumb-item">Tasty snacks</li>
                    </ol>
                </nav>
            </div>            

            <div className="row justify-content-center p-0">
            {
                products.map((product, index) => {
                    return (<div key={index} className="col-3 d-inline-block">
                        <div className="card h-100 w-200">
                            <div className="row w-200 m-0">
                                <div className="p-0 mx-auto text-center carousel-item active">
                                    <img src={product.imageUrl} className="col-10 img-fluid"></img>
                                    <div className="carousel-caption text-end">
                                        <span className="badge bg-success">${product.price}</span>
                                    </div>
                                </div>
                            </div>
                            <p className="text-center h-100"><span className="fw-bold fs-5">{product.name}</span></p>
                            <p className="text-center"><Link to={"/products/" + product.id}><button type="button" className="btn btn-info w-100">Product Details</button></Link></p>
                            <p className="text-center">
                                <Link to="/cart">
                                    <button type="button" className="btn btn-warning text-center w-100" onClick={
                                        () => context.addToCart(product) 
                                    }>Add to Cart
                                    </button>
                                </Link>
                            </p>

                            

                        </div>
                    </div>)}
                )
            }
            </div>

        </div>
    </>;
}
