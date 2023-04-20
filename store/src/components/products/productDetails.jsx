import { useState, useEffect, useContext } from "react";
import { useParams } from "react-router-dom";
import { getProductById } from "../../api/productsApi";
import { ReviewForm } from "./reviewForm";
import { ReviewList } from "./reviewList";
import { Link } from "react-router-dom";
import { CartContext } from "../../context/cartContext";
import { addReview } from "../../api/productsApi";

export const ProductDetails = () => {
    const params = useParams();
    const context = useContext(CartContext);

    const [ product, setProduct ] = useState(undefined);

    useEffect(() => {
        getProductById(params.ProductId).then(x => setProduct(x));
    }, []);

    // const addReview = temp => setProduct({ ...product, ...temp });

    if(!product) {
        return <>Loading...</>;
    }

        return <>
        <div className= "container">
            <div className="row bg-body-secondary mb-4 py-2 mx-4">
                <nav aria-label="breadcrumb" className="p-2">
                    <ul className="breadcrumb mb-0">
                        <li className="breadcrumb-item"><a href="manifest.json" className="text-primary text-decoration-none">Tasty snacks</a></li>
                        <li className="breadcrumb-item text-body-tertiary" aria-current="page">Jif Peanut Butter, 40 ounce</li>
                    </ul>
                </nav>
            </div>

            <div className="row bg-light py-4 mx-4">
                <div className="col-3 p-0">
                    <img src={product.imageUrl} className="img-fluid"></img>
                </div>
                <div className="col-8 p-0">
                    <p className="display-3 mb-0 fw-lighter">{product.name}</p>
                    <p className="fs-4 badge bg-primary ">${product.price}</p>
                    <p className="fs-5 fw-light text-body-tertiary">{product.description}</p>
                </div>
            </div>
            
            <div className="row bg-light">
                <span className="text-end p-5">
                    <Link to="/cart">
                        <button type="button" className="btn btn-warning" onClick={
                            () => context.addToCart(product) 
                        }>Add to Cart
                        </button>
                    </Link>
                </span>
            </div>

            <ReviewList reviews={product.reviews} />
            <ReviewForm onReviewAdded={
                review => {
                    addReview(product.id, review).then(x => {
                        const _product = {...product};
                        _product.reviews.push(x);
                        setProduct(_product);
                    });

                }
            } />
        </div>
    </>
};