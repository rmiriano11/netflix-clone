/* eslint-disable import/no-anonymous-default-export */
import React from 'react';
import './Header.css';

export default ({black}) =>{
    return(
        <header className={black ? 'black' : ''}>
            <div className='header--logo'>
                <a href='/'>
                    <img src='https://logospng.org/download/netflix/logo-netflix-4096.png' alt='Netflix'></img>
                </a>
            </div>

            <div className='header--user'>
                <a href='/'>
                    <img src='https://i.pinimg.com/originals/b6/77/cd/b677cd1cde292f261166533d6fe75872.png' alt='usuario'></img>
                </a>
            </div>  
        </header>
    )
}