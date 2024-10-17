import { useState } from "react";
import { FormGroup } from "reactstrap";
import { Input } from "reactstrap";
import { Label } from "reactstrap";

export function Email({ objInput, handleInput }) {
    const [valid, setValid] = useState(false);
    const [invalid, setInvalid] = useState(false);

    function handleChange(e) {
        let newObjInput = objInput;
        newObjInput.email = e.target.value;
        handleInput(newObjInput);

        if (verificaEmail(e.target.value)) {
            setValid(true);
            setInvalid(false);
        }
        else {
            setValid(false);
            setInvalid(true);
        }

    }

    return (
        <FormGroup>
            <Label for="email">Email:</Label>
            <Input
                type="email"
                id="email"
                name="email"
                placeholder="Insira seu email"
                onChange={handleChange}
                valid={valid}
                invalid={invalid}
                required />
        </FormGroup>
    );
}

export function verificaEmail(email) {
    const regex = /[a-z0-9!#$%&'*+/=?^_`{|}~-]+(?:\.[a-z0-9!#$%&'*+/=?^_`{|}~-]+)*@(?:[a-z0-9](?:[a-z0-9-]*[a-z0-9])?\.)+[a-z0-9](?:[a-z0-9-]*[a-z0-9])?/g

    return regex.test(email);
}