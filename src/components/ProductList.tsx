
import { Link } from 'react-router-dom'

import '../styles/ProductList.css'
import { ProductListProps } from '../Types/ProductList-Types'


export default function ProductList({ products, title}: ProductListProps) {
  return (
    <div className="product-content">
        <h2>{title}</h2>
        <div className="product-list">
            {products.map((product) => (
                <Link key={product.title} to={product.url}>
                    <div className="product-item">
                        <img src={product.img} alt={product.title} />
                        <h3>{product.title}</h3>
                    </div>
                </Link>
            ))}
        </div>
    </div>
  )
}
