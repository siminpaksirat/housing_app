import { Router } from 'express';
import Property from '../../models/propertyModel.js';

const router = Router();




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

router.get('/properties/:propertyId', async (req, res, next) => {
  const propertyId = req.params.id;
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

export default router;
