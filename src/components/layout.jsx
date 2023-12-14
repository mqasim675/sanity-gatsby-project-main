// import {graphql, useStaticQuery} from 'gatsby';
import React from 'react'
import '../styles/global.css'
import Navbar from './NavBar'
const Layout = ({ children }) => {

    return (
        <div>
            <Navbar />
            <div>
                {children}
            </div>
            <footer>
                <p className='text-center text-white '>
                    CopyWrite 2023 Web Worrior
                </p>

            </footer>
        </div>
    )
}

export default Layout
