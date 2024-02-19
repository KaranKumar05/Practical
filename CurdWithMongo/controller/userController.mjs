import User from '../model/userModel.mjs'

export const createUser = async (req, res) => {
    const user = await User.create(req.body);
    res.status(201).json({
        status: 'success',
        data: {
            user
        }
    });
}

export const getUsers = async (req, res) => {
    const users = await User.find();
    res.status(200).json({
        status: 'success',
        data: {
            users
        }
    });
}

export const deleteUser = async (req, res) => {
    try {
        await User.findByIdAndDelete(req.params.id);
        res.status(204).json({
            status: "success",
            message: "User Deleted"
        });

    } catch (error) {
        console.log(error)
        res.send("Error")
    }
}

export const updateUser = async (req, res) => {
    const user = await User.findByIdAndUpdate(req.params.id, req.body, {
        new: true,
        runValidators: true
    });
    res.status(200).json({
        status: 'success',
        data: {
            user
        }
    });
}
export const getUser = async (req, res) => {
    const user = await User.findById(req.params.id);
    res.status(200).json({
        status: 'success',
        data: {
            user
        }
    });
}