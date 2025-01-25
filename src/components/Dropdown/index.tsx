import './Dropdown.css'

interface DropdownProps {
    label: string;
    items: string[];
    value: string;
    whenChanged: (value: string) => void;
    required?: boolean;
}

const Dropdown = (props: DropdownProps) => {
    return (
        <div className="dropdown">
            <label>{props.label}</label>
            <select
                onChange={event => props.whenChanged(event.target.value)}
                required={props.required}
                value={props.value}>

                <option value="">Select a team</option>
                {props.items.map(item => <option key={item}>{item}</option>)}
            </select>
        </div>
    )
}

export default Dropdown