import './components/Banner/Banner.css'
import {Banner} from "./components/Banner/index.jsx";
import Form from "./components/Form/index.jsx";
import Team from "./components/Team/index.jsx";
import {useState} from "react";

function App() {

    const [collaborators, setCollaborators] = useState([]);

    const newCollaborator = (collaborator) => {
        console.log(collaborator)
        setCollaborators([...collaborators, collaborator])

    }

    return (
        <>
            <div>
                <Banner/>
                <Form collaboratorRegistered={collaborator => newCollaborator(collaborator)}/>
                <Team name='Back-end'/>
                <Team name='Front-end'/>
                <Team name='Data Science'/>
                <Team name='DevOps'/>
                <Team name='UX and Design'/>
                <Team name='Mobile'/>
                <Team name='Innovation and Management'/>
            </div>
        </>
    );
}


export default App
