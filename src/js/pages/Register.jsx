import React, { useState } from 'react'
import { InputGroup } from '../components/inputGroup'
import { SubmitButton } from '../components/submitButton'
import api from '../../utils/api'

//High Order Component
export const Register = () => {

    // let email = ""
    // const setEmail = (value) => {
    //     email = value;
    // }
    const [email, setEmail] = useState("")
    const [password, setPassword] = useState("")
    const [error, setError] = useState(null)
    const [fieldError, setFieldError] = useState(null)
    const [isLoading, setIsLoading] = useState(false)

    const handleSubmit = async (e) => {
        e.preventDefault();

        setError(null)
        setFieldError(null)
        setIsLoading(false)

        console.log('Register state : Email -> ', email)
        console.log('Register state : Password -> ', password)

        // let body = {
        //     email,
        //     password
        // }

        // const result = await fetch("http://localhost:4000/api/v1/users/", {
        //     method: "POST",
        //     body: JSON.stringify(body),
        //     headers: {
        //         "Content-Type": "application/json"
        //     }
        // })

        // console.log('result with a fetch method', result);

        try {
            setIsLoading(true)
            const axiosResult = await api.post('users/', { email, password });
            console.log('result with an axios method', axiosResult);
            setIsLoading(false)
        }
        catch (err) {
            console.log('axios err :', err.response);
            setError(err.response?.data?.message);
            setFieldError(err.response?.data?.field);
            setIsLoading(false)
        }
    }

    return (
        <div>
            <h1>Register</h1>
            <p style={{ color: "red" }}>{error && error}</p>
            {isLoading && <p>Loading...</p>}
            <form onSubmit={handleSubmit}>
                <InputGroup handleChange={setEmail} isValid={fieldError !== "email"} label="Email" type="email" required />
                <InputGroup handleChange={setPassword} isValid={fieldError !== "password"} label="Password" type="password" required={true} minLength="1" maxLength="15" />
                <SubmitButton name="S'enregistrer" />
            </form>
        </div>
    )
}