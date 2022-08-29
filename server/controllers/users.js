import express from 'express';
import mongoose from 'mongoose';

import UserMessage from '../models/userMessage.js';

const router = express.Router();

export const getUsers = async (req, res) => {
    try {
        const userMessage = await UserMessage.find();

        res.status(200).json(userMessage);
    } catch (error) {
        res.status(404).json({ message: error.message});
    }
};

export const createUsers = async (req, res) =>{
    const user = req.body;

    const newUser = new UserMessage(user);

    try {
        
        await newUser.save();

        res.status(201).json(newUser);
    } catch (error) {
        res.status(409).json({ message: error.message });
        
    }
};
export const updateUsers = async (req, res) =>{
    const { id:_id} = req.params;
    const users = req.body;

    if(!mongoose.Types.ObjectId.isValid(_id)) return res.status(404).send('No submission with that ID');

    const updateUsers = await UserMessage.findByIdAndUpdate(_id, { ...users, _id}, {new: true});

    res.json(updateUsers);
};

export const deleteUsers = async (req, res) =>{
    const { id } = req.params;
    if(!mongoose.Types.ObjectId.isValid(id)) return res.status(404).send('No submission with that ID');

    await UserMessage.findByIdAndRemove(id);

    res.json({ message: 'Post deleted successfully'});
};


export default router;
