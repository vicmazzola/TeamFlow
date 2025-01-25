import './TextField.css'
import React from "react";

interface TextFieldProps {
    label: string;
    value: string;
    whenChanged: (value: string) => void;
    required: boolean;
    placeholder: string;
}

const TextField = (props: TextFieldProps) => {


    const whenType = (event: React.ChangeEvent<HTMLInputElement>) => {
        props.whenChanged(event.target.value)
    }

    return (
        <div className='text-field'>
            <label>
                {props.label}
            </label>
            <input
                value={props.value}
                onChange={event => whenType}
                required={props.required}
                placeholder={props.placeholder}
            />
        </div>

    )
}

export default TextField