const { getUsers, signup, signin } = require('../services/user.service');


const Get = async (req, res) => {
  try {
    const users = await getUsers();
    res.send(users);
  } catch (error) {
    console.error(`error in fetch user ${error.message}`);
    res.status(500).send('error in fetch user');
  }
};

const signIn = async (req, res) => {
  try {
    const { email, password, username } = req.body;
    const result = await signin(email, password, username);
    res.send(result);
  } catch (error) {
    console.log(`error in log in ${error.message}`);
    res.status(500).send('error in log in');
  }
};

const signUp = async (req, res) => {
  try {
    const { email, password, username } = req.body;
    const result = await signup(email, password, username);
    res.send(result);
  } catch (error) {
    console.log(`error in sign up ${error.message}`);
    res.status(500).send('error in sign up');
  }
};

module.exports = {
  Get,
  signIn,
  signUp
};
