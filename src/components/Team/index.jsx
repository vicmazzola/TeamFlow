import './Team.css'
import Collaborator from "../Collaborator/index.jsx";

const Team = ({ collaborators, secondaryColor, primaryColor, name, onDelete, onColorChange }) => {
    return (
        collaborators.length > 0 && (
            <section
                className="team"
                style={{ backgroundColor: secondaryColor }}
            >

                {onColorChange && (
                    <input
                        type="color"
                        className="input-color"
                        value={secondaryColor}
                        onChange={(event) => onColorChange(event.target.value, name)}
                    />
                )}

                <h3 style={{ borderColor: primaryColor }}>{name}</h3>


                <div className="collaborators">
                    {collaborators.map((collaborator, index) => (
                        <Collaborator
                            key={index}
                            name={collaborator.name}
                            role={collaborator.role}
                            image={collaborator.image}
                            backgroundColor={primaryColor}
                            onDelete={onDelete}
                        />
                    ))}
                </div>
            </section>
        )
    );
};


export default Team