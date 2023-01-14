import { Container } from 'react-bootstrap'
import { BrowserRouter  as Router, Route} from 'react-router-dom'
import Header from './components/Header'
import Footer from './components/Footer'
import HomeScreen from './screens/HomeScreen'
import ProductScreen from './screens/ProductScreen'
import ProductListScreen from './screens/ProductListScreen'
import ProductEditScreen from './screens/ProductEditScreen'


function App() {
  return (
    <Router>
        <Header/>
        <main className='py-3'>
            <Container>
                <Route path='/' component={HomeScreen} exact/>
                <Route path='/product/:id' component={ProductScreen}/>
                <Route path='/product/delete/:id' component={ProductScreen} />
                <Route path='/admin/productlist' component={ProductListScreen}/>
                <Route path='/admin/product/:id/edit' component={ProductEditScreen}/>
            </Container>
        </main>
        <Footer/>
    </Router>
  );
}

export default App;
