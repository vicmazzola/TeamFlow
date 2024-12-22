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

    return (
        <section className='form'>
            <form>
                <h2>Fill in the information to create the collaborator card. </h2>
                <TextField label='Name' placeholder='Type your name'/>
                <TextField label='Role' placeholder='Type your role'/>
                <TextField label='Image' placeholder='Provide the image URL'/>
                <Dropdown label='Team' items={teams}/>
                <Button text='Create card'/>
            </form>
        </section>
    )
}

export default Form;