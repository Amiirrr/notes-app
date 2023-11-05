import React from 'react'
import { Link } from 'react-router-dom'


const Header = () => {
    return (
        <header className='_grey shadow-sm h-20 flex flex-col items-center justify-center m-0'>
            <div className='header container mx-auto text-center'>
                <Link to="/">
                    <span
                        className='_blue text-4xl font-bold drop-shadow-md select-none cursor-pointer '
                    >
                        Notes App
                    </span >
                </Link>
            </div >
        </header>
    )
}

export default Header