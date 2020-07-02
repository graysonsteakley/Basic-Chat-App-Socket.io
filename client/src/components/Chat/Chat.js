import React, {useState, useEffect} from 'react'
import queryString from 'query-string'
import io from 'socket.io-client'
import './Chat.css'


let socket;

export const Chat = () => {
    const [name, setName] = useState('');
    const [room, setRoom] = useState('');
    const ENDPOINT = 'localhost:5000'
    useEffect(()=>{
        const {name, room} = queryString.parse(window.location.search);

        socket = io(ENDPOINT);

        setName(name);
        setRoom(room);

        console.log(socket);

        //a callback from the backend of socket.on 
        // allows us to use a callback to error handle
        socket.emit('join', { name, room }, ()=>{
          
        });

        // return is used for unmounting
        // disconnecting on upon leaving the chat
        return () => {
            socket.emit('disconnect');
            
            socket.off();
        }
    }, [ENDPOINT, window.location.search]);


    return (
        <div>
            Chat
        </div>
    )
}
