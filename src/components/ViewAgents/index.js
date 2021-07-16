import React from 'react';


import './style.css'


const ViewAgents = (props) => {


    return (

        <main className="content">
            <div className="agentsBanner">
                <h2>All Agents</h2>
                <button onClick={props.handleAddAgent} id="addAgentLink">Add Agent +</button>
            </div>
            <div className="agentsDisplay">
                <div className="agentCard">
                    <header><h4>Michael Westen</h4></header>
                    <main>
                        <img
                            src="https://mjfredrick.files.wordpress.com/2011/03/burn_notice_s4_004.jpg?w=584"
                            alt="Michael Westen"
                            className="agentImage"
                        />
                        <div className="spyInfo">
                            <table>
                                <tr>
                                    <td>DoB:</td>
                                    <td className="spyData">01/27/1967</td>
                                </tr>
                                <tr>
                                    <td>Spy Since:</td>
                                    <td className="spyData">05/12/1990</td>
                                </tr>
                                <tr>
                                    <td>Height:</td>
                                    <td className="spyData">70"</td>
                                </tr>
                            </table>
                        </div>
                    </main>
                    <footer>
                        <a href="update-agent.html"
                        ><i className="fas fa-pencil-alt icon"></i
                        ></a>
                        <a href="delete-agent.html"
                        ><i className="fas fa-trash-alt icon"></i
                        ></a>
                    </footer>
                </div>
            </div>
        </main>
    );
}


export default ViewAgents;