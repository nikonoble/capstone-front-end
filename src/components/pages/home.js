import React from 'react';

// import InventoryItem from '../inventory/inventory-item';
import FetchApi from '../fetch-calls/fetchAPI';

export default function() {
    return (
        <div className='app'>
            <h1>Kloud Customs</h1>
            <h2>Shoe Gallery</h2>

            {/* <InventoryItem /> */}
            <FetchApi />
        </div>
    );
}
