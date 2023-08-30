import { Container, Form, ProfilePic} from "./style"
import { Input } from "../../components/Input"
import { RiMailLine, RiLockPasswordLine, RiArrowGoBackLine, RiUserLine, RiCamera3Line } from "react-icons/ri"
import { Button } from '../../components/button'
import { Link } from "react-router-dom";

export function User() {
    return(
        <Container> 
            <header>
                <Link to="/">
                        <RiArrowGoBackLine/>
                </Link>
                
            </header>
            
            <Form>
                <ProfilePic>
                    <img 
                      src="https://github.com/caiopcabral12.png" 
                      alt="Profile Pic" />
                
                    <label htmlFor="ProfilePic">
                        <RiCamera3Line/>

                        <Input
                        id="ProfilePic"
                        type="file"
                        />

                    </label>
                </ProfilePic>

               <Input placeholder="Name" Icon={RiUserLine}/>

               <Input placeholder="E-mail" Icon={RiMailLine}/>

               <Input placeholder="Current Password" Icon={RiLockPasswordLine}/>

               <Input placeholder="New Password" Icon={RiLockPasswordLine}/>
               
               <Button title="Save Info"/>
           </Form>

        </Container>
    )
}