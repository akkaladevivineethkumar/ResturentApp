import {useState, useContext} from 'react'
import AppContext from '../../context/AppContext'

import './index.css'

const CategoryItems = props => {
  const {AddCart, cart, RemoveFromCart} = useContext(AppContext)
  const {gotActiveCategory} = props
  const buttonStyle = {
    backgroundColor: 'green',
    color: '#fff',
    border: 'none',
    padding: '8px 12px',
    cursor: 'pointer',
  }

  const spanStyle = {
    margin: '0 10px',
    fontSize: '18px',
  }

  const [quantity, setQuantity] = useState(0)

  const handleAddToCart = () => {
    AddCart(gotActiveCategory)
  }

  const removeAddToCart = () => {
    RemoveFromCart(gotActiveCategory.dish_id)
  }

  const incrementQuantity = () => {
    setQuantity(quantity + 1)
    handleAddToCart()
  }

  const decrementQuantity = () => {
    if (quantity > 0) {
      setQuantity(quantity - 1)
      removeAddToCart()
    }
  }

  return (
    <div className="dishContainer">
      <div>
        <div className="cart-container">
          <div>
            <p className="dishNames">{gotActiveCategory.dish_name}</p>
            <p className="dishCurrPrice">
              {gotActiveCategory.dish_currency} {gotActiveCategory.dish_price}
            </p>
            <p className="dishDescription">
              {gotActiveCategory.dish_description}
            </p>
          </div>
          <p className="calories1">{`${gotActiveCategory.dish_calories} calories`}</p>
        </div>
        {gotActiveCategory.dish_Availability ? (
          <div className="quantity-container">
            <button
              type="button"
              style={buttonStyle}
              onClick={decrementQuantity}
            >
              -
            </button>
            <p style={spanStyle}>{quantity}</p>
            <button
              type="button"
              style={buttonStyle}
              onClick={incrementQuantity}
            >
              +
            </button>
          </div>
        ) : (
          <p className="Notavailable">Not Available</p>
        )}
        {gotActiveCategory.addonCat.length > 1 ? (
          <p className="customization1">Customizations Available</p>
        ) : (
          ' '
        )}
      </div>
      <img
        className="catImg"
        src={gotActiveCategory.dish_image}
        alt={gotActiveCategory?.dish_image_id}
      />
    </div>
  )
}
export default CategoryItems
