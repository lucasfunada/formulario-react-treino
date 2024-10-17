import { useState } from "react";
import { FormGroup } from "reactstrap";
import { Input } from "reactstrap";
import { Label } from "reactstrap";

export function CPF({ objInput, handleInput }) {
    const [cpf, setCpf] = useState("");
    const [valid, setValid] = useState(false);
    const [invalid, setInvalid] = useState(false);

    function handleChange(e) {
        const cpfFormatado = formataCpf(e.target.value);
        setCpf(cpfFormatado);

        if (verificaCpf(cpfFormatado)) {
            setValid(true);
            setInvalid(false);
        }
        else {
            setValid(false);
            setInvalid(true);
        }

        let newObjInput = objInput;
        newObjInput.cpf = cpfFormatado;
        handleInput(newObjInput);
    }

    return (
        <FormGroup>
            <Label for="cpf-input">CPF:</Label>
            <Input
                type="text"
                id="cpf-input"
                name="cpf-input"
                placeholder="Insira seu CPF"
                maxLength={14}
                value={cpf}
                valid={valid}
                invalid={invalid}
                onChange={handleChange}
                required
            />
        </FormGroup>
    );
}

function formataCpf(cpf) {
    cpf = cpf.replace(/[^\d]/g, "");

    return cpf.replace(/(\d{3})(\d{3})(\d{3})(\d{2})/, "$1.$2.$3-$4");
}

export function verificaCpf(cpf) {
    if (cpf.length === 14)
        return true;
    else
        return false;
}
