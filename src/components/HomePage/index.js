import React, { useState } from 'react';
import ViewAgents from '../ViewAgents';
import AGENTS from "../../data";

import './style.css'
import AddAgent from '../AddAgent';
import UpdateAgent from '../UpdateAgent';
import DeleteAgent from '../DeleteAgent';


const HomePage = (props) => {

    const [agents, setAgents] = useState(AGENTS);
    const [currentAgent, setCurrentAgent] = useState({});
    const [viewAdd, setViewAdd] = useState(false);
    const [viewEdit, setViewEdit] = useState(false);
    const [viewDelete, setViewDelete] = useState(false);

    const handleAddAgent = () => {
        setViewAdd(true);
        setViewEdit(false);
        setViewDelete(false);
    }

    const handleAddFormSubmit = (e) => {
        e.preventDefault();

    }

    const handleEditAgent = () => {
        setViewAdd(false);
        setViewEdit(true);
        setViewDelete(false);
    }

    const handleEditFormSubmit = (e) => {
        e.preventDefault();

    }

    const handleDeleteAgent = () => {
        setViewAdd(false);
        setViewEdit(false);
        setViewDelete(true);
    }

    const handleDeleteConfirmation = (e) => {
        e.preventDefault();
    }

    const handleCancelForm = () => {
        setViewAdd(false);
        setViewEdit(false);
        setViewDelete(false);
    }



    return (

        <div className="content">
            {viewAdd ? <AddAgent submit={handleAddFormSubmit} agents={agents} cancel={handleCancelForm}/> : null}
            {viewEdit ? <UpdateAgent agents={agents} submit={handleEditFormSubmit} cancel={handleCancelForm}/> : null}
            {viewDelete ? <DeleteAgent agents={agents} confirm={handleDeleteConfirmation} cancel={handleCancelForm}/> : null}
            <ViewAgents agents={agents} addAgent={handleAddAgent}
                editAgent={handleEditAgent}
                deleteAgent={handleDeleteAgent} />

        </div>
    );
}


export default HomePage;