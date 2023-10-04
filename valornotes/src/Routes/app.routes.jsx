import { Routes, Route } from "react-router-dom";

import { Home } from '../pages/Home'
import { NewNote } from '../pages/NewNote'
import { Details } from '../pages/Details'
import { User } from '../pages/User'


export function AppRoutes () {
    return (
        <Routes>
            <Route path="/" element={<Home/>}/>
            <Route path="/NewNote" element={<NewNote/>}/>
            <Route path="/Details/:id" element={<Details/>}/>
            <Route path="/User" element={<User/>}/>
        </Routes>
    )
};