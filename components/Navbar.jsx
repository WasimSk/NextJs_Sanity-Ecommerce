import React from 'react';
import Link from 'next/link';
import { AiOutlineShopping } from '../node_modules/react-icons/ai'

const Navbar = () => {
  return (
    <div className="navbar-container">
      <p>
        <Link href ="/">WAS Headphones</Link>
      </p>
      <button type="button"
      className="cart-icon" onClick=""><AiOutlineShopping/>
      </button>
      <span className="cart-item-qty">1</span>
    </div>
  )
}

export default Navbar