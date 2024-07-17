import { useState } from 'react';

const ValidatedInput = (props) => {
    const { name, type, label, value } = props

    const [errorValue, setErrorValue] = useState('');

    const validation = (fieldValue) => {
        if(fieldValue === "" && props.required) {
            setErrorValue(`${props.label} is required.`)
        } else {
            setErrorValue('');
        }
    }

    return (
        <>
        <label className="text-[#000] w-full max-w-xs text-left mt-1 mb-1 ml-2 text-sm font-bold">{label} <span className='text-primary'>{props.required && "*"}</span></label>
        <input 
            type={type}
            placeholder={props.placeholder}
            className={`input input-bordered w-full max-w-xs bg-transparent mt-1 mb-1 text-sm ${errorValue !== "" && "border-rose-600 bg-rose-100"}`}
            name={name}
            value={value}
            onChange={(e) => {
                validation(e.target.value)
                    return e
            }}
            onBlur={(e) => {
                console.log(e.target.value);
                validation(e.target.value)
            }}
        />
        
        { errorValue !== "" &&
            <p className="text-xs text-rose-600 mt-1">{errorValue}</p>
        }
    </>
    )
}

export default ValidatedInput;