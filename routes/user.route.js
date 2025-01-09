const express = require('express');
const { getAllUsers, getbyId, createUser, updateUser, deleteUser } = require('../controllers/user.controller');
const router = express.Router();

router.get('/', getAllUsers);
router.get('/:id', getbyId);
router.post('/', createUser);
router.put('/:id', updateUser);
router.delete('/:id', deleteUser);

module.exports = router;