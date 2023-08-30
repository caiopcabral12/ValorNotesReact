import { Container, Form, Content } from './style.js';
import { Header } from '../../components/header';
import { Button } from '../../components/button'
import { Input } from '../../components/Input';
import { Section } from '../../components/section'
import { TextArea } from '../../components/TextArea/index.jsx';
import { NoteItem } from '../../components/NoteItem/index.jsx';
import { Link } from 'react-router-dom';


export function NewNote ( ) {
    return (
        <Container>
            <Header/>

            <Content>
                <main>
                    <Form>
                        <header>
                            <h1>Create Note</h1>
                            <Link to="/">
                                Back
                            </Link>
                        </header>
                        <Input placeholder="Title"/>
                        <TextArea title="Text Here" placeholder="Text Here"/>
            
                        <Section title=" Links "/>

                        <NoteItem placeholder="Link"  value="https://google.com"/>
                        <NoteItem placeholder=" New Link"  IsNew/>

                        <Section title="Tags"/>
                            <div className='tags'>
                                <NoteItem value="React"/>
                                <NoteItem placeholder=" New Tag"  IsNew/>
                            </div>

                        <Button title="Save Note"/>

                    </Form>
                </main>
            </Content>
            
            
            
        </Container>
    )
}