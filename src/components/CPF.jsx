import { useState } from "react";
import { FormGroup } from "reactstrap";
import { Input } from "reactstrap";
import { Label } from "reactstrap";

export function CPF({ objInput, handleInput }) {
    const [cpf, setCpf] = useState('');

    function handleChange(e) {
        const cpfFormatado = formataCpf(e.target.value);
        setCpf(cpfFormatado);

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

export function verificaCPF(cpf) {
    if (cpf.length === 14)
        return true;
    else
        return false;
}
