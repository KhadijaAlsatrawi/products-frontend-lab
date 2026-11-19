import { useEffect, useState } from "react"
import { useParams, useNavigate } from 'react-router'
import { getProductById, updateProduct } from "../services/productService"

function EditProduct() {
    const navigate = useNavigate()
    const { productId } = useParams()

    const [formData, setFormData] = useState({
        title: '',
        description: '',
        category: '',
        price: 0,
        quantity: 0
    })

    async function loadProduct() {
        const response = await getProductById(productId)
        setFormData(response)
    }

    useEffect(() => {
        loadProduct()
    }, [])

    function handleChange(event) {
        setFormData({ ...formData, [event.target.name]: event.target.value })
    }

    async function handleSubmit(event) {
        event.preventDefault()
        const response = await updateProduct(productId, formData)
        navigate(`/products/${response._id}`)
    }

    return (
        <div>
            <h1>Edit Details</h1>
            <form onSubmit={handleSubmit}>
                <label htmlFor="title">Title: </label>
                <input
                    type="text"
                    name="title"
                    id="title"
                    value={formData.title}
                    onChange={handleChange} />
                <br />
                <label htmlFor="description">Description: </label>
                <input
                    type="text"
                    name="description"
                    id="description"
                    value={formData.description}
                    onChange={handleChange} />
                <br />
                <label htmlFor="category">Category: </label>
                <input
                    type="text"
                    name="category"
                    id="category"
                    value={formData.category}
                    onChange={handleChange} />
                <br />
                <label htmlFor="price">Price: </label>
                <input
                    type="number"
                    name="price"
                    id="price"
                    value={formData.price}
                    onChange={handleChange} />
                <br />
                <label htmlFor="quantity">Quantity: </label>
                <input
                    type="number"
                    name="quantity"
                    id="quantity"
                    value={formData.quantity}
                    onChange={handleChange} />
                <br />
                <button>Update Product</button>
            </form>
        </div>
    )
}

export default EditProduct