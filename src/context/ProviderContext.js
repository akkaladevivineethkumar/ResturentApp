// AppProvider.js
import {useState} from 'react'
import AppContext from './AppContext'

const AppProvider = ({children}) => {
  const [cart, setCart] = useState([])

  const AddCart = newProduct => {
    setCart(prev => [...prev, {...newProduct}])
  }
  const RemoveFromCart = productId => {
    setCart(prev => prev.filter(item => item.dish_id !== productId))
  }

  return (
    <AppContext.Provider
      value={{
        AddCart,
        RemoveFromCart,
        cart,
      }}
    >
      {children}
    </AppContext.Provider>
  )
}

export default AppProvider
