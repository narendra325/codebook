import React from 'react'
import { useState,useEffect } from 'react'
import ProductCard from '../../../components/elements/ProductCard'




const FeaturedProducts = () => {
  const [products,setProducts]= useState([])

  useEffect(()=>{
    async function fetchresponse(){
      const response = await fetch("http://localhost:8000/featured_products")
      const data = await response.json()
      setProducts(data)
      
    }
    fetchresponse();
  },[])
  return (
    <div className='my-20'>
      <h1 className='text-2xl text-center dark:text-white md:text-center underline'>featured eBooks</h1>
      <div className='flex gap-5 my-5 lg:flex-row flex-wrap justify-center'>
      {products.map((product)=>(
        <ProductCard key={product.id} product={product}/>
      ))}
      </div>
    </div>
  )
}

export default FeaturedProducts
