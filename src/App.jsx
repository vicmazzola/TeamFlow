import './components/Banner/Banner.css'
import {Banner} from "./components/Banner/index.jsx";
import Form from "./components/Form/index.jsx";
import {useState} from "react";

function App() {

    const [collaborators, setCollaborators] = useState([]);

    const newCollaborator = (collaborator) => {
        console.log(collaborator)

    }

    return (
        <>
            <div>
                <Banner/>
                <Form collaboratorRegistered = {collaborator => newCollaborator(collaborator) } />
            </div>
        </>
    );
}


export default App
