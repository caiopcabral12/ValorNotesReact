import { Routes, Route } from "react-router-dom";


import { Signup } from '../pages/Signup'
import { Signin } from '../pages/Signin'

export function AuthRoutes () {
    return (
        <Routes>
            <Route path="/" element={<Signin/>}/>
            <Route path="/SignUp" element={<Signup/>}/>
        </Routes>
    )
};