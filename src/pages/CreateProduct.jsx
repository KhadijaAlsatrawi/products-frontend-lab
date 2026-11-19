import { useState } from "react"
import { useNavigate } from "react-router"
import { createProduct } from "../services/productService"


function CreateProduct() {
    const navigate = useNavigate()

    const [formData, setFormData] = useState({
        title: '',
        description: '',
        category: '',
        price: 0,
        quantity: 0
    })

    function handleChange(event) {
        setFormData({ ...formData, [event.target.name]: event.target.value })
    }

    async function handleSubmit(event) {
        event.preventDefault()
        const response = await createProduct(formData)
        navigate(`/products/${response._id}`)
    }

    return (
        <div>
            <h1>Create Product</h1>
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
                <button>Create Product</button>
            </form>
        </div>
    )
}

export default CreateProduct