import { Container, Form, Content } from './style.js';
import { Header } from '../../components/header';
import { Button } from '../../components/button'
import { Input } from '../../components/Input';
import { Section } from '../../components/section'
import { TextArea } from '../../components/TextArea/index.jsx';
import { NoteItem } from '../../components/NoteItem/index.jsx';
import { Link } from 'react-router-dom';
import { useNavigate } from 'react-router-dom';
import { useState } from 'react';
import { api } from '../../service/api';


export function NewNote ( ) {
   const [title, setTitle] = useState("");
   const [description, setDescription] = useState("");  
   
   const [links, setLinks] = useState([]);
   const [newLinks, setNewLinks] = useState("");

   const [tags, setTags] = useState([]);
   const [newTags, setNewTags] = useState("");

   const navigate = useNavigate();


   function handleAddLink() {
    setLinks(prevState => [...prevState, newLinks]);
    setNewLinks("");
   }

   function handleRemoveLink(deleted) {
        setLinks(prevState => prevState.filter(link => link !== deleted));
   }

   function handleAddTag() {
    setTags(prevState => [...prevState, newTags]);
    setNewTags("");
   }

   function handleRemoveTag(deleted) {
    setTags(prevState => prevState.filter(tag => tag !== deleted));
}

   async function handleAddNote() {

    if(!title){
        return alert("Write a title!");
    }
    
    if(!description){
        return alert("Write a text!");
    }

    if(newLinks){
        return alert("Click + to save link!");
    }

    if(newTags){
        return alert("Click + to save tag!");
    };


  await api.post("/notes", {
        title,
        description,
        tags,
        links
     }); 

     alert("Note created!");
     navigate("/");
    };
    

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

                        <Input 
                        placeholder="Title"
                        onChange={e => setTitle(e.target.value)} />

                        <TextArea 
                        placeholder="Text Here"
                        onChange={e => setDescription(e.target.value)}/>
            
                        <Section title=" Links ">
                             {
                                    links.map((link, index) => (
                                    <NoteItem 
                                    key={String(index)}  
                                    value={link}
                                    onClick={() => handleRemoveLink(link)}/>
                                ))
                             }
                        <NoteItem 
                        IsNew
                        placeholder="New Link"  
                        value = {newLinks}
                        onChange={e => setNewLinks(e.target.value)}
                        onClick={handleAddLink}/>

                        </Section>

                        <Section title="Tags"/>
                            <div className='tags'>
                            {
                                    tags.map((tag, index) => (
                                    <NoteItem 
                                    key={String(index)}  
                                    value={tag}
                                    onClick={() => handleRemoveTag(tag)}/>
                                ))
                             }
                               
                                <NoteItem 
                                placeholder=" New Tag"  
                                IsNew
                                value={newTags}
                                onChange={e => setNewTags(e.target.value)}
                                onClick={handleAddTag}/>
                            </div>

                        <Button 
                        title="Save Note"
                        onClick={handleAddNote}
                        />

                    </Form>
                </main>
            </Content>
            
            
            
        </Container>
    )
}