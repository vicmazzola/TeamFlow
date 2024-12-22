import './Form.css'
import TextField from "../TextField/index.jsx";
import Dropdown from "../Dropdown/index.jsx";
import Button from "../Button/index.jsx";

const Form = () => {

    const teams = [
        'Back-end',
        'Front-end',
        'Data Science',
        'DevOps',
        'UX and Design',
        'Mobile',
        'Innovation and Management'
    ];

    const whenSaving = (event) => {
        event.preventDefault()
        console.log('Form submitted');
    }

    return (
        <section className='form'>
            <form onSubmit={whenSaving}>
                <h2>Fill in the information to create the collaborator card. </h2>
                <TextField required={true} label='Name' placeholder='Type your name'/>
                <TextField required={true} label='Role' placeholder='Type your role'/>
                <TextField label='Image' placeholder='Provide the image URL'/>
                <Dropdown required={true} label='Team' items={teams}/>
                <Button>Create Card</Button>
            </form>
        </section>
    )
}

export default Form;