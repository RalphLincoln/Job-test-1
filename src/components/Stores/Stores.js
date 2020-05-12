import React from 'react'
import { Link } from 'react-router-dom'
export default function Stores({ description, name, id }) {
    return (
        <article className="product">
            <div className="img-container">
                <h1> {name} </h1>
                <Link to={`/products`} className="btn btn-primary product-link">
                    details
        </Link>
            </div>
            <div className="product-footer">
                <p className="product-title">{name}</p>
                <p className="product-price"> {description} </p>
            </div>
        </article>
    )
}
