import './Dropdown.css'

const Dropdown = (props) => {
    return (
        <div className="dropdown">
            <label>{props.label}</label>
            <select>
                {props.items.map(item => <option>{item}</option>)}

            </select>
        </div>
    )
}

export default Dropdown