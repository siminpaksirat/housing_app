import { Route, Routes } from 'react-router-dom';
import { useSelector, useDispatch } from 'react-redux';



import Home from './pages/Home.jsx';
import AllProperties from './pages/AllProperties.jsx';

import About from './pages/About.jsx';

import Profile from './features/user/Profile.jsx';

import AllUsers from './pages/AllUsers.jsx';

import NavBar from './components/Navbar.jsx';

const AppRoutes = () => {
    return (
        <>
<NavBar/>

        <Routes>
        <Route path='/users' element={<AllUsers/>} />

        <Route path='/profile/:id' element={<Profile/>} />
        <Route path='/' element={<Home/>} />
        <Route path='/properties' element={<AllProperties/>} />

        <Route path='/about' element={<About/>} />
        </Routes>

        </>
    )

}


export default AppRoutes
