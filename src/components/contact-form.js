import React from 'react'

const ContactForm = () => {
    const [formStatus, setFormStatus] = React.useState('Send')
        const onSubmit = (send) => {
            send.preventDefault()
            setFormStatus('Submitting...')
            const { name, email, message } = send.target.elements
            const conFom = {
                name: name.value,
                email: email.value,
                message: message.value,
            }
  
            console.log(ContactForm)
        }
    return (
        <div className="form-container">
            <h2>Contact Form</h2>
            <form onSubmit={onSubmit}>
                <div className="input-wrapper">
                    <label className="name">Name: </label>
                    <input className="form-control" type="text" id="name" required />
                </div>input-wrapper

                <div className="input-wrapper">
                    <label className="email">Email: </label>
                    <input className="form-control" type="email" id="email" required />
                </div>

                <div className="input-wrapper">
                    <label className="message">Message: </label>
                    <textarea className="form-control" id="message" required />
                </div>

                <button className="btn" type="submit">
                    {formStatus}
                </button>
            </form>
        </div>
    )
}
export default ContactForm