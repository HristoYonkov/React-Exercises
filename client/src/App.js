import './App.css';
import { Link, Outlet, Route, RouterProvider, createBrowserRouter, createRoutesFromElements } from 'react-router-dom';
import Home from './containers/Home/Home';
import UseReducer from './containers/UseReducer/UseReducer';
import UseRef from './containers/UseRef/UseRef';
import UseLayoutEffect from './containers/UseLayoutEffect/UseLayoutEffect';

function App() {
  const router = createBrowserRouter(
    createRoutesFromElements(
      <Route path='/' element={<RouterRoot />} >
        <Route index element={<Home />} />
        <Route path='/useReducer' element={<UseReducer />} />
        <Route path='/useRef' element={<UseRef />} />
        <Route path='/useLayoutEffect' element={<UseLayoutEffect />} />
      </Route>
    )
  );

  return (
    <div className="App">
      <div className='main'>
        <RouterProvider router={router} />
      </div>
    </div>
  );
}

export default App;

const RouterRoot = () => {

  return <>
    <header>
      <nav>
        <Link to={'/'} >Home</Link>
        <Link to={'/useReducer'} >UseReducer</Link>
        <Link to={'/useRef'} >UseRef</Link>
        <Link to={'/useLayoutEffect'} >UseLayoutEffect</Link>
      </nav>
    </header>

    <div>
      <Outlet />
    </div>
  </>
}