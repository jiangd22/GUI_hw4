import { useState, useEffect } from "react";
import { getProductById } from "../../api/productsApi";
import { ProductReview } from "../../models";
import { ReviewForm } from "./reviewForm";
import { ReviewList } from "./reviewList";

export const ProductDetails = (props) => {
    const [product, setProduct] = useState({});
    const [reviews, setReviews] = useState([]);
    
    useEffect(() => {
        getProductById(props.match.params.id).then((data) => {
        setProduct(data);
        });
    }, [props.match.params.id]);
    
    const addReview = (review) => {
        const newReview = new ProductReview(review);
        setReviews([...reviews, newReview]);
    };
    
    return (
        <div>
        <h2>{product.name}</h2>
        <p>{product.description}</p>
        <ReviewForm productId={product.id} addReview={addReview} />
        <ReviewList reviews={reviews} />
        </div>
    );
}