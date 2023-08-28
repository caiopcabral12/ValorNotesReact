import { Tags } from "../tag";
import { Container } from "./style";

export function Notes ({data, ...rest}) {
    return(
        <Container type="button" {...rest}>
            <h1>{data.title}</h1>

            {
                data.tags &&
                <footer>
                    {
                    data.tags.map( tag => <Tags key={tag.id} title={tag.name}/>)
                    }
                </footer>
            }
        </Container>
    )
}