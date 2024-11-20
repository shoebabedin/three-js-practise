import React from 'react';
import { Link } from 'react-router-dom';

const Navbar = () => {
  return (
    <>
      <ul className="flex items-center justify-center gap-4">
        <li>
          <Link to={'/'}>Sandle</Link>
        </li>
        <li>
          <Link to={'/earth'}>Earth</Link>
        </li>
        <li>
          <Link to={'/top-chair'}>Top Chair</Link>
        </li>
        <li>
          <Link to={'/resturant'}>Resturant</Link>
        </li>
        <li>
          <Link to={'/dance'}>Dance</Link>
        </li>
        <li>
          <Link to={'/human-body'}>Human-Body</Link>
        </li>
        <li>
          <Link to={'/hawkeye'}>Hawkeye</Link>
        </li>
        <li>
          <Link to={'/controlling-model'}>Controlling-Model</Link>
        </li>
      </ul>
    </>
  );
};

export default Navbar;