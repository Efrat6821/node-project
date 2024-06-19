const UserModel = require('../models/user.model');
const jwt = require('jsonwebtoken');
const bcrypt = require('bcrypt');
require('dotenv').config();

const getUsers = async () => {
    try {
        const users = await UserModel.find().exec();
        return users;
    } catch (error) {
        console.error('Error getting users:', error);
        throw new Error('Failed to get users.');
    }
}

const signin = async (email, password, username) => {
    try {
        const user = await UserModel.findOne({ email, username }).exec();
        if (!user) {
            return 'User not found';
        }
        const isPasswordValid = await bcrypt.compare(password, user.password);
        if (!isPasswordValid) {
            return 'Invalid password';
        }

        const token = jwt.sign(
            { user_id: user.id, username: user.username, email: user.email, role: user.role },
            process.env.TOKEN_KEY || '',
            {
                expiresIn: '2h'
            }
        );
        return token;
    } catch (err) {
        console.error('Error occurred during login:', err);
        throw new Error('Error occurred during login');
    }
};

const signup = async (email, password, username) => {
    try {
        if (!(email && password && username)) {
            return 'All input is required';
        }

        const existingUser = await UserModel.findOne({ email, username }).exec();
        if (existingUser) {
            return 'User Already Exist. Please Login';
        }
        const lastUser = await UserModel.findOne().sort({ id: -1 }).exec();
        const newId = lastUser ? lastUser.id + 1 : 1;
        const encryptedPassword = await bcrypt.hash(password, 10);
        const newUser = {
            username,
            id: newId,
            email,
            password: encryptedPassword,
            role: 'admin'
        };
        await UserModel.insertMany(newUser);
        const token = jwt.sign(
            { user_id: newUser?.id, username, email, role: newUser?.role },
            process.env.TOKEN_KEY || '',
            {
                expiresIn: '2h'
            }
        );
        return token;
    } catch (err) {
        console.log(err);
        console.error('Error occurred during signup:', err);
        return 'Error occurred during signup';
    }
};

module.exports = {
    getUsers,
    signin,
    signup
};
