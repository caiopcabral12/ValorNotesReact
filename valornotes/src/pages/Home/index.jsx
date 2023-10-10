import {Container, Brand, Menu, Search, Content, NewNote} from './style';

import { Header } from '../../components/header';
import { ButtonText } from '../../components/ButtonText';
import { Input } from '../../components/Input';
import { Notes } from '../../components/Notes';
import { RiSearchLine, RiFileAddLine } from "react-icons/ri";
import { Section } from '../../components/section'
import { useEffect } from 'react';
import { useState } from 'react';
import { api } from '../../service/api';
import { useNavigate } from 'react-router-dom';


export function Home () {
    const [search, setSearch] = useState("");
    const [tags, setTags] = useState([]);
    const [tagsSelected, setTagsSelected] = useState([]);
    const [notes, setNotes] = useState([]);
    
    const navigate = useNavigate();
    
    function handleTagSelected(tagName) {
        if(tagName === "all") {
            return setTagsSelected([]);
        }

        const alreadySelected = tagsSelected.includes(tagName)
         
        if(alreadySelected) {
            const filteredTags = tagsSelected.filter(tag => tag !== tagName);
            setTagsSelected(filteredTags);

        }  else {
            setTagsSelected(prevState => [...prevState, tagName]);
        }    
    }
    
    function handleDetails(id){
         navigate(`/details/${id}`);
    }

    useEffect(() => {
        async function fetchTags() {
            const response = await api.get("/tags");
            setTags(response.data);
    }

      fetchTags();
    },[])

    useEffect(() => {
        async function fetchNotes(){
            const response = await api.get(`/notes?title=${search}&tags=${tagsSelected}`);
            setNotes(response.data);
        }

        fetchNotes();
    }, [tagsSelected, search])

    return(
        <Container>
            <Brand>
                <h1>
                    ValorNotes
                </h1>
            </Brand>

            <Header/>

            <Menu>
                <li>
                    <ButtonText 
                      title="All"
                      onClick={() => handleTagSelected("all")}
                      isActive={tagsSelected.length === 0}
                     
                    />
                    </li>

                 
                        { 
                  tags && tags.map(tag => (
                    <li key={String(tag.id)}>
                    <ButtonText 
                      title={tag.name}
                      onClick={() => handleTagSelected(tag.name)}
                      isActive={tagsSelected.includes(tag.name)}

                     />
                     </li>
                  ))
                }
                  
                  
            </Menu>

            <Search>
                <Input 
                placeholder="Search for Notes" 
                onChange={(e) => setSearch(e.target.value)}
                Icon={RiSearchLine}/>
            </Search>

            <Content>
                <Section title="My Notes">
                    {
                        notes.map(note => (
                        <Notes 
                        key={String(note.id)}
                        data={note}
                        onClick={() => handleDetails(note.id)}
                    />
                     ))
                     }

                </Section>
            </Content>

            <NewNote to="NewNote">
               <RiFileAddLine/>
                Create Note
            </NewNote>
        </Container>
    )
}