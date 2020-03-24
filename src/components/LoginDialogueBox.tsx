import React, {useState} from 'react';

// Type definitions
type DialogueProps = {
    isVolunteer: boolean,
    setIsVolunteer: any,
}

// Structure:
// Header, Text Fields, Radio Selection, Submit Button
const LoginDialogueBox = (props: DialogueProps) => {
    const [username, setUsername] = useState('')
    const [password, setPassword] = useState('')

    const onChangeUsername =  (e: React.ChangeEvent<HTMLInputElement>) => {
        e.persist();
        setUsername(e.target.value);
    }

    const onChangePassword =  (e: React.ChangeEvent<HTMLInputElement>) => {
        e.persist();
        setPassword(e.target.value);
    }

    return (
        <div className="bg-blue-500 flex flex-col h-full px-4 pt-4">
            {/* Header */}
            <p className="text-center text-white font-semibold text-xl pb-4">Welcome Back!</p>

            {/* Text Fields */}
            <input className="text-center text-white bg-blue-800 focus:outline-none focus:shadow-outline border border-blue-500 mb-2" placeholder="Enter Username" value={username} onChange={onChangeUsername}/>
            <input className="text-center text-white bg-blue-800 focus:outline-none focus:shadow-outline border border-blue-500 mb-2" type="password" placeholder="Enter Password" value={password} onChange={onChangePassword}/>
            
            {/* Radio Selection */}
            <div className="flex justify-around text-white">
            <label className="inline-flex items-center">
                <input type="radio" className="form-radio" name="accountType" checked={props.isVolunteer} onClick={() => props.setIsVolunteer(true)}/>
                <span className="ml-2">Volunteer</span>
            </label>
            <label className="inline-flex items-center">
                <input type="radio" className="form-radio" name="accountType" checked={!props.isVolunteer} onClick={() => props.setIsVolunteer(false)}/>
                <span className="ml-2">Nonprofit</span>
            </label>
            </div>

            {/* Submit Button */}
            <div className="flex justify-center">
                <button className="bg-blue-600 w-24 hover:bg-blue-400 text-white font-bold py-2 px-4 border-b-4 border-blue-700 hover:border-blue-500 rounded mt-4">
                    Login
                </button>
            </div>
        </div>
    );
};

export default LoginDialogueBox;