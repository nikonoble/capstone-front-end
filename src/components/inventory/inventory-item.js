import React, { Component } from "react";

export default class InventoryItem extends Component {
    constructor(props) {
        super(props);

        this.state= {
            inventoryItemClass: ""
        };
    }

    render(){
        const { id, name, shoe_img, description} = this.props.item;
        return (
            <div className="inventory-item-wrapper">
                <div className="img-text-wrapper">
                    <div className="logo-wrapper">
                        <img src={logo_url} />
                    </div>

                    <div className="name">{name}</div>
                    <div className="shoe_img">{shoe_img}</div>
                    <div className="description">{description}</div>
                </div>
            </div>
            
        )
    }
}