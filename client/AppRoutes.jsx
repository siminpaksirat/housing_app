import { Route, Routes } from 'react-router-dom';

import Home from './pages/Home.jsx';
import Properties from './pages/Properties.jsx';
import AllProperties from './pages/AllProperties.jsx';



const AppRoutes = () => {
    return (
        <>
        <div>
        <Routes>
        <Route path='/' element={<Home/>} />
        <Route path='/properties' element={<AllProperties/>} />
        </Routes>
        </div>
        </>
    )

}


export default AppRoutes
