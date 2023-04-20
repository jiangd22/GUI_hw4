import axios from 'axios';

const baseEndpoint = 'https://api.johnlawrimore.com/store/products';

const baseConfig = {
    headers: {
        "Authorization": "DJiang"
    }
};

export const getProductById = (productId) => new Promise((resolve, reject) => {
    axios.get(`${baseEndpoint}/${productId}`, baseConfig)
        .then(response => resolve(response.data))
        .catch(response => {
            alert(response);
            reject(response);
        });
});

export const getProducts = () => new Promise((resolve, reject) => {
    axios.get(`${baseEndpoint}`, baseConfig)
        .then(response => resolve(response.data))
        .catch(response => {
            alert(response);
            reject(response);
        });
});

export const addReview = (productId, review) => new Promise((resolve, reject) => {
    axios.post(`${baseEndpoint}/${productId}/reviews`, review, baseConfig)
        .then(response => resolve(response.data))
        .catch(response => {
            alert(response);
            reject(response);
        });
});
