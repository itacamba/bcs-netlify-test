import React, { Component } from 'react';
import * as emailjs from 'emailjs-com'

class FormContact extends Component {

    constructor() {
        super();
        this.state = { 
            name: '',
            companyName: '',
            email: '',
            phone: ''
        };
        
      }
      handleChange = (event) => {
        this.setState({[event.target.name]: event.target.value})
      }
    
      handleSubmit = (e) => {
        e.preventDefault()
        emailjs
        .sendForm(
            'outlook', /* this is the Service ID: found on Email Services | on your user dashboard */
            'bcs_test', /* this is the Template ID: found on Templates | on your user dashboard*/
            '.emailjs_contact_form',
            'user_d1tLQjBdzpxGITcMrl9jE' /* this is API Key: found on Account > API KEYS > User ID: | on your user dashboard */
        )
        .then()
        .catch()
        this.setState({
            name: '',
            companyName: '',
            email: '',
            phone: ''
        })
      }


    render() {
        const {name, companyName, email, phone} = this.state
        return (
            <div id="form-contact">
                <form onSubmit={this.handleSubmit} className="emailjs_contact_form">
                    <label>Your Name <span>*</span></label>
                    <input type="text" name="name" value={name}  onChange={this.handleChange}/>
                    <div className="spacer"></div>
                    <label>Company Name <span>*</span></label>
                    <input type="text"  name="companyName" value={companyName}  onChange={this.handleChange}/>
                    <div className="spacer"></div>
                    <label>Email <span>*</span></label>
                    <input type="email"  name="email" value={email}  onChange={this.handleChange}/>
                    <div className="spacer"></div>
                    <label>Phone <span>*</span></label>
                    <input type="text"  name="phone" value={phone}  onChange={this.handleChange}/>
                    <div className="spacer"></div>
                    <input type="button" value="Begin Partnership" className="blue-button" onClick={this.handleSubmit} />
                    {/* <button  className="blue-button">Begin Partnership</button> */}
                </form>
         </div>
        );
    }
}

export default FormContact;

 