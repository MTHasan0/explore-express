import React from 'react';
import { Link, useLoaderData } from 'react-router-dom';

const Header = () => {

    
    return (
        <div className='flex gap-5'>
            <Link to={'/phones'}>Phones</Link>
           
        </div>
    );
};

export default Header;