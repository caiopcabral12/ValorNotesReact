import { useState } from "react";
import { Container, Form, Background } from "./style";

import { api } from "../../service/api";

import { Input } from "../../components/Input";
import { Button } from "../../components/button"
import { RiMailLine, RiLockPasswordLine, RiUserLine } from "react-icons/ri"
import { ButtonText } from "../../components/ButtonText";
import { Link, useNavigate } from "react-router-dom";

export function Signup () {
    const [name, setName] = useState("");
    const [password, setPassword] = useState("");
    const [email, setEmail] = useState("");
 
    const navigate = useNavigate();


    function handleSignUp() {
        if(!name || !email || !password) {
            return alert("Make sure to put all you infos!");
        }

        api.post("/users", {name, email, password})
        .then(() => {
            alert("User created")
            navigate("/")
        })
        .catch(error => {
            if(error.response) {
                alert(error.response.data.message);
            }
            else {
                alert("Error! User not created");
            }
        })
    };
    return(
        <Container>
            <Form>
                <h1>
                     Welcome to ValorNotes
                </h1> 

                <p>
                    A Valorant Note APP to monitorize your performance in game! 
                </p>

                <h2> Sign Up</h2>

                <Input
                 placeholder="User" 
                 Icon={RiUserLine}
                 onChange={e => setName(e.target.value)} />

                <Input 
                placeholder="E-mail" 
                Icon={RiMailLine}
                onChange={e => setEmail(e.target.value)}/>

                <Input 
                placeholder="password" 
                Icon={RiLockPasswordLine}
                onChange={e => setPassword(e.target.value)}/>
                
                <Button title="Create Account" onClick={handleSignUp} />

                <Link to="/">
                    <ButtonText title="Back to Login"/>
                </Link>
        

                </Form>

            <Background/>
        </Container>
    )
}