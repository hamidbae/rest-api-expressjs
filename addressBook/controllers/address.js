import { v4 as uuidv4 } from 'uuid';

let addresses = [];

export const getAddress = (req, res) => {
    res.send(addresses);
}

export const addAddress = (req, res) => {
    const address = req.body;
    const id = uuidv4();

    const addressWithId = { ...address, id: id }

    addresses.push(addressWithId);

    res.send(`Address with id ${id} has been created`);
}

export const getAddressId = (req, res) => {
    const {id} = req.params;

    const address = addresses.find((address => address.id === id));

    res.send(address);
}

export const deleteAddress = (req, res) => {
    const {id} = req.params;

    addresses = addresses.filter((address) => address.id !== id);

    res.send(`Address with id ${id} has been deleted`)
}

export const updateAddress = (req,res) => {
    const {id} = req.params;
    const { firstName, lastName, userAddress } = req.body;

    const address = addresses.find((address) => address.id === id);

    if(firstName) address.firstName = firstName;
    if(lastName) address.lastName = lastName;
    if(userAddress) address.userAddress = userAddress;

    res.send(`Address with id ${id} has been updated`);
}