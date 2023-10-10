import { useState } from "react"
import { Container, Form, ProfilePic} from "./style"
import { Input } from "../../components/Input"
import { RiMailLine, RiLockPasswordLine, RiArrowGoBackLine, RiUserLine, RiCamera3Line } from "react-icons/ri"
import { Button } from '../../components/button'
import { Link } from "react-router-dom";

import avatarPlaceholder from "../../assets/user-male-circle--v1.png"

import { api } from "../../service/api";

import { useAuth } from '../../hooks/auth';

export function User() {
    const { user, updateProfile } = useAuth();

    const [name, setName] = useState(user.name);
    const [email, setEmail] = useState(user.email);
    const [passwordOld, setPasswordOld] = useState();
    const [passwordNew, setPasswordNew] = useState();

    const avatarURL = user.avatar ? `${api.defaults.baseURL}/files/${user.avatar}` : avatarPlaceholder

    const [avatar, setAvatar] = useState(avatarURL);
    const [avatarFile, setAvatarFile] = useState(null);


    async function handleUpdate() {
        const user = {
            name,
            email,
            password: passwordNew,
            old_password: passwordOld,
        }
        await updateProfile({user, avatarFile});
    }

    function handleChangeAvatar(event) {
        const file = event.target.files[0];
        setAvatarFile(file);

        const imagePreview = URL.createObjectURL(file); 
        setAvatar(imagePreview);
    }
    
    return(
        <Container> 
            <header>
                <Link to={-1}>
                        <RiArrowGoBackLine/>
                </Link>
                
            </header>
            
            <Form>
                <ProfilePic>
                    <img 
                      src={avatar}
                      alt="Profile Pic" />
                
                    <label htmlFor="ProfilePic">
                        <RiCamera3Line/>

                        <Input
                        id="ProfilePic"
                        type="file"
                        onChange={handleChangeAvatar}
                        />

                    </label>
                </ProfilePic>

               <Input 
               placeholder="Name" 
               type="text"
               Icon={RiUserLine}
               value={name}
               onChange={e => setName(e.target.value)}/>

               <Input 
               placeholder="E-mail" 
               Icon={RiMailLine}
               value={email}
               onChange={e => setEmail(e.target.value)}/>

               <Input 
               placeholder="Current Password" 
               Icon={RiLockPasswordLine}
               onChange={e => setPasswordOld(e.target.value)}/>

               <Input 
               placeholder="New Password" 
               Icon={RiLockPasswordLine}
               onChange={e => setPasswordNew(e.target.value)}/>
               
               <Button title="Save Info"
               onClick={handleUpdate}/>
           </Form>

        </Container>
    )
}