import { Container, Links, Content } from "./style"

import { Button } from "../../components/button";
import { Header } from "../../components/header"
import { Section } from "../../components/section";
import { Tags } from "../../components/tag";
import { ButtonText } from "../../components/ButtonText";

export function Details() {
  return(
    <Container>
      <Header/>
      <main>
        <Content>

          <ButtonText title="Delete Note"/>
  
          <h1>Intro</h1>
          <p>
            Lorem ipsum, dolor sit amet consectetur adipisicing elit. Adipisci, fuga necessitatibus ut dolore magni et aliquid rem culpa, unde nisi natus repudiandae dicta ullam alias vel, quos nulla qui amet.
            Lorem ipsum, dolor sit amet consectetur adipisicing elit. Suscipit nulla sed possimus dolor atque veritatis odit dolorum, quae, voluptatum corporis eveniet pariatur, nihil excepturi dolores commodi eum enim eligendi voluptatem?
          </p>

          <Section title="Intro">
            <div>
            ABABABA <p/>
            ABABAB <p/>
              ABABABAS <p/>
            ABABAB 
            </div>
          </Section>

          <Section title="Links">
          <Links>
            <li>
              <a href="https://www.youtube.com/watch?v=6pxBoe4fjDk">LINKS PATRAO</a>
            </li>
            <li>
              <a href="https://www.youtube.com/watch?v=6pxBoe4fjDk">LINKS PATRAO</a>
            </li>
            <li>
              <a href="https://www.youtube.com/watch?v=6pxBoe4fjDk">LINKS PATRAO</a>
            </li>
            <li>
              <a href="https://www.youtube.com/watch?v=6pxBoe4fjDk">LINKS PATRAO</a>
            </li>
          </Links> 
          </Section>

          <Section title="Tags">
            <Tags title="Tag 2" />
            <Tags title="Tag 3" />
            <Tags title="Tag 4" />
          </Section>
          
          <Button title="BACK" loading={false}/>

        </Content>
      </main>
         
      
      
   </Container>
    
  )
}