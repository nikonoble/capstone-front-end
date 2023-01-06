import React, { Component } from 'react';


export default class InventoryItem extends Component {
    constructor() {
        super();
        this.state = {
            name: "",
            shoe_img: "",
            description: ""
        };

        this.handleChange = this.handleChange.bind(this);
        this.handleSubmit = this.handleSubmit.bind(this);
        this.handleRichTextEditorChange = this.handleRichTextEditorChange.bind(this);
    }
    
    handleRichTextEditorChange(content) {
        this.setState({ content });
    }

    buildForm() {
        const formData = new FormData();

        formData.append("shoe[name]", this.state.name);
        formData.append("shoe[shoe-img]", this.state.shoe_img);
        formData.append("shoe[description]", this.state.description);

        return formData;
    }
    


    // Post fetch call
    handleSubmit(event) {
        fetch("https://capstone-back-end.herokuapp.com/shoe/add", {
            method: "POST",
            headers: { "content-type": "application/json"},
            body: JSON.stringify({
                name: this.state.name,
                shoe_img: this.state.shoe_img,
                description: this.state.description
            }),
        })
            .then((response) => {
                console.log("Added Shoe Successfully", response);
                response.json();
            })
            .then((data) => {
                console.log("Added shoe data", data);
                this.setState({
                    name: "",
                    shoe_img: "",
                    description: "",
                });
            })

            .catch((error) => {
                console.log("hanldeSubmit error adding shoe", error);
            });
        
        event.preventDefault();
    }

    handleChange(event) {
        this.setState({
            [event.target.name]: event.target.value
        });
    }


    render() {
        return (
            <form onSubmit={this.handleSubmit} className="shoe-form-wrapper">
                <div>
                    <input 
                        type="text" 
                        onChange={this.handleChange}
                        name="name"
                        placeholder="Shoe Name"
                        value={this.state.name}
                    />

                    <input 
                        type="text" 
                        onChange={this.handleChange}
                        name="shoe_img"
                        placeholder="Shoe Img URL"
                        value={this.state.shoe_img}
                    />
                    
                    <input 
                        type="text" 
                        onChange={this.handleChange}
                        name="description"
                        placeholder="Shoe Description"
                        value={this.state.description}
                    />
                </div>


                <button className='btn'>Add Shoe</button>
            </form>
                

            
        ) 
    }

}
