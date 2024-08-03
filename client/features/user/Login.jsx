import { useEffect, useState } from 'react';
import { useDispatch, useSelector } from 'react-redux';



function Login (){

    const dispatch = useDispatch();


    const [isModalOpen, setIsModalOpen] = useState(false);
    ////////////////////////
    const openModal = () => {
      setIsModalOpen(true);
    };
    const closeModal = () => {
      setIsModalOpen(false);
    };
    ////////////////////////


   return (
    <>
<div>
  <h1>this is login</h1>
</div>



    </>
   )



}



export default Login;
