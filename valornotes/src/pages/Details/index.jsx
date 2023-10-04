import { Container, Links, Content } from "./style"

import { Button } from "../../components/button";
import { Header } from "../../components/header"
import { Section } from "../../components/section";
import { Tags } from "../../components/tag";
import { ButtonText } from "../../components/ButtonText";
import { useParams } from "react-router-dom";
import { useState, useEffect  } from "react";
import { api } from "../../service/api";

export function Details() {

  const [data, setData] = useState(null);

  const params = useParams(); 

  useEffect(() => {
    async function fetchNote() {
      const response = await api.get(`/notes/${params.id}`);
      setData(response.data);
    }

    fetchNote();
  }, [])

  return(
    <Container>
      <Header/>

      {
        data &&
      <main>
        <Content>

          <ButtonText title="Delete Note"/>
  
          <h1>
            {data.title}
          </h1>
          <p>
            {data.description}
          </p>

             { 
             data.links &&
          <Section title="Links">
            <Links>
          {
               data.links.map(link => (
                 <li
                 key={String(link.id)}>

                <a href={link.url}>
                  {link.url}
                </a>
              </li>
               )) 
           }    
            </Links> 
          </Section>
              }

              {
                data.tags &&
                <Section title="Tags"> 
                {
                data.tags.map(tag => (
                   <Tags 
                   key={String(tag.id)}
                   title={tag.name} 
                   />
                ))
                
                }
                </Section>
              }
          
          
          <Button title="BACK" />

        </Content>
      </main>
      }   
      
      
   </Container>
    
  )
}