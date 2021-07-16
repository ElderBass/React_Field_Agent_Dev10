import React from 'react';


import './style.css'


const UpdateAgent = (props) => {


    return (

        <div class="content formContent">
            <h2>Clean the slate and start fresh.</h2>
            <form class="form">
                <div class="field">
                    <label for="firstName">First Name:</label>
                    <input
                        class="inputField"
                        id="firstName"
                        name="firstName"
                        type="text"
                    />
                </div>
                <div class="field">
                    <label for="middleName">Middle Name:</label>
                    <input
                        class="inputField"
                        id="middleName"
                        name="middleName"
                        type="text"
                    />
                </div>
                <div class="field">
                    <label for="lastName">Last Name:</label>
                    <input
                        class="inputField"
                        id="lastName"
                        name="lastName"
                        type="text"
                    />
                </div>
                <div class="field">
                    <label for="dob">Date of Birth:</label>
                    <input class="inputField" id="dob" name="dob" type="date" />
                </div>
                <div class="field">
                    <label for="height">Height (Inches):</label>
                    <input
                        class="inputField"
                        id="height"
                        name="height"
                        type="number"
                        min="48"
                        max="144"
                    />
                </div>
                <div class="submitDiv">
                    <a class="cancelLink" href="home.html">Cancel</a>
                    <button class="submitBtn" type="submit">Save Changes</button>
                </div>
            </form>
        </div>
    );
}


export default UpdateAgent;