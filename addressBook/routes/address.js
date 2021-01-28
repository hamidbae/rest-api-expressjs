import express from 'express';
import {getAddress, addAddress, getAddressId, deleteAddress, updateAddress} from '../controllers/address.js';

const router = express.Router();

router.get('/', getAddress);

router.post('/', addAddress);

router.get('/:id', getAddressId);

router.delete('/:id', deleteAddress);

router.patch('/:id', updateAddress)


export default router;