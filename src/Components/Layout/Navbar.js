import { RiVirusFill } from 'react-icons/ri';
import React from 'react';
import { Link } from 'react-router-dom';

const Navbar = ({ title }) => {
  return (
    <nav className='navbar bg-primary '>
      <h1>
        <i /> <RiVirusFill /> {title}
      </h1>
      <ul>
        <li>
          <Link to='/'>Home</Link>
        </li>
        <li>
          <Link to='about'>About</Link>
        </li>
      </ul>
    </nav>
  );
};

Navbar.defaultProps = {
  title: 'Covid -19 information by State ',
};
export default Navbar;
