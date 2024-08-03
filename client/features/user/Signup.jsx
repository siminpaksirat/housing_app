import { useEffect, useState } from 'react';
import { useDispatch, useSelector } from 'react-redux';



function Signup (){

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
      <h1>this is signup</h1>
    </div>



        </>
       )




}



export default Signup;
