import React from 'react'

export default function InventoryItem() {

    const renderShoe = (shoe) => {

        const shoeWrapper = document.createElement("div");
        shoeWrapper.className = "shoe-wrapper";

        const nameTag = document.createElement("h2");
        nameTag.innerHTML = shoe.name;

        const shoeImageTag = document.createElement("img");
        shoeImageTag.src = shoe.shoe_img;
        
        const descriptionTag = document.createElement("h4");
        descriptionTag.innerHTML = shoe.description;
        
        const buttonsWrapper = document.createElement("div");
        buttonsWrapper.className = "buttons-wrapper";

        const updateButton = document.createElement("button");
        updateButton.innerHTML = "Edit"

        const handleUpdate = () => {
            nameTag.style.display = "none"
            shoeImageTag.style.display = "none"
            descriptionTag.style.display = "none"

            const nameInput = document.createElement("input");
            const shoeImageInput = document.createElement("input");
            const descriptionInput = document.createElement("input");

            nameInput.value = nameTag.innerHTML;
            shoeImageInput.value = shoeImageInput.src;
            descriptionInput.value = descriptionInput.innerHTML;

            shoeWrapper.insertBefore(nameInput, buttonsWrapper);
            shoeWrapper.insertBefore(shoeImageInput, buttonsWrapper);
            shoeWrapper.insertBefore(descriptionInput, buttonsWrapper);
            
            updateButton.innerHTML = "Submit"
            updateButton.onclick = () => {
                
                fetch(`https://capstone-back-end.herokuapp.com/shoe/edit/${shoe.id}`, {
                    method: "POST",
                    headers: { "content-type": "application/json"},
                    body: JSON.stringify({
                        name: nameInput.value,
                        shoe_img: shoeImageInput.value,
                        description: descriptionInput.value,
                    }),
                })
                .then(response => response.json())
                .then(data => {
                    console.log(data);

                    nameTag.innerHTML = nameInput.value;
                    shoeImageTag.src = shoeImageInput.value; 
                    descriptionTag.innerHTML = descriptionInput.value;

                    nameInput.remove();
                    shoeImageInput.remove();
                    descriptionInput.remove();

                    nameTag.style.display = "block";
                    shoeImageTag.style.display = "block";
                    descriptionTag.style.display = "block";
                    
                    updateButton.innerHTML = "Edit";
                })
                .catch(error => console.log("Error Editing Shoe: ", error))

            };
        }
        updateButton.onclick = handleUpdate;

        const deleteButton = document.createElement("button");
        deleteButton.innerHTML = "Delete"

        deleteButton.onclick = () => {
            fetch(`https://capstone-back-end.herokuapp.com/shoe/delete/${movie.id}`, {
                method: "DELETE",
            })
            .then(response => response.json())
            .then(data => {
                console.log(data);
                if (data === 'Shoe Has Been Deleted') {
                    shoeWrapper.remove()
                }
            })
            .catch(error => console.log("Error Deleting Shoe: ", error));
        };

        buttonsWrapper.appendChild(updateButton);
        buttonsWrapper.appendChild(deleteButton);

        shoeWrapper.appendChild(nameTag);
        shoeWrapper.appendChild(shoeImageTag);
        shoeWrapper.appendChild(descriptionTag);
        shoeWrapper.appendChild(buttonsWrapper);

        const shoesWrapper = document.querySelector(".shoes-wrapper");
        shoesWrapper.appendChild(shoeWrapper);
    };

    fetch("https://capstone-back-end.herokuapp.com/shoe/get", { method: "GET" })
        .then(response => response.json())
        .then(data => {
            data.forEach(shoe => {
                renderShoe(shoe);
            });
        })
        .catch(error => console.log("Error Getting Shoes: ",
        error));


    const viewShoeButton = document.querySelector("#view-shoes-btn");
    const addShoeButton = document.querySelector("#add-shoe-btn");
    const shoesDiv = document.querySelector(".shoes-wrapper");
    const formDiv = document.querySelector("add-shoe-from-wrapper");

    viewShoeButton.onclick = () => {
        shoesDiv.style.display = "flex";
        formDiv.style.display = "none";
    };
    

    addShoeButton.onclick = () => {
        shoesDiv.style.display = "none";
        formDiv.style.display = "flex";
    }

    const addShoeForm = document.querySelector(".add-shoe-form")
    addShoeForm.onsubmit = (event) => {
        event.preventDefault();
        
        const nameInput = document.querySelector("#name-input");
        const shoeImageInput = document.querySelector("#shoe-img-input");
        const descriptionInput = document.querySelector("#description-input");

        const name = nameInput.value;
        const shoeImg = shoeImageInput.value;
        const description = descriptionInput.value;

        fetch("https://capstone-back-end.herokuapp.com/shoe/add",  {
            method: "POST",
            headers: { "content-type": "application/json" }, 
            body: JSON.stringify({
                name: name,
                shoe_img: shoeImg,
                description: description
            }),
        })
            .then(response => response.json())
            .then(data => {
                consolelog(data);
                shoesDiv.style.display = "flex";
                formDiv.stye.display = "none";

                nameInput.value = "";
                shoeImageInput.value = "";
                descriptionInput.value = "";

                fetch(`https://capstone-back-end.herokuapp.com/shoe/get/${movie.id}`)
                    .then(response = response.json ())
                    .then(data => renderShoe(data))
                    .catch(error => console.log("Error: Getting New Shoe: ", error));
            })  
            .catch(error => console.log("Error Adding New Shoe: ", error))
    }
}

