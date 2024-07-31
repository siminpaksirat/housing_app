import { Route, Routes } from 'react-router-dom';



import Home from './pages/Home.jsx';
import AllProperties from './pages/AllProperties.jsx';
import About from './pages/About.jsx';

import NavBar from './components/Navbar.jsx';

const AppRoutes = () => {
    return (
        <>
<NavBar/>

        <Routes>
        <Route path='/' element={<Home/>} />
        <Route path='/properties' element={<AllProperties/>} />
        <Route path='/about' element={<About/>} />
        </Routes>

        </>
    )

}


export default AppRoutes
