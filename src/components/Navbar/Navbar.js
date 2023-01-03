import React from 'react';

const Navbar = () => {
    return (
        <nav>
            <div className="nav-wrapper">
                <a href="#" className="brand-logo">
                    Navbar
                </a>
                <ul id="nav-mobile" className="right hide-on-med-and-down">
                    <li>
                        <a href="notes">Note Book</a>
                    </li>
                </ul>
            </div>
        </nav>
    );
}

export default Navbar;
