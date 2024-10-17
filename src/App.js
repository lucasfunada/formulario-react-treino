import React from "react";
import { useState } from "react";

import { Form } from "reactstrap";
import { Container } from "reactstrap";
import { Col } from "reactstrap";
import { Row } from "reactstrap";

import { Nome } from "./components/Nome.jsx";
import { Email } from "./components/Email.jsx";
import { Nascimento } from "./components/Nascimento.jsx";
import { CPF } from "./components/CPF.jsx";
import { Endereco } from "./components/Endereco.jsx";
import { Enviar } from "./components/Enviar.jsx";
import { verificaEmail } from "./components/Email.jsx"
import { verificaCpf } from "./components/CPF.jsx";
import { verificaCep } from "./components/Endereco.jsx";

/*
  formulario cadastro pessoa

  nome
  email
  nascimento
  cpf
  endereço
    rua, cidade, estado, numero casa
  
*/

function App() {

  const [objInput, setObjInput] = useState({
    nome: "",
    email: "",
    nascimento: "",
    cpf: "",
    rua: "",
    numeroCasa: "",
    complemento: "",
    cep: "",
    bairro: "",
    cidade: "",
    estado: "AC"
  });

  function setterObjInput(obj) {
    setObjInput(obj);
    console.log(objInput);
  }

  function verificaDados(e) {
    let emailOK = true;
    let cpfOK = true;
    let cepOK = true;

    e.preventDefault();

    if (!verificaEmail(objInput.email)) {
      alert("Email Inválido!");
      emailOK = false;
    }

    if (!verificaCpf(objInput.cpf)) {
      alert("CPF Inválido!");
      cpfOK = false;
    }

    if (!verificaCep(objInput.cep)) {
      alert("CEP Inválido!");
      cepOK = false;
    }

    if (emailOK === true && cpfOK === true && cepOK === true)
      alert("Enviado com sucesso!");
  }

  return (
    <div className="App">
      <main className="App-main">
        <Container className="mt-2 mb-2">
          <Row>
            <Col>
              <Form onSubmit={verificaDados}>
                <Nome objInput={objInput} handleInput={setterObjInput} />
                <Email objInput={objInput} handleInput={setterObjInput} />
                <Nascimento objInput={objInput} handleInput={setterObjInput} />
                <CPF objInput={objInput} handleInput={setterObjInput} />
                <Endereco objInput={objInput} handleInput={setterObjInput} />
                <Enviar objInput={objInput} handleInput={setterObjInput} />
              </Form>
            </Col>
          </Row>
        </Container>
      </main>
    </div>
  );
}

export default App;
