const router = require('express').Router();
const fs = require('fs');

const usersFile = './users.json';

const getUsers = () => {
    console.log('get user');
    
    if (!fs.existsSync(usersFile)) return [];
    const data = fs.readFileSync(usersFile, 'utf8');
    return JSON.parse(data);
};

const saveUsers = (users) => {
    console.log('save user');
    fs.writeFileSync(usersFile, JSON.stringify(users, null, 2), 'utf8');
};

router.post('/signup', (req, res) => {
    const { name, username, password } = req.body;

    if (!name || !username || !password) {
        return res.status(400).json({ message: 'All fields are required' });
    }

    const users = getUsers();
    const userExists = users.some(user => user.username === username);

    if (userExists) {
        return res.status(400).json({ message: 'User already exists with this email' });
    }

    const newUser = { name, username, password };
    users.push(newUser);
    saveUsers(users);

    res.status(201).json({ message: 'Signup successful', user: newUser });
});


module.exports = router;