import { Container } from "./style"

export function Tags({title, ...rest}){
    return(
        <Container type="button" {...rest}>
           {title}
        </Container>
    )

}