import React, { useState } from 'react';

import './style.css'


const UpdateAgent = (props) => {

    const [agent, setAgent] = useState({ ...props.agent });

    const onInputChangeHandler = (e) => {
        e.preventDefault();
        setAgent({
            ...agent,
            [e.target.name]: e.target.value
        })
    }

    return (

        <div className="formContent">
            <h2>Clean the slate and start fresh.</h2>
            <form className="form" onSubmit={(e) => props.submit(e)}>
                <div className="field">
                    <label htmlFor="firstName">First Name:</label>
                    <input
                        className="inputField"
                        id="firstName"
                        name="firstName"
                        type="text"
                        value={agent.firstName}
                        onChange={(e) => onInputChangeHandler(e)}
                    />
                </div>
                <div className="field">
                    <label htmlFor="lastName">Last Name:</label>
                    <input
                        className="inputField"
                        id="lastName"
                        name="lastName"
                        type="text"
                        value={agent.lastName}
                        onChange={(e) => onInputChangeHandler(e)}
                    />
                </div>
                <div className="field">
                    <label htmlFor="dob">Date of Birth:</label>
                    <input
                        className="inputField"
                        id="dob"
                        name="dob"
                        type="date"
                        value={agent.dob}
                        onChange={(e) => onInputChangeHandler(e)}
                    />
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
                        value={agent.heightInInches}
                        onChange={(e) => onInputChangeHandler(e)}
                    />
                </div>
                <div className="field">
                    <label htmlFor="image">Image:</label>
                    <input
                        className="inputField"
                        id="image"
                        name="image"
                        type="text"
                        value={agent.image}
                        onChange={(e) => onInputChangeHandler(e)}
                    />
                </div>
                <div className="submitDiv">
                    <button className="cancelLink" onClick={props.cancel}>Cancel</button>
                    <button className="submitBtn" type="submit">Save Changes</button>
                </div>
            </form>
        </div>
    );
}


export default UpdateAgent;