import './App.css';
import { Link, Outlet, Route, RouterProvider, createBrowserRouter, createRoutesFromElements } from 'react-router-dom';
import Home from './containers/Home/Home';
import UseReducer from './containers/UseReducer/UseReducer';
import UseRef from './containers/UseRef/UseRef';
import UseLayoutEffect from './containers/UseLayoutEffect/UseLayoutEffect';
import UseImperativeHandle from './containers/UseImperativeHandle/UseImperativeHandle';
import UseContext from './containers/UseContext/UseContext';
import UseMemo from './containers/UseMemo/UseMemo';

function App() {
  const router = createBrowserRouter(
    createRoutesFromElements(
      <Route path='/' element={<RouterRoot />} >
        <Route index element={<Home />} />
        <Route path='/useReducer' element={<UseReducer />} />
        <Route path='/useRef' element={<UseRef />} />
        <Route path='/useLayoutEffect' element={<UseLayoutEffect />} />
        <Route path='/useImperativeHandle' element={<UseImperativeHandle />} />
        <Route path='/useContext' element={<UseContext />} />
        <Route path='/useMemo' element={<UseMemo />} />
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
        <Link to={'/useReducer'} >useReducer()</Link>
        <Link to={'/useRef'} >useRef()</Link>
        <Link to={'/useLayoutEffect'} >useLayoutEffect()</Link>
        <Link to={'/useImperativeHandle'} >useImperativeHandle()</Link>
        <Link to={'/useContext'} >useContext()</Link>
        <Link to={'/useMemo'} >useMemo()</Link>
      </nav>
    </header>

    <div>
      <Outlet />
    </div>
  </>
}