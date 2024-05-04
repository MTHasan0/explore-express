import React from 'react';
import { Link, useLoaderData } from 'react-router-dom';

const Phones = () => {
    const phones = useLoaderData();
    console.log(phones);
    return (
        <div>
            <p>Phone {phones.length} </p>
            {
                phones.map(phone => <li key={phone.id}><Link to={`/phone/${phone.id}`}>{phone.model}</Link></li>)
            }
        </div>
    );
};

export default Phones;