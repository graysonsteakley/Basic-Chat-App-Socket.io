import React from 'react'
import './Input.css'

export const Input = ({message, setMessage, sendMessage}) => {
    return (
        <form action="" className="form">
            <input className="input"
            type="text"
            placeholder="Type a message..."
            value={message} 
            onChange={e=> setMessage(e.target.value)}
            onKeyPress={e=> e.key === 'Enter' ? sendMessage(e) : null}      
            />
            <button 
            className="sendButton"
            onClick={e=>sendMessage(e)}>
                Send
            </button>
        </form>
    )
}
