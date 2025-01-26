import './TextField.css'

interface TextFieldProps {
    label: string;
    value: string;
    whenChanged: (value: string) => void;
    required?: boolean;
    placeholder: string;
    type?: 'text' | 'email' | 'password' | 'number' | 'date';
}

const TextField = ({whenChanged, placeholder, value, label, required = false, type = 'text'}: TextFieldProps) => {


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
                type={type}
            />
        </div>

    )
}

export default TextField