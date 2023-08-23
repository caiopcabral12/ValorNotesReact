import { RiShutDownLine} from "react-icons/ri"
import { Container, Profile, Logout } from "./style"


export function Header(){
    return(
        <Container>
            <Profile>
                <img src="https://github.com/caiopcabral12.png"
                alt="Foto do usuário"/>

                <div>
                    <span>
                        Welcome!
                    </span>
                    <strong>Caio Cabral</strong>
                </div>
            </Profile>
            <Logout>
                <RiShutDownLine/>
            </Logout>
        </Container>
    )
}