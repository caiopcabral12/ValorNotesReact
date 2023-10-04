import {Container, Brand, Menu, Search, Content, NewNote} from './style';

import { Header } from '../../components/header';
import { ButtonText } from '../../components/ButtonText';
import { Input } from '../../components/Input';
import { Notes } from '../../components/Notes';
import { RiSearchLine, RiFileAddLine } from "react-icons/ri";
import { Section } from '../../components/section'



export function Home () {
    return(
        <Container>
            <Brand>
                <h1>
                    ValorNotes
                </h1>
            </Brand>

            <Header/>

            <Menu>
                <ButtonText title="All"/>

                <ButtonText title="Ranked Matchs"/>

                <ButtonText title="Gun Stats"/>
               
                <ButtonText title="Map Stats"/>

                <ButtonText title="Champions Stats"/>
                    
            </Menu>

            <Search>
                <Input placeholder="Search for Notes" Icon={RiSearchLine}/>
            </Search>

            <Content>
                <Section title="My Notes">
                    <Notes data={{
                        title:"Raze Clips", 
                        tags: [
                        {id: '1', name: 'Highlights'},
                        {id: '2',name: 'Void'}
                        ]
                        }}
                    />

                </Section>
            </Content>

            <NewNote to="NewNote">
               <RiFileAddLine/>
                Create Note
            </NewNote>
        </Container>
    )
}