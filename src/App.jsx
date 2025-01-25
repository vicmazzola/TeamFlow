import './components/Banner/Banner.css'
import Form from "./components/Form/index.tsx";
import Team from "./components/Team/index.tsx";
import {useState} from "react";
import {Footer} from "./components/Footer/index.jsx";

import Banner from "./components/Banner";

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
        setCollaborators([...collaborators, collaborator])

    }

    return (
        <>
            <div className='App'>
                <Banner imgSrc="/img/banner.png"/>
                <Form teams={teams.map(team => team.name)}
                      collaboratorRegistered={collaborator => newCollaborator(collaborator)}/>

                {teams.map(team => <Team
                        key={team.name}
                        name={team.name}
                        primaryColor={team.primaryColor}
                        secondaryColor={team.secondaryColor}
                        collaborators={collaborators.filter(collaborator => collaborator.team === team.name)}
                    />)}

                <Footer/>

            </div>
        </>
    );
}


export default App
