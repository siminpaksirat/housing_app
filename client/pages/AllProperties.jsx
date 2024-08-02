import { useEffect, useState } from 'react';
import { useDispatch, useSelector } from 'react-redux';
import { fetchAllProperties, selectAllProperties, addProperty, deleteProperty } from '../features/property/propertiesSlice.js';
import PropertyCard from '../components/PropertyCard.jsx';

import './AllProperties.css'

function AllProperties() {
  const dispatch = useDispatch();
  const properties = useSelector(selectAllProperties);
  // console.log('this is properties', properties)

  const[currentPropertty, setCurrentProperty] = useState({})
  const[name, setName]= useState('')
  const[address, setAddress]=useState('')
  const [isModalOpen, setIsModalOpen] = useState(false);
  ////////////////////////
  const openModal = () => {
    setIsModalOpen(true);
  };
  const closeModal = () => {
    setIsModalOpen(false);
  };
  ////////////////////////

  const Modal = ({ closeModal }) => {
    return (
      <div style={modalStyles.overlay}>
        <div style={modalStyles.modal}>
          <h2>Modal Title</h2>
          <p>This is the modal content.</p>
          <h3>Name:
          <input
          value={name}
          onChange={(e)=> setName(e.target.value)}
          placeholder='name'>
          </input>
          </h3>
          <h3>Address:
            <input
            value={address}
            onChange={(e)=> setAddress(e.target.value)}
            placeholder='address'>
          </input></h3>
          <button onClick={handleAdd}>ADD</button>
          <button onClick={closeModal}>Close Modal</button>
        </div>
      </div>
    );
  };
  const handleAdd = async ()=> {
    await dispatch(addProperty({name, address}))
    setName(''); // Clear the input fields after adding
    setAddress('');
    closeModal();

  }

  useEffect(() => {
    async function fetchData() {
      try {
        dispatch(fetchAllProperties());
      } catch (error) {
        console.error(error);
      }
    }
    fetchData();
  }, [dispatch]);








  return (
    <>




      <div className='buttons'>
        <div>
        <button onClick={openModal}>ADD</button>
        {isModalOpen && <Modal closeModal={closeModal} />}

        </div>

        <button>EDIT</button>
        <button>DELETE</button>

      </div>


      <div className='properties-wrapper'>
      <h1>Properties</h1>

<div>
{properties && properties.map((property) => (
          <PropertyCard key={property.id} property={property} />
        ))}

</div>
      </div>

      </>


  );
}



const modalStyles = {
  overlay: {
    position: 'fixed',
    top: 0,
    left: 0,
    right: 0,
    bottom: 0,
    backgroundColor: 'rgba(0, 0, 0, 0.5)',
    display: 'flex',
    justifyContent: 'center',
    alignItems: 'center',
  },
  modal: {
    backgroundColor: 'white',
    padding: '20px',
    borderRadius: '8px',
    maxWidth: '500px',
    width: '900px',
    height:'600px',
  },
};

export default AllProperties;
