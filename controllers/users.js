export const createUser = (req, res) => {
    const user = req.body
    
    users.push({ ...user, id: uuidv4() })

    res.send(`User with the name ${user.firstName} added to the database!`)
}