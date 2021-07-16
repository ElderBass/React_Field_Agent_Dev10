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

    const handleEditAgent = (id) => {
        setViewAdd(false);
        setViewEdit(true);
        setViewDelete(false);

        for (let i = 0; i < agents.length; i++) {
            if (agents[i].agentId === id) {
                setCurrentAgent(agents[i]);
                break;
            }
        }
    }

    const handleEditFormSubmit = (e) => {
        e.preventDefault();

        const updatedAgent = {
            agentId: currentAgent.agentId,
            firstName: e.target.firstName.value,
            lastName: e.target.lastName.value,
            image: e.target.image.value,
            dob: e.target.dob.value,
            heightInInches: e.target.height.value,
            aliases: [],
            agents: []
        }

        const newAgents = [...agents];
        const updatedAgentIndex = newAgents.findIndex(a => a.agentId === currentAgent.agentId);

        newAgents[updatedAgentIndex] = updatedAgent;

        setCurrentAgent({ ...updatedAgent });
        setAgents(newAgents);
        setViewEdit(false);
        setConfirmationMessage({
            display: true,
            agent: currentAgent,
            action: "updated"
        })
    }

    const handleDeleteAgent = (id) => {
        setViewAdd(false);
        setViewEdit(false);
        setViewDelete(true);
        
        for (let i = 0; i < agents.length; i++) {
            if (agents[i].agentId === id) {
                setCurrentAgent(agents[i]);
                break;
            }
        }
    }

    const handleDeleteConfirmation = (e) => {
        e.preventDefault();

        setAgents(agents.filter(a => a.agentId !== currentAgent.agentId));
        setViewDelete(false);

        setConfirmationMessage({
            display: true,
            agent: currentAgent,
            action: "deleted"
        })
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
            {viewEdit ? <UpdateAgent agent={currentAgent} submit={handleEditFormSubmit} cancel={handleCancelForm} /> : null}
            {viewDelete ? <DeleteAgent agent={currentAgent} confirm={handleDeleteConfirmation} cancel={handleCancelForm} /> : null}
            <ViewAgents agents={agents} addAgent={handleAddAgent}
                editAgent={handleEditAgent}
                deleteAgent={handleDeleteAgent} />

        </div>
    );
}


export default HomePage;