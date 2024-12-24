import './Team.css'
import Collaborator from "../Collaborator/index.jsx";

const Team = (props) => {
    return (

        <section className='team' style={{ backgroundColor: props.secondaryColor }}>
            <h3 style={{ borderColor: props.primaryColor }}>{props.name}</h3>
            <Collaborator />
            <Collaborator />
            <Collaborator />
        </section>

    )
}

export default Team