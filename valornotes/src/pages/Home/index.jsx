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

                    <Notes data={{
                        title:"Mistakes", 
                        tags: [
                        {id: '3', name: 'Learning'},
                        {id: '4',name: 'Void'}
                        ]
                        }}
                    />

                    <Notes data={{
                        title:"Season Goals", 
                        tags: [
                        {id: '5', name: 'Learning'},
                        {id: '6',name: 'Notations'}
                        ]
                        }}
                    />

                    <Notes data={{
                        title:"Wins and Losses", 
                        tags: [
                        {id: '1', name: 'Stats'},
                        {id: '2',name: 'Notations'}
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