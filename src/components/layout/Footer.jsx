import React from 'react'
import { Link } from 'react-router-dom'

const Footer = () => {
    return (
        <footer className=' h-20 flex flex-col items-center justify-center'>
            <div className=' container mx-auto text-center'>
                <span
                    className='_blue drop-shadow-md select-none'
                >
                    &copy; 2023 - by Amir Kholiluddin Ismail
                </span >
            </div >
        </footer>
    )
}

export default Footer