import React from 'react';
import { SortDropdown } from './SortDropdown/SortDropdown';
import "./Items.css";

export const Items = (props) => {
    async function getFromLocalhost() {
        await fetch("http://localhost:3000/")
        .then(res => console.log(res));
    }

    async function postFromLocalhost() {
        fetch('http://localhost:3000/product', {
            method: 'POST',
            headers: {
                'Accept': 'application/json, text/plain, */*',
                'Content-Type': 'application/json'
            },
            body: JSON.stringify({ name: "someItem", cost: "15.00", categoryId: "3" })
        }).then(res => res.json())
        .then(res => console.log(res)); 
            
    }

    return (
        <div className='items-main-container'>
            <SortDropdown />
            <div>
                <button onClick={getFromLocalhost}>Get data</button>
                <button onClick={postFromLocalhost}>Put data</button>
            </div>
        </div>
    );
};