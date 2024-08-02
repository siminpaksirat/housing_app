import React from 'react';
import { useEffect, useState } from 'react';
import { useDispatch, useSelector } from 'react-redux';
import PropTypes from 'prop-types';
import './PropertyCard.css'

import { Link } from "react-router-dom";


import { fetchAllProperties, selectAllProperties, addProperty, deleteProperty } from '../features/property/propertiesSlice.js';




const PropertyCard = ({ property }) => {


  const dispatch = useDispatch();
  const properties = useSelector(selectAllProperties);

  useEffect(() => {
    dispatch(fetchAllProperties());
}, [dispatch]);


  return (
    <>
    <div className='property-card' key={property.id} property={property}>
    {property.name}
    {property.address}

    </div>


          {/* {properties && properties.map((property) => (
            <div className='property-card' key={property.id}>
               {property.name} - {property.address}
            </div>
          ))} */}


    </>
  );


};

PropertyCard.propTypes = {
  properties: PropTypes.arrayOf(
    PropTypes.shape({
      id: PropTypes.number.isRequired,
      name: PropTypes.string.isRequired,
      address: PropTypes.string.isRequired,
    })
  )
};

export default PropertyCard;







{/* <Link to={`/properties/${property.id}`}>
<div className='property'>

      <div key={property.id}>
        <p><strong>Name:</strong> {property.name}</p>
        <p><strong>Address:</strong> {property.address}</p>
      </div>

</div>
</Link> */}



{/* <ul>
{properties.map((property) => (
  <li key={property.id}>
    {property.name} - {property.address}
  </li>
))}
</ul> */}
