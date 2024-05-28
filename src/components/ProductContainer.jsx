import React  from 'react'

const ProductContainer = ({children, className=""}) => {
  return (
    <div className={`card-container ${className}`}>
        {children}
    </div>
  )
}

export default ProductContainer