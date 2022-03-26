import './index.css'

const HomeItem = props => {

  const {productDetails} = props
  const {productId,productName, imageUrl, price} = productDetails
  
  return (
    <>
      <li className="project-item-container">
        <img
          className="project-item-image"
          src={imageUrl}
          alt={`project-item${productId}`}
          width="150" height="150"
        />
        <div align="center" className="project-item-details-container">
          <h1 className="project-item-title">{productName}</h1>
          <p className="project-item-description">price : {price}/kg</p>
         
        </div>
        <button className="btn btn-primary" onClick={() => this.addToCart(productId,price)}>AddToCart</button>
      </li>
    </>
  )
}

export default HomeItem