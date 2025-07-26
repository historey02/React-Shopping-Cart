//Use API here
const URL = 'https://fakestoreapi.com/products';

export const getProducts = async () => {
    const response = await fetch(`${URL}`);
    const data = await response.json();
    //console.log(data);
    return data;
}