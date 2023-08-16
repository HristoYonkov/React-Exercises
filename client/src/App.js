import './App.css';
import { Link, Outlet, Route, RouterProvider, createBrowserRouter, createRoutesFromElements } from 'react-router-dom';
import Home from './containers/Home/Home';
import UseReducer from './containers/UseReducer/UseReducer';

function App() {
  const router = createBrowserRouter(
    createRoutesFromElements(
      <Route path='/' element={<Root />} >
        <Route index element={<Home />} />
        <Route path='/useReducer' element={<UseReducer />} />
      </Route>
    )
  );

  return (
    <div className="App">
      <RouterProvider router={router}/>
    </div>
  );
}

export default App;

const Root = () => {

  return <>
    <header>
      <nav>
        <Link to={'/'} >Home</Link>
        <Link to={'/useReducer'} >UseReducer</Link>
      </nav>
    </header>

    <div>
      <Outlet />
    </div>
  </>
}