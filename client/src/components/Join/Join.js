import React, {useState} from 'react'
import {Link} from 'react-router-dom'
import './Join.css'


export const Join = () => {

    // In the useState method the parameter is the variable's
    // starting value in this case an empty string ''
    const [name, setName] = useState('');
    const [room, setRoom] = useState('');


    return (
        <div className="joinOuterContainer">
            <div className="joinInnerContainer">
                <h1 className="heading">Join</h1>
                <div>
                    <input onChange={(e) => setName(e.target.value)} type="text" className="joinInput" placeholder="name"/>
                </div>
                <div>
                    <input onChange={(e) => setRoom(e.target.value)} type="text" className="joinInput mt-20" placeholder="room"/>
                </div>
            
            <Link onClick={e=> (!name || !room) ? e.preventDefault : null}
            to={`/chat?name=${name}&room=${room}`}>
            <button className="button mt-20" type="submit">Sign In</button>
            </Link>

            </div>       
        </div>
    )
}
