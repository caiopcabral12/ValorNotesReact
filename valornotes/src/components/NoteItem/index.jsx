import { Container  } from "./style";
import { RiCloseLine, RiAddLine} from 'react-icons/ri'


export function NoteItem ({IsNew = false, value, onClick, ...rest}) {
    return (
        <Container IsNew={IsNew}>
            <input 
               type="text"
               value = {value}
               readOnly= {!IsNew} 
            {...rest}
            />

            <button
                type="button"
                onClick={onClick}
                className={IsNew ? "button-add" : "button-delete"}
                >
           
            { IsNew ? <RiAddLine/> : <RiCloseLine/>} 
            </button>
        </Container>
    )
}