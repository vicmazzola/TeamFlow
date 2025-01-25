import './Form.css'
import TextField from "../TextField/index.tsx";
import Dropdown from "../Dropdown/index.tsx";
import Button from "../Button/index.tsx";
import {useState} from "react";

const Form = (props) => {

    const [name, setName] = useState('');
    const [role, setRole] = useState('');
    const [image, setImage] = useState('');
    const [team, setTeam] = useState('');

    const whenSaving = (event) => {
        event.preventDefault()
        console.log({
            name,
            role,
            image,
            team,
        });
        props.collaboratorRegistered({
            name,
            role,
            image,
            team
        })
        setName('')
        setRole('')
        setImage('')
        setTeam('')
    }

    return (
        <section className='form'>
            <form onSubmit={whenSaving}>
                <h2>Fill in the information to create the collaborator card. </h2>
                <TextField
                    required={true}
                    label='Name'
                    placeholder='Type your name'
                    value={name}
                    whenChanged={value => setName(value)}
                />
                <TextField
                    required={true}
                    label='Role'
                    placeholder='Type your role'
                    value={role}
                    whenChanged={value => setRole(value)}
                />
                <TextField
                    label='Image'
                    placeholder='Provide the image URL'
                    value={image}
                    whenChanged={value => setImage(value)}
                />
                <Dropdown
                    required={true}
                    label='Team'
                    items={props.teams}
                    value={team}
                    whenChanged={value => setTeam(value)}

                />
                <Button>Create Card</Button>
            </form>
        </section>
    )
}

export default Form;