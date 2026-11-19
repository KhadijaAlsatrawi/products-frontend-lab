import { useEffect, useState } from "react"
import { Link } from "react-router"

import { getAllProducts } from "../services/productService"
function ProductsList() {
    const [products, setProducts] = useState([])
    const [error, setError] = useState(null)

    async function loadProducts() {
        try {
            const response = await getAllProducts()
            setProducts(response)
        }catch(err){
            setError(err.response.data.message)
        }
    }
    useEffect(() => {
        loadProducts()
    }, [])

    return (
        <div>
            <h1>Products List</h1>
            {products ? products.map(oneProduct =>
                <div key={oneProduct._id}>
                    <p>Title: {oneProduct.title}</p>
                    <p>Description: {oneProduct.description}</p>
                    <p>Category: {oneProduct.category}</p>
                    <p>Price: {oneProduct.price}</p>
                    <p>Quantity: {oneProduct.quantity}</p>
                    <Link to={`/products/${oneProduct._id}`}>See Details</Link>
                </div>
            ) : null}
            <p>{error}</p>
        </div>
    )
}

export default ProductsList