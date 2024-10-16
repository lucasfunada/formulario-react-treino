import React from "react";
import { useState } from "react";
import { Nome } from "./components/Nome.jsx";
import { Email } from "./components/Email.jsx";
import { Nascimento } from "./components/Nascimento.jsx";
import { CPF } from "./components/CPF.jsx";
import { Endereco } from "./components/Endereco.jsx";
import { Enviar } from "./components/Enviar.jsx";

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
    primeiroNome: "",
    sobreNome: "",
    email: "",
    nascimento: "",
    cpf: "",
    rua: "",
    numeroCasa: "",
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
    
    e.preventDefault();

    if (!verificaEmail(objInput.email)) {
      alert("Email Inválido!");
      emailOK = false;
    }

    if (!verificaCPF(objInput.cpf)) {
      alert("CPF Inválido!");
      cpfOK = false;
    }
    
    if(emailOK === true && cpfOK === true)
      alert("Enviado com sucesso!");
  }

  function verificaEmail(email) {
    const regex = /[a-z0-9!#$%&'*+/=?^_`{|}~-]+(?:\.[a-z0-9!#$%&'*+/=?^_`{|}~-]+)*@(?:[a-z0-9](?:[a-z0-9-]*[a-z0-9])?\.)+[a-z0-9](?:[a-z0-9-]*[a-z0-9])?/g

    return regex.test(email);
  }

  function verificaCPF(cpf) {
    if (cpf.length === 14)
      return true;
    else
      return false;
  }

  return (
    <div className="App">
      <header className="App-header">
        <form onSubmit={verificaDados}>
          <Nome objInput={objInput} handleInput={setterObjInput} />
          <Email objInput={objInput} handleInput={setterObjInput} />
          <Nascimento objInput={objInput} handleInput={setterObjInput} />
          <CPF objInput={objInput} handleInput={setterObjInput} />
          <Endereco objInput={objInput} handleInput={setterObjInput} />
          <Enviar objInput={objInput} handleInput={setterObjInput} />
        </form>
      </header>
    </div>
  );
}

export default App;
