import './TextField.css'

const TextField = (props) => {


    const whenType = (event) => {
        props.whenChanged(event.target.value)
    }

    return (
        <div className='text-field'>
            <label>
                {props.label}
            </label>
            <input value={props.value} onChange={whenType} required={props.required} placeholder={props.placeholder}/>
        </div>

    )
}

export default TextField