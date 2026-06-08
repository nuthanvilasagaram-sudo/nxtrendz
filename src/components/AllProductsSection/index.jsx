import {useEffect, useState} from 'react'
import Cookies from 'js-cookie'

import ProductCard from '../ProductCard'
import './index.css'

const AllProductsSection = () => {
  const [productsList, setProductsList] = useState([])
  useEffect( () => {
    const getProducts = async () => {
        const apiUrl = 'https://apis.ccbp.in/products'
        const jwt_token = Cookies.get("jwt_token")   
        const options = {
            headers: {
                Authorization: `Bearer ${jwt_token} `,
            },
            method: 'GET',
        }
        const response = await fetch(apiUrl, options)  
        if(response.ok === true){
            const fetchedData = await response.json()
            const formattedData = fetchedData.products.map(product => ({
                title: product.title,
                brand: product.brand,
                price: product.price,
                id: product.id,
                imageUrl: product.image_url,
                rating: product.rating,
            }))
            setProductsList(formattedData)
        }
    }
    getProducts()
  },[])

  const renderProductsList = () => {
    return (
      <div>
        <h1 className="products-list-heading">All Products</h1>
        <ul className="products-list">
          {productsList.map(product => (
            <ProductCard productData={product} key={product.id} />
          ))}
        </ul>
      </div>
    )
  }

  return <>{renderProductsList()}</>
}

export default AllProductsSection