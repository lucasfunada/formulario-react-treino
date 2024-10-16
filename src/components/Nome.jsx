export function Nome({ objInput, handleInput }) {
    function handleChange(e) {
        const regex = /[^a-zA-Z\s]/g;
        e.target.value = e.target.value.replace(regex, "");
        let newObjInput = objInput;
        if (e.target.id === "primeiroNome")
            newObjInput.primeiroNome = e.target.value;
        else
            newObjInput.sobreNome = e.target.value;
        handleInput(newObjInput);
    }

    return (
        <>
            <label htmlFor="primeiroNome sobreNome">Nome:</label>
            <input type="text" id="primeiroNome" name="primeiroNome" onChange={handleChange} placeholder="Primeiro nome" required/>
            <input type="text" id="sobreNome" name="sobreNome" onChange={handleChange} placeholder="Sobrenome" required/>
        </>
    )
}