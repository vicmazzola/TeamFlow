import './Form.css'
import TextField from "../TextField";
import Dropdown from "../Dropdown";
import Button from "../Button";
import {useState} from "react";
import {ICollaborator} from "../../shared/interfaces/ICollaborator";

interface FormProps {
    collaboratorRegistered: (collaborator: ICollaborator) => void;
    teams: string[];
}


const Form = (props: FormProps) => {

    const [name, setName] = useState('');
    const [role, setRole] = useState('');
    const [image, setImage] = useState('');
    const [team, setTeam] = useState('');
    const [date, setDate] = useState('');

    const whenSaving = (event: React.FormEvent<HTMLFormElement>) => {
        event.preventDefault()
        props.collaboratorRegistered({
            name,
            role,
            image,
            team,
            date
        })
        setName('')
        setRole('')
        setImage('')
        setTeam('')
        setDate('')
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
                <TextField
                    type="date"
                    required={true}
                    label="Entrance date on team"
                    placeholder=""
                    value={date}
                    whenChanged={value => setDate(value)}
                />
                <Dropdown
                    required={true}
                    label='Team'
                    items={props.teams}
                    value={team}
                    whenChanged={value => setTeam(value)}

                />
                <Button>
                    Create Card
                </Button>
            </form>
        </section>
    )
}

export default Form;