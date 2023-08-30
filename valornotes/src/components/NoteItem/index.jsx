import { Container  } from "./style";
import { RiCloseLine, RiAddLine} from 'react-icons/ri'


export function NoteItem ({IsNew, value, onClick, ...rest}) {
    return (
        <Container IsNew={IsNew}>
            <input 
               type="text"
               value = {value}
               readOnly= {IsNew} 
            {...rest}
            />

            <button
                type="button"
                onClick={onClick}>
                    { IsNew ? <RiAddLine/> : <RiCloseLine/>}
            </button>
        </Container>
    )
}