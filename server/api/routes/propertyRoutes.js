import { Router } from 'express';
import Property from '../../models/propertyModel.js';


const router = Router();



/////////////// FETCH ALL //////////////
router.get('/properties', async (req, res, next) => {
  try {
    const properties = await Property.findAll({
      attributes: ['id', 'name', 'address'],
    });
    res.json(properties);
  } catch (err) {
    next(err);
  }
});


/////////////// FETCH SINGLE //////////////
router.get('/properties/:propertyId', async (req, res, next) => {
  const propertyId = req.params.propertyId;
  try {
    const property = await Property.findOne({
      where: { id: propertyId },
    });
    if (property) {
      res.json(property);
    } else {
      res.status(404).send({ message: 'Property not found' });
    }
  } catch (error) {
    next(error);
  }
});


/////////////// POST //////////////
router.post('/properties', async (req, res, next) => {
  try {
    const newProperty = await Property.create({
      name: req.body.name,
      address: req.body.address,
    })
    res.status(201).json(newProperty);
  } catch (err) {
    next(err);
  }
});


/////////////// PUT //////////////
router.put('/properties/:propertyId', async (req, res, next) => {
  const propertyId = req.params.propertyId;
  try {
    const property = await Property.findByPk({
      where: { id: propertyId },
    });
    if (property) {
      await property.update({
        name: req.body.name,
        address: req.body.address,
      });
      res.status(200).json(property);
    } else {
      res.status(404).send({ message: 'Property not found' });
    }
  } catch (error) {
    next(error);
  }
});


/////////////// DELETE //////////////
router.delete('/properties/:propertyId', async (req, res, next) => {
  const propertyId = req.params.propertyId;
  try {
    const property = await Property.findByPk({
      where: { id: propertyId },
    });
    if (property) {
      await property.destroy();
      res.status(204).send();
    } else {
      res.status(404).send({ message: 'Property not found' });
    }
  } catch (error) {
    next(error);
  }
});

export default router;
