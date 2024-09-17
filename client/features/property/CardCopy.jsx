import * as React from 'react';
import Button from '@mui/material/Button';
import TextField from '@mui/material/TextField';
import Dialog from '@mui/material/Dialog';
import DialogActions from '@mui/material/DialogActions';
import DialogContent from '@mui/material/DialogContent';
import DialogTitle from '@mui/material/DialogTitle';
import Tabs from '@mui/material/Tabs';
import Tab from '@mui/material/Tab';
import Box from '@mui/material/Box';
import Paper from '@mui/material/Paper';
import Typography from '@mui/material/Typography';
import List from '@mui/material/List';
import ListItem from '@mui/material/ListItem';
import ListItemText from '@mui/material/ListItemText';
import ListSubheader from '@mui/material/ListSubheader';
import { useEffect, useState } from 'react';
import { useDispatch, useSelector } from 'react-redux';
import PropTypes from 'prop-types';
import './PropertyCard.css'

import { Link } from "react-router-dom";


import { fetchAllProperties, selectAllProperties, addProperty, deleteProperty } from './propertiesSlice.js';




const PropertyCard = ({ property }) => {


  const dispatch = useDispatch();
  const properties = useSelector(selectAllProperties);

  const [currentProperty, setCurrentProperty] = useState({})

  useEffect(() => {
    dispatch(fetchAllProperties());
}, [dispatch]);


  return (
    <>
    <div className='property-card' key={property.id} onClick={()=> {
      setCurrentProperty(property)
    }}>
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
