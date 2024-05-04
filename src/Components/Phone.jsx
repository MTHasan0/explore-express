import React from 'react';
import { useLoaderData } from 'react-router-dom';

const Phone = () => {
    const phone = useLoaderData();
    return (
        <div>
            <p>Name: {phone.model}</p>
            <p>Brand: {phone.brand}</p>
        </div>
    );
};

export default Phone;