import React, { Component } from 'react';

import Shoe from "./shoe";

export default class InventoryItem extends Component {
    constructor() {
        super();
        this.state = {
            data: [],
        };

        this.shoeItems = this.shoeItems.bind(this);
    }
    
    // lifecyle hook
    componentDidMount() {
        this.getShoeItems();
    }
    
    // Get fetch call
    getShoeItems() {
        fetch("https://capstone-back-end.herokuapp.com/shoe/get")
            .then((response) => response.json())
            .then((data) => {
                this.setState({
                    data: data,
                });
                console.log("Successful Get response", data);
            })
            .catch((error) => {
                console.log("Error with Get response", error);
            })
    }

    // Function to map over data from get
    shoeItems() {
        return this.state.data.map((item) => {
            return <Shoe key={item.id} item={item} />;
        });
    }
    

    render() {
        return (
            <div>
                {/* Display mapped data here */}
                <div className='inventory-item-wrapper'>{this.shoeItems()}</div>
            </div>
        ) 
    }

}
