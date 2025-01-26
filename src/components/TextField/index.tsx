import './TextField.css'

interface TextFieldProps {
    label: string;
    value: string;
    whenChanged: (value: string) => void;
    required?: boolean;
    placeholder: string;
}

const TextField = ({whenChanged, placeholder, value, label, required = false}: TextFieldProps) => {


    const whenType = (event: React.ChangeEvent<HTMLInputElement>) => {
        whenChanged(event.target.value)
    }

    return (
        <div className='text-field'>
            <label>
                {label}
            </label>
            <input
                value={value}
                onChange={whenType}
                required={required}
                placeholder={placeholder}
            />
        </div>

    )
}

export default TextField