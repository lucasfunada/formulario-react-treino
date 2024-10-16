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
        <>
            <label htmlFor="nascimento">Data de Nascimento:</label>
            <input type="date" id="nascimento" name="nascimento" onChange={handleChange} max={hoje} required/>
        </>
    );
}

export { Nascimento };