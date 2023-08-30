import { Container, Form, Background } from "./style";
import { Input } from "../../components/Input";
import { Button } from "../../components/button"
import { RiMailLine, RiLockPasswordLine, RiUserLine } from "react-icons/ri"
import { ButtonText } from "../../components/ButtonText";
import { Link } from "react-router-dom";

export function Signup () {
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

                <Input placeholder="User" Icon={RiUserLine}/>
                <Input placeholder="E-mail" Icon={RiMailLine}/>
                <Input placeholder="password" Icon={RiLockPasswordLine}/>
                
                <Button title="Create Account"/>

                <Link to="/">
                    <ButtonText title="Back to Login"/>
                </Link>
        

                </Form>

            <Background/>
        </Container>
    )
}