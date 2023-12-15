import { Link, useStaticQuery, graphql } from 'gatsby'; 
import React from 'react';
const Navbar = () => {
  const data = useStaticQuery(graphql`
    query {
      site {
        siteMetadata {
          title
        }
      }
    }
  `);
  const { title } = data.site.siteMetadata;
    return (
        <nav className=' flex justify-between text-white w-3/4 mx-auto font-bold pt-6'>
            <div>
                <h1 className='text-4xl' >{title}</h1>
            </div>
            <div>
                <Link to='/' className='hover:underline hover:text-green-400 transition-all duration-300 font-normal py-1.5 px-3 rounded-md hover:bg-gray-400 '>Home</Link>
                <Link to='/about' className='hover:underline hover:text-red-500 transition-all duration-300 mx-8 font-normal py-1.5 px-2 rounded-md hover:bg-gray-400'>About</Link>
                <Link to='/projects' className='hover:underline hover:text-red-500 transition-all duration-300 font-normal py-1.5 px-3 rounded-md hover:bg-gray-400'>Portfolio Project</Link>
                <Link to='/sanitygatsby' className='hover:underline hover:text-red-500 transition-all duration-300 font-normal py-1.5 px-3 rounded-md hover:bg-gray-400'>Gatsby</Link>
            </div>
            {/* <Herosection /> */}
        </nav>
    )
}
export default Navbar


