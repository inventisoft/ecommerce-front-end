
import { Routes, Route, BrowserRouter} from 'react-router-dom'
import Product from "./page/Product";
import Home from "./page/Home";
import Categoria from "./page/Category";
import AppState from './state/appState';


function App() {

  return ( 

        <>
          <AppState>
            <BrowserRouter>
                <Routes>
                  <Route path="/" exact element={<Home />} />
                  <Route path="/producto" exact element={<Product />} />
                  <Route path="/categoria" exact element={<Categoria />} />
                </Routes>
            </BrowserRouter>
          </AppState>
        </>
    )
}

export default App;