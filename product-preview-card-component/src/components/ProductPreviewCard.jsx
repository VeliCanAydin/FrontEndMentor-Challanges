import productImage from '../assets/image-product-desktop.jpg';
import cartIcon from '../assets/icon-cart.svg';
import '../styles/ProductPreviewCard.css';

export default function ProductPreviewCard({ product }) {
  return (
    <div id='card'>
      <img src={productImage} className='product-img' alt='Product Image' />
      <div className='card-content'>
        <p className='montserrat category'>{product.category}</p>
        <h1 className='fraunces'>{product.title}</h1>
        <p className='montserrat'>{product.description}</p>
        <div className='price-section'>
          <span className='fraunces discounted-price'>
            ${product.discountedPrice}
          </span>
          <span className='fraunces price'>${product.price}</span>
        </div>
        <button
          
        >
          <img src={cartIcon} />
          <span href=''>Add to Cart</span>
        </button>
      </div>
    </div>
  );
}
