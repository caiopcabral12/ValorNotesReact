import { Container, Form, Background, } from "./style";
import { Input } from "../../components/Input";
import { Button } from "../../components/button"
import { RiMailLine, RiLockPasswordLine } from "react-icons/ri"
import { ButtonText } from "../../components/ButtonText";


export function Signin () {
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

                    <Input placeholder="E-mail" Icon={RiMailLine}/>
                    <Input placeholder="password" Icon={RiLockPasswordLine}/>
                    <Button title="Enter"/>

                 <a href="">
                    <ButtonText title="Create Account"/>
                 </a>
                
            </Form>

            <Background/>
        </Container>
    )
}