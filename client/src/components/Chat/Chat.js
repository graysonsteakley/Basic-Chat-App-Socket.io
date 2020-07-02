import React, {useState, useEffect} from 'react'
import queryString from 'query-string'
import io from 'socket.io-client'
import './Chat.css'
import {InfoBar} from '../Infobar/InfoBar'
import {Input} from '../Input/Input'
import {Messages} from '../Messages/Messages'

let socket;

export const Chat = () => {
    const [name, setName] = useState('');
    const [room, setRoom] = useState('');
    const [message, setMessage] = useState('');
    const [messages, setMessages] = useState([]);

    const ENDPOINT = 'localhost:5000'
    useEffect(()=>{
        const {name, room} = queryString.parse(window.location.search);

        socket = io(ENDPOINT);

        setName(name);
        setRoom(room);

        console.log(socket);

        // a callback from the backend of socket.on 
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


    useEffect(()=>{
        socket.on('message', (message)=>{
            setMessages([...messages, message]);
        });
    }, [messages])

    // this callback of messages makes it so useeffect is only run when 
    // the messages array changes


    //function for sending messages.

    const sendMessage = (e)=>{
        if(message){
            e.preventDefault();
            // the callback of setmessage clears the input field 
            // with an empty string.
            socket.emit('sendMessage', message, () => setMessage(''));
        }
    }

    console.log(messages);

    return (
        <div className="outerContainer">
            <div className ="container">
                <InfoBar room={room}/>
                {/* <input 
                value={message} 
                onChange={e=> setMessage(e.target.value)}
                onKeyPress={e=> e.key === 'Enter' ? sendMessage(e) : null}
                /> */}
                <Input message={message} setMessage={setMessage} sendMessage={sendMessage}/>
                <Messages messages={messages} name={name}/>
            </div>
        </div>
    )
}
