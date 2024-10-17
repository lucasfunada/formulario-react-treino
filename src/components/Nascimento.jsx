import { FormGroup } from "reactstrap";
import { Input } from "reactstrap";
import { Label } from "reactstrap";

function Nascimento({ objInput, handleInput }) {
    const date = new Date();
    let dia = date.getDate();
    let mes = date.getMonth() + 1;
    let ano = date.getFullYear();
    let hoje = `${ano}-${mes}-${dia}`;

    function handleChange(e) {
        let newObjInput = objInput;
        newObjInput.nascimento = e.target.value;
        handleInput(newObjInput);
    }

    return (
        <FormGroup>
            <Label htmlFor="nascimento">Data de Nascimento:</Label>
            <Input type="date" id="nascimento" name="nascimento" onChange={handleChange} max={hoje} required />
        </FormGroup>
    );
}

export { Nascimento };