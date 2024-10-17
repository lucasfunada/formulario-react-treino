import { FormGroup } from "reactstrap";
import { Input } from "reactstrap";
import { Label } from "reactstrap";


export function Nome({ objInput, handleInput }) {
    function handleChange(e) {
        const regex = /[^a-zéáóíúãõàâêôç-\s]/i;
        e.target.value = e.target.value.replace(regex, "");
        let newObjInput = objInput;
        newObjInput.nome = e.target.value;
        handleInput(newObjInput);
    }

    return (
        <FormGroup>
            <Label htmlFor="nome">Nome completo:</Label>
            <Input type="text" id="nome" name="primeiroNome" onChange={handleChange} placeholder="Insira seu nome completo" required />
        </FormGroup>
    )
}