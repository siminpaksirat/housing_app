import React from 'react';
import PropTypes from 'prop-types';
import './PropertyCard.css'

import { Link } from "react-router-dom";




const PropertyCard = ({ property }) => {



const collectChildren = () => {
  return React.Children.map(property, (child, index) => {
    // You can modify or wrap each child as needed
    return <div key={index} className={`child${index}`}>{child}</div>;
  });
};

if (property){

  return (
    <>
    <Link to={`/properties/${property.id}`}>
    <div className='property'>

          <div key={property.id}>
            <p><strong>Name:</strong> {property.name}</p>
            <p><strong>Address:</strong> {property.address}</p>
          </div>

    </div>
    </Link>
    </>
  );
}

PropertyCard.propTypes = {
  property: PropTypes.shape({
    id: PropTypes.number.isRequired,
    name: PropTypes.string.isRequired,
    address: PropTypes.string.isRequired,
  }).isRequired

}};

export default PropertyCard;
