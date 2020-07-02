import React from 'react'
import './InfoBar.css';



export const InfoBar = ({room}) => {
    return (
        <div className="infoBar">
            <div className="leftInnerContainer">
                <img className="onlineIcon" src = "./icons/onlineIcon.png" alt="online image"/>
                <h3>{room}</h3>
            </div>
            <div className="rightInnerContainer">
                <a href="/">
                    <img src="./icons/closeIcon.png" alt="close icon"/>
                </a>
            </div>
        </div>
    )
}
