import Main from './components/Main'
import AppProvider from './context/CartContext'
import './App.css'

const App = () => (
  <>
    <AppProvider>
      <Main />
    </AppProvider>
  </>
)

export default App
