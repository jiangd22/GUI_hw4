import { useState, useEffect } from "react";
import { getProductById } from "../../api/productsApi";
import { ProductReview } from "../../models";
import { ReviewForm } from "./reviewForm";
import { ReviewList } from "./reviewList";

export const ProductDetails = () => {
    const [product, setProduct] = useState({});

    useEffect(() => {
        getProductById(1).then((product) => setProduct(product));
    }, []);

    const addReview = (review) => {
        const newReviews = [...product.reviews, review];
        setProduct({ ...product, reviews: newReviews });
    };

    if (!product.id){ return <>Loading...</>;}

    return <>
        <div className= "container">
            <div className="row bg-body-secondary mb-4 py-2 mx-4">
                <nav aria-label="breadcrumb" className="p-2">
                    <ul className="breadcrumb mb-0">
                        <li className="breadcrumb-item"><a href="" className="text-primary text-decoration-none">Tasty snacks</a></li>
                        <li className="breadcrumb-item text-muted" aria-current="page">Jif Peanut Butter, 40 ounce</li>
                    </ul>
                </nav>
            </div>

            <div className="row bg-light py-4 mx-4">
                <div className="col-3 p-0 ">
                    <img src={product.imageUrl} className="img-fluid"></img>
                </div>
                <div className="col-8 p-0">
                    <p className="display-3 mb-0 fw-lighter">{product.name}</p>
                    <p className="fs-4 badge bg-primary ">${product.price}</p>
                    <p className="fs-5">{product.description}</p>
                </div>
            </div>
            <ReviewList reviews={product.reviews} />
            <ReviewForm addedReview={review=> addReview({reviews:[...product.reviews, review]})} />
        </div>
    </>

}