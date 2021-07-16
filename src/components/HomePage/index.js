import React, { useState } from 'react';
import ViewAgents from '../ViewAgents';
import AGENTS from "../../data";
import ConfirmationMessage from '../ConfirmationMessage';
import AddAgent from '../AddAgent';
import UpdateAgent from '../UpdateAgent';
import DeleteAgent from '../DeleteAgent';

import './style.css'

const HomePage = (props) => {

    const [agents, setAgents] = useState(AGENTS);
    const [currentAgent, setCurrentAgent] = useState({});
    const [confirmationMessage, setConfirmationMessage] = useState({
        display: false,
        agent: {},
        action: ""
    })
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

        const nextId = agents.length > 0 ? Math.max(...agents.map(m => m.id)) + 1 : 1;

        const newAgent = {
            agentId: nextId,
            firstName: e.target.firstName.value,
            lastName: e.target.lastName.value,
            image: e.target.image.value,
            dob: e.target.dob.value,
            heightInInches: e.target.height.value,
            aliases: [],
            agents: []
        }
        setCurrentAgent({ ...newAgent });
        setAgents([...agents, newAgent]);
        setViewAdd(false);
        setConfirmationMessage({
            display: true,
            agent: currentAgent,
            action: "added"
        })

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
        setConfirmationMessage({
            ...confirmationMessage,
            display: false
        })
    }

    return (

        <div className="content">
            {confirmationMessage.display ? <ConfirmationMessage agent={currentAgent} confirm={handleCancelForm} action={confirmationMessage.action} /> : null}
            {viewAdd ? <AddAgent submit={handleAddFormSubmit} agents={agents} cancel={handleCancelForm} /> : null}
            {viewEdit ? <UpdateAgent agents={agents} submit={handleEditFormSubmit} cancel={handleCancelForm} /> : null}
            {viewDelete ? <DeleteAgent agents={agents} confirm={handleDeleteConfirmation} cancel={handleCancelForm} /> : null}
            <ViewAgents agents={agents} addAgent={handleAddAgent}
                editAgent={handleEditAgent}
                deleteAgent={handleDeleteAgent} />

        </div>
    );
}


export default HomePage;