import { Routes, Route } from "react-router-dom";


import { Signup } from '../pages/Signup'
import { SignIn } from '../pages/Signin'

export function AuthRoutes () {
    return (
        <Routes>
            <Route path="/" element={<SignIn/>}/>
            <Route path="/SignUp" element={<Signup/>}/>
        </Routes>
    )
};