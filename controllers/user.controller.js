const getAllUsers = async (req, res) => {
    res.status(200).json({ message: 'all users' });
};

const getbyId = async (req, res) => {
    res.status(200).json({ message: 'user by id' });
}

const createUser = async (req, res) => {
    res.status(201).json({ message: 'user created' });
}

const updateUser = async (req, res) => {
    res.status(200).json({ message: 'user updated' });
}

const deleteUser = async (req, res) => {
    res.status(200).json({ message: 'user deleted' });
}



module.exports = {getAllUsers, getbyId, createUser, updateUser, deleteUser};