export function Email({ objInput, handleInput }) {

    function handleChange(e) {
        let newObjInput = objInput;
        newObjInput.email = e.target.value;
        handleInput(newObjInput);
    }

    return (
        <>
            <label htmlFor="email">Email:</label>
            <input type="text" id="email" name="email" placeholder="Insira seu email" onChange={handleChange} required/>
        </>
    );
}

