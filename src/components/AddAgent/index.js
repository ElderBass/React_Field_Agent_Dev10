import React from 'react';


import './style.css'


const AddAgent = (props) => {


    return (

        <div className="formContent">
            <h2>Add to our ranks of nobodies.</h2>
            <form className="form">

                <div className="field">
                    <label htmlFor="firstName">First Name:</label>
                    <input
                        className="inputField"
                        id="firstName"
                        name="firstName"
                        type="text"
                    />
                </div>
                <div className="field">
                    <label htmlFor="middleName">Middle Name:</label>
                    <input
                        className="inputField"
                        id="middleName"
                        name="middleName"
                        type="text"
                    />
                </div>
                <div className="field">
                    <label htmlFor="lastName">Last Name:</label>
                    <input
                        className="inputField"
                        id="lastName"
                        name="lastName"
                        type="text"
                    />
                </div>
                <div className="field">
                    <label htmlFor="dob">Date of Birth:</label>
                    <input class="inputField" id="dob" name="dob" type="date" />
                </div>
                <div className="field">
                    <label htmlFor="height">Height (Inches):</label>
                    <input
                        className="inputField"
                        id="height"
                        name="height"
                        type="number"
                        min="48"
                        max="144"
                    />
                </div>
                <div className="submitDiv">
                    {/* Might want to change this <a> to a button that has an onClick handler for toggling back to ViewAgents */}
                    <a className="cancelLink" href="home.html">Cancel</a>
                    <button className="submitBtn" type="submit">Add Agent</button>
                </div>
            </form>
        </div>
    );
}


export default AddAgent;