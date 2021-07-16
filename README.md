# React Field Agent

## Overview

### High Level Requirements
* Implement a full CRUD UI for agents.
    * Display all agents.
    * Add an agent.
    * Update an agent.
    * Delete an agent.

### Plan Outline

* I'll start by assessing all of the higher level components I will need and make directories for each of those inside of another new directory - components - within src
    * These directories will be for all the different "pages" I have from the previous assessment, e.g. Agents, AddAgent, etc
    * I will also have directories for Header, Footer, and Nav that will each be their own component as well
    * For each component directory, there will be an index.js and a style.css
* I'll then start with the JSX, copying and pasting much of what I had from my previous assessment into the relevant components, changing class to className along the way and making some other alterations
* For each component, I'll then import the styles I used for those html elements and put them in the relevant style.css files
* Next, in App, I'll add my Header, Footer, and Nav components, as well as Home
    * Home will render different AgentCards components that will have information passed in as props
    * I plan on using the npm package Browser Router to route to all my different pages via the Nav component. I will have to remind myself on how to do this.
* From there, I will go through and ensure you can get to every page and that all the pages look fine on their base
* After that, I will go and add some state, hooks, and functions for submitting the various. The edit and delete buttons I had on my agent cards in view agents will capture that agent's key/id (I think...?) and display their data dynamically
    * The add agent will add to the overall array of agent state and should render another agent card dynamically. I'm not sure if this is actually a requirement though, which is why I'll save it for last


## Tasks

### Creating Folder Structure
* Create a components folder
* Inside this folder, add folders/files for all of the 'pages' that I will need for this project
    * Will also create ones for Header, Footer, and Nav
    * Each folder will have an appropriate name (e.g. AddAgent), with and index.js file and style.css file

    **Estimated Time:** 20 minutes

### index.css styles
* There are many styles from my previous assessment that all components shared and applied mainly to the template. I will determine which those are and put them into the index.css style page to ensure consistent styling

    **Estimated Time:** 15 minutes


### Flesh out Header, Footer, and Nav
* Should be fairly simple copy/paste from my previous assessment, though I'll to refactor the HTML into JSX (e.g. changing class to className)
* Will also copy/paste the styles for these components into their style.css files

    **Estimated Time:** 30 minutes.

### Flesh out Home page
* For now, until I gain more clarification from instructors, my plan is two have two states within this component, one for featured agents and one for recently added.
    * Using these arrays I will render the agents dynamically using the .map method
* Import JSX and styles from previous assessment.

    **Estimated Time:** 45 minutes

### 