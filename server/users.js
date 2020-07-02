// HELPER functions to keep track of users


const users = [];

const addUser = ({id, name, room})=>{

    //Javascript Mastery = javascriptmastery

    name = name.trim().toLowerCase();
    room = room.trim().toLowerCase();

    // check for username already in the room
    const existingUser = users.find(user=>user.room === room && user.name === name);

    if (existingUser){
        return {err: 'username is taken.'}
    }

    const user = {id, name, room};

    users.push(user);

    return {user};

}

const removeUser = (id)=>{

    const ind = users.findIndex(user=> user.id === id);

    if(index !== -1){
        return users.splice(index, 1)[0];
    }

}

const getUser = (id)=> users.find(user=> user.id === id);

const getUsersinRoom = (room) => users.filter(user=> user.room === room);

module.exports = { addUser, removeUser, getUser, getUsersinRoom};