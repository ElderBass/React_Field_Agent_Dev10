
# React Field Agent Assessment

## Tasks

_TODO_ Add time estimates to each of the top-level tasks

* [x] Create a new GitHub repo for this assessment (#.# hours)
  * [x] **When creating your repo, be sure to add a `.gitignore` file using the GitHub Node template**
  * [x] Update the README with the contents from this file
  * [x] Add the instruction team as collaborators (smashdevcode, WillSuggs, scertain)

* [x] Review the requirements (#.# hours)

* [x] Identify any research that I need to do (#.# hours)

### Part 1: Project Setup and Agents List (Friday Morning)

* [x] Create a new React project with CRA (create-react-app)
  * [x] Remove the cruft (refer back to the Components and JSX exercise for instructions)

* [x] Migrate CSS files from last week's assessment
  * [x] Copy them into the `public` folder
  * [x] Link to them in the `index.html` file

* [x] Add in provided `data.js` file for the Field Agents data

* [x] Create `FieldAgents` component (stub)
  * [x] Update `App` component to render `FieldAgents`

* [x] Update `FieldAgents` to render list of Agents
  * [x] Copy over HTML from previous assessment
  * [x] Replace static data with dynamic data
  * [x] Stub out click event handlers ("Add Agent", "Edit Agent", "Delete Agent") as necessary

**Make sure that my GitHub repo is updated!**

### Part 2: Add Agent and Delete Agent (Friday Afternoon)

* [x] Create a form to add an Agent
  * [x] Add form JSX
  * [x] Decide between using individual state variables for input elements or a single object
  * [x] Add onChange event handlers to input elements
  * [x] Add onSubmit event handler to form element
  * [x] Prevent the form from submitting!
  * [x] Create Agent object and update the Agents array (don't modify the original array!)

* [x] Support deleting Agents
  * [x] Store the "delete agent ID" in a new state variable
  * [x] Retrieve the agent to delete
  * [x] Update form state variable(s)
  * [x] Add delete confirmation JSX
  * [x] Add button click handler to perform the delete (don't modify the original array!)

* [x] Conditionally render sections of the component
  * [x] Add state variable to track the current view
  * [x] Add conditional logic to the JSX to display the appropriate view

**Make sure that my GitHub repo is updated!**

### Part 3: Edit Agent (Weekend)

**Make sure that my GitHub repo is updated!**

* [x] Support editing Agents
  * [x] Store the "edit agent ID" in a new state variable
  * [x] Retrieve the agent to edit
  * [x] Update form state variable(s)
  * [x] Add form JSX
  * [x] Add onChange event handlers to input elements
  * [x] Add onSubmit event handler to form element
  * [x] Prevent the form from submitting!
  * [x] Create Agent object and update the Agents array (don't modify the original array!)

* [ ] Use the provided test plan to manually test the application

## High-Level Requirements

Implement a full CRUD UI for agents.

* Display all agents
* Add an agent
* Update an agent
* Delete an agent

## Technical Requirements

* Use Create React App
* Use in memory data
* Use your HTML and CSS from the previous assessment or a CSS framework
