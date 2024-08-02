import { useState } from 'react'

export const InputField = ({ type, placeholder, icon }) => {
    const [isPasswordShown, setIsPasswordShown] = useState(false);
    return (
        <div className="input-wrapper">
            <input type={isPasswordShown} placeholder={placeholder} className="input-field" required />
            <i className="material-symbols-rounded">
                {icon}
            </i>
            {type === 'password' && (<i onClick={() => setIsPasswordShown(prevState => !prevState)} className="material-symbols-rounded eye-icon">
                {isPasswordShown ? 'visibility' : 'visibility_off'}
            </i>)}
        </div>

    )
}
