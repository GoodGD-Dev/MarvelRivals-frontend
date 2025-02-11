import { Provider } from 'react-redux'
import EstiloGlobal from './styles'
import store from './store'
import Home from './pages/Home'
import Header from './components/Header'

function App() {
  return (
    <Provider store={store}>
      <EstiloGlobal />
      <Header />
      <Home />
    </Provider>
  )
}

export default App
