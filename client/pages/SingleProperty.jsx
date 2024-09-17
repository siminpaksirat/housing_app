// import { useEffect, useState } from 'react';
// import { useDispatch, useSelector } from 'react-redux';

// import { fetchSingleProperty, editSingleProperty, selectSingleProperty } from '../features/property/singlePropertySlice'


// const SingleProperty = ({ property }) => {

//     const dispatch = useDispatch();
//     const myProperty = useSelector(selectSingleProperty)
//     console.log(myProperty)

//     const[currentPropertty, setCurrentProperty] = useState({})


//     useEffect(()=> {
//         async function fetchData() {
//             try {
//                 fetchSingleProperty()
//             } catch (error) {
//                 console.log(error)
//             }
//         }
//         fetchData();
//     },[dispatch])

//     return (
//         <>

//         <div>
//             <h1> This is single property</h1>
//             {myProperty.name}

//         </div>


//         </>
//     )


// }


// export default SingleProperty;
