import './components/Banner/Banner.css'
import {Banner} from "./components/Banner/index.jsx";
import Form from "./components/Form/index.jsx";
import Team from "./components/Team/index.jsx";
import {useState} from "react";

function App() {

    const teams = [
        {
            name: 'Back-end',
            primaryColor: '#57C278',
            secondaryColor: '#D9F7E9',
        },
        {
            name: 'Front-End',
            primaryColor: '#82CFFA',
            secondaryColor: '#E8F8FF',
        },
        {
            name: 'Data Science',
            primaryColor: '#A6D157',
            secondaryColor: '#F0F8E2',
        },
        {
            name: 'DevOps',
            primaryColor: '#E06B69',
            secondaryColor: '#FDE7E8',
        },
        {
            name: 'UX and Design',
            primaryColor: '#D86EBF',
            secondaryColor: '#FAE5F5',
        },
        {
            name: 'Mobile',
            primaryColor: '#FEBA05',
            secondaryColor: '#FFF5D9',
        },
        {
            name: 'Innovation and Management',
            primaryColor: '#FF8A29',
            secondaryColor: '#FFEEDF',
        }

    ]

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

                {teams.map(team =>
                    <Team
                        key={team.name}
                        name={team.name}
                        primaryColor={team.primaryColor}
                        secondaryColor={team.secondaryColor}/>)}

            </div>
        </>
    );
}


export default App
