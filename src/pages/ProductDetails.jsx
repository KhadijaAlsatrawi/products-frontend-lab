import { useEffect, useState } from 'react'
import { Link, useNavigate, useParams } from 'react-router'
import { getProductById, deleteProduct } from "../services/productService"

function ProductDetails() {
    const [product, setProduct] = useState(null)
    const [error, setError] = useState(null)
    const { productId } = useParams()
    const navigate = useNavigate()

    async function loadproduct() {
        try {
            const response = await getProductById(productId)
            setProduct(response)
        } catch (err) {
            setError(err.response.data.message)
        }
    }

    async function handleDelete() {
        deleteProduct(productId)
        navigate('/products')
    }

    useEffect(() => {
        loadproduct()
    }, [])
    return (
        <div>
            <h1>Product Details</h1>
            {product ?
                <>
                    <p>Title: {product.title}</p>
                    <p>Description: {product.description}</p>
                    <p>Category: {product.category}</p>
                    <p>Price: {product.price}</p>
                    <p>Quantity: {product.quantity}</p>
                    <Link to={`/products/${product._id}/edit`}>Edit Product</Link>
                    <button onClick={handleDelete}>Delete Product</button>
                </>
                : null}
            <p>{error}</p>
        </div>
    )
}

export default ProductDetails