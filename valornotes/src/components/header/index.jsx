import { RiShutDownLine} from "react-icons/ri"
import { Container, Profile, Logout } from "./style"
import { useAuth } from "../../hooks/auth"
import { api } from "../../service/api";


export function Header(){


    const { signOut,user } = useAuth();
    
    const avatarURL = user.avatar ? `${api.defaults.baseURL}/files/${user.avatar}` : avatarPlaceholder
    const avatar = avatarURL;

    return(
        <Container>
            <Profile to="/User">
                <img src={avatar}
                alt={user.name}/>

                <div>
                    <span>
                        Welcome!
                    </span>
                    <strong>{user.name}</strong>
                </div>
            </Profile>
            <Logout onClick={signOut}>
                    <RiShutDownLine/>
            </Logout>
        </Container>
    )
}