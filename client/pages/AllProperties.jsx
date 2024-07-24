import { useEffect, useState } from 'react';
import { useDispatch, useSelector } from 'react-redux';
import { fetchAllProperties, selectAllProperties, selectPropertiesStatus, selectPropertiesError } from '../features/property/propertiesSlice.js';
import PropertyCard from '../components/PropertyCard.jsx';

function AllProperties() {
  const dispatch = useDispatch();
  const properties = useSelector(selectAllProperties);
  const status = useSelector(selectPropertiesStatus);
  const error = useSelector(selectPropertiesError);


  const[currentPropertty, setCurrentProperty] = useState({})

  useEffect(() => {
    if (status === 'idle') {
      dispatch(fetchAllProperties());
    }
  }, [status, dispatch]);

  return (
    <div className="App">
      <h1>Properties</h1>
      {status === 'loading' && <p>Loading...</p>}
      {status === 'succeeded' && (
        <ul>
          {properties.map((property) => (
            <li key={property.id}>
              {property.name} - {property.address}
            </li>
          ))}
        </ul>
      )}
      {status === 'failed' && <p>{error}</p>}
    </div>
  );
}

export default AllProperties;
