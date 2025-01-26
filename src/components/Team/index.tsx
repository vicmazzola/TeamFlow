import './Team.css'
import Collaborator from "../Collaborator";
import {ICollaborator} from "../../shared/interfaces/ICollaborator";

interface TeamProps {
    primaryColor: string;
    secondaryColor: string;
    name: string;
    collaborators: ICollaborator[];
    onColorChange?: (color: string, name: string) => void;
    onDelete?: (name: string) => void;

}

const Team = (props: TeamProps) => {
    const css = {backgroundColor: props.secondaryColor}


    return (
        (props.collaborators.length > 0) ?
            <section className='team' style={css}>

                {props.onColorChange && (
                    <input
                        type="color"
                        className="input-color"
                        value={props.secondaryColor}
                        onChange={(event) =>
                            props.onColorChange!(event.target.value, props.name)
                        }
                    />
                )}

                <h3 style={{borderColor: props.primaryColor}}>
                    {props.name}
                </h3>


                <div className="collaborators">
                    {props.collaborators.map((collaborator) => (
                        <Collaborator
                            key={collaborator.name}
                            name={collaborator.name}
                            role={collaborator.role}
                            image={collaborator.image}
                            date={collaborator.date}
                            backgroundColor={props.primaryColor}
                            onDelete={props.onDelete}
                        />
                    ))}
                </div>
            </section>
            : (
                <></>
            )
    );
};


export default Team