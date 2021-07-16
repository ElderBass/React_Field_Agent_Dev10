
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

* [ ] Create a new React project with CRA (create-react-app)
  * [ ] Remove the cruft (refer back to the Components and JSX exercise for instructions)

* [ ] Migrate CSS files from last week's assessment
  * [ ] Copy them into the `public` folder
  * [ ] Link to them in the `index.html` file

* [ ] Add in provided `data.js` file for the Field Agents data

* [ ] Create `FieldAgents` component (stub)
  * [ ] Update `App` component to render `FieldAgents`

* [ ] Update `FieldAgents` to render list of Agents
  * [ ] Copy over HTML from previous assessment
  * [ ] Replace static data with dynamic data
  * [ ] Stub out click event handlers ("Add Agent", "Edit Agent", "Delete Agent") as necessary

**Make sure that my GitHub repo is updated!**

### Part 2: Add Agent and Delete Agent (Friday Afternoon)

* [ ] Create a form to add an Agent
  * [ ] Add form JSX
  * [ ] Decide between using individual state variables for input elements or a single object
  * [ ] Add onChange event handlers to input elements
  * [ ] Add onSubmit event handler to form element
  * [ ] Prevent the form from submitting!
  * [ ] Create Agent object and update the Agents array (don't modify the original array!)

* [ ] Support deleting Agents
  * [ ] Store the "delete agent ID" in a new state variable
  * [ ] Retrieve the agent to delete
  * [ ] Update form state variable(s)
  * [ ] Add delete confirmation JSX
  * [ ] Add button click handler to perform the delete (don't modify the original array!)

* [ ] Conditionally render sections of the component
  * [ ] Add state variable to track the current view
  * [ ] Add conditional logic to the JSX to display the appropriate view

**Make sure that my GitHub repo is updated!**

### Part 3: Edit Agent (Weekend)

**Make sure that my GitHub repo is updated!**

* [ ] Support editing Agents
  * [ ] Store the "edit agent ID" in a new state variable
  * [ ] Retrieve the agent to edit
  * [ ] Update form state variable(s)
  * [ ] Add form JSX
  * [ ] Add onChange event handlers to input elements
  * [ ] Add onSubmit event handler to form element
  * [ ] Prevent the form from submitting!
  * [ ] Create Agent object and update the Agents array (don't modify the original array!)

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
