import { Container, Form, Background, } from "./style";
import { Input } from "../../components/Input";
import { Button } from "../../components/button"
import { RiMailLine, RiLockPasswordLine } from "react-icons/ri"
import { ButtonText } from "../../components/ButtonText";
import{ Link } from 'react-router-dom'
import { useAuth } from "../../hooks/auth";
import { useState } from "react";



export function SignIn () {
    const [email, setEmail] = useState("");
    const [password, setPassword] = useState("");


    const { signIn } = useAuth();

    function handleSignIn() {
        signIn({email, password});
    }

    return(
        <Container>
            <Form>
            
                <h1>
                     Welcome to ValorNotes
                </h1> 

                <p>
                    A Valorant Note APP to monitorize your performance in game! 
                </p>
            
            
                <h2> Login</h2>

                    <Input placeholder="E-mail" 
                    type="text"
                    Icon={RiMailLine}
                    onChange={e => setEmail(e.target.value)} />

                    <Input placeholder="password" 
                    type="password"
                    Icon={RiLockPasswordLine}
                    onChange={e => setPassword(e.target.value)} />

                    <Button title="Enter"
                    onClick={handleSignIn}/>

                 <Link to="/SignUp">
                    <ButtonText title="Create Account"
                    />
                 </Link>
                
            </Form>

            <Background/>
        </Container>
    )
};