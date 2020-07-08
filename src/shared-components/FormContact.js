import React from 'react';

const FormContact = () => {
    return (
        <div id="form-contact">
           <form>
               <label>Your Name <span>*</span></label>
               <input type="text" />
               <div className="spacer"></div>
               <label>Company Name <span>*</span></label>
               <input type="text" />
               <div className="spacer"></div>
               <label>Email <span>*</span></label>
               <input type="email" />
               <div className="spacer"></div>
               <label>Phone <span>*</span></label>
               <input type="text" />
               <div className="spacer"></div>
               <button className="blue-button">Begin Partnership</button>
           </form>
        </div>
    );
};

export default FormContact;