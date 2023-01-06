import React from "react";

export default function Shoes(props) {
    const {
        id,
        name,
        shoe_img,
        description
    } = props.item;

    return (
        <div className="shoe-wrapper">
            <div className="shoe-name">
                {name}
            </div>
            <div className="shoe-image-wrapper">
                <img src={shoe_img} alt="Shoe Image" />
            </div>
            <div className="shoe-description">{description}</div>
            
        </div>
    )
}