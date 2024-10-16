export function Enviar(objInput) {

    verificaEmail(objInput.email);

    return (
        <input type="submit" value="Enviar" />
    );
}

function verificaEmail(email) {
    const regex = /[a-z0-9!#$%&'*+/=?^_`{|}~-]+(?:\.[a-z0-9!#$%&'*+/=?^_`{|}~-]+)*@(?:[a-z0-9](?:[a-z0-9-]*[a-z0-9])?\.)+[a-z0-9](?:[a-z0-9-]*[a-z0-9])?/g

    if (regex.test(email)) {
        alert("Email Inválido!");
    }
}