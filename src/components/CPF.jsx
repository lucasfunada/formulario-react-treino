import { useState } from "react";

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
        <>
            <label htmlFor="cpf-input">CPF:</label>
            <input
                type="text"
                id="cpf-input"
                name="cpf-input"
                placeholder="Insira seu CPF"
                maxLength={14}
                value={cpf}
                onChange={handleChange}
                required
            />
        </>

    );
}

export function formataCpf(cpf) {
    cpf = cpf.replace(/[^\d]/g, "");

    return cpf.replace(/(\d{3})(\d{3})(\d{3})(\d{2})/, "$1.$2.$3-$4");
}