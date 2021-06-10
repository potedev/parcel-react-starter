import React, { useState } from 'react'
import { InputGroup } from '../components/inputGroup'
import { SubmitButton } from '../components/submitButton'

//High Order Component
export const Register = () => {

    // let email = ""
    // const setEmail = (value) => {
    //     email = value;
    // }
    const [email, setEmail] = useState("")
    const [password, setPassword] = useState("")

    const handleSubmit = async (e) => {
        e.preventDefault();

        console.log('Register state : Email -> ', email)
        console.log('Register state : Password -> ', password)

        let body = {
            email,
            password
        }

        let result = await fetch("http://localhost:4000/api/v1/users/", {
            method: "POST",
            body: JSON.stringify(body),
            headers: {
                "Content-Type": "application/json"
            }
        })

        console.log('result', result);
    }

    return (
        <div>
            <h1>Register</h1>
            <form onSubmit={handleSubmit}>
                <InputGroup handleChange={setEmail} label="Email" type="email" required />
                <InputGroup handleChange={setPassword} label="Password" type="password" required={true} minLength="3" maxLength="15" />
                <InputGroup label="Username" type="text" />
                <SubmitButton name="S'enregistrer" />
            </form>
        </div>
    )
}