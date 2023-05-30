
import { Routes, Route, BrowserRouter} from 'react-router-dom'
import Home from "./page/Home";
import CategoryIndex from './page/category/CategoryIndex';
import AppState from './state/appState';
import ProductIndex from './page/product/ProductIndex';


function App() {

  return ( 

        <>
          <AppState>
            <BrowserRouter>
                <Routes>
                  <Route path="/" exact element={<Home />} />
                  <Route path="/producto" exact element={<ProductIndex />} />
                  <Route path="/categoria" exact element={<CategoryIndex />} />
                </Routes>
            </BrowserRouter>
          </AppState>
        </>
    )
}

export default App;