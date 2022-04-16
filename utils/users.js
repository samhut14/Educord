const users = []


//user joins room
function userJoin(id, name, room) {
    const user = {id, name, room}

    users.push(user)

    return user
}

//get curernt user

function getCurrentUser(id) {
    return users.find(user => user.id === id)
}

// user leaves 
function userLeave(id) {
    const index = users.findIndex(user => user.id === id)
    if (index !== -1) {
        let user = users[index]
        users.splice(index, 1)
        return user
    }
}

// get room users
function getRoomUsers(room) {
    return users.filter(user => user.room === room)
}

module.exports = {
    userJoin,
    getCurrentUser,
    userLeave,
    getRoomUsers
}
