import './Collaborator.css'

interface CollaboratorProps {
    name: string;
    image: string;
    role: string;
    backgroundColor: string;
    onDelete?: (name: string) => void;


}

const Collaborator = (props: CollaboratorProps) => {
    return (
        <div className="collaborator">
            <div className='header' style={{ backgroundColor:props.backgroundColor }}>
                <img src={props.image} alt={`${props.name}'s photo`} />

            </div>
            <div className='footer'>
                <h4>{props.name}</h4>
                <h5>{props.role}</h5>
            </div>
        </div>
    )
}

export default Collaborator