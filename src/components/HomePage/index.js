import React, { useState } from 'react';
import ViewAgents from '../ViewAgents';
import AGENTS from "../../data";

import './style.css'
import AddAgent from '../AddAgent';
import UpdateAgent from '../UpdateAgent';
import DeleteAgent from '../DeleteAgent';


const HomePage = (props) => {

    const [agents, setAgents] = useState(AGENTS);
    const [viewAdd, setViewAdd] = useState(false);
    const [viewEdit, setViewEdit] = useState(false);
    const [viewDelete, setViewDelete] = useState(false);

    const handleAddAgent = () => {
        setViewAdd(true);
    }

    const handleEditAgent = () => {

    }

    const handleDeleteAgent = () => {

    }




    return (

        <div className="content">
            {viewAdd ? <AddAgent agents={agents} /> : null}
            {viewEdit ? <UpdateAgent agents={agents} /> : null}
            {viewDelete ? <DeleteAgent agents={agents} /> : null}
            <ViewAgents agents={agents} addAgent={handleAddAgent}
                editAgent={handleEditAgent}
                deleteAgent={handleDeleteAgent} />

        </div>
    );
}


export default HomePage;