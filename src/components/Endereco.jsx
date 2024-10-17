import { FormGroup } from "reactstrap";
import { Input } from "reactstrap";
import { Label } from "reactstrap";
import { Row } from "reactstrap";
import { Col } from "reactstrap";

export function Endereco({ objInput, handleInput }) {

    function handleChangeNumeros(e) {
        const regex = /[^\d]/g;
        e.target.value = e.target.value.replace(regex, "");
        handleChange(e);
    }

    function handleChangeLetras(e) {
        const regex = /[^a-zéáóíúãõàâêôç-\s]/i;
        e.target.value = e.target.value.replace(regex, "");
        handleChange(e);
    }

    function handleChange(e) {
        let newObjInput = objInput;
        if (e.target.id === "rua") {
            newObjInput.rua = e.target.value;
        }
        else if (e.target.id === "numero") {
            newObjInput.numeroCasa = e.target.value;
        }
        else if (e.target.id === "complemento") {
            newObjInput.complemento = e.target.value;
        }
        else if (e.target.id === "cep") {
            newObjInput.cep = e.target.value;
        }
        else if (e.target.id === "bairro") {
            newObjInput.bairro = e.target.value;
        }
        else if (e.target.id === "cidade") {
            newObjInput.cidade = e.target.value;
        }
        else {
            newObjInput.estado = e.target.value;
        }
        handleInput(newObjInput);
    }

    return (
        <>
            <Row>
                <Col md={8}>
                    <FormGroup>
                        <Label for="rua">Endereço:</Label>
                        <Input type="text" id="rua" name="rua" onChange={handleChangeLetras} placeholder="Nome da rua" required />
                    </FormGroup>
                </Col>
                <Col md={4}>
                    <FormGroup>
                        <Label for="numero">Numero:</Label>
                        <Input type="text" id="numero" name="numero" onChange={handleChangeNumeros} placeholder="Número da casa" required />
                    </FormGroup>
                </Col>
            </Row>
            <Row>
                <Col md={8}>
                    <FormGroup>
                        <Label for="complemento">Complemento:</Label>
                        <Input type="text" id="complemento" name="complemento" onChange={handleChange} placeholder="Complemento (opcional)" />
                    </FormGroup>
                </Col>
                <Col md={4}>
                    <FormGroup>
                        <Label for="cep">CEP:</Label>
                        <Input type="text" id="cep" name="cep" onChange={handleChangeNumeros} placeholder="CEP" required />
                    </FormGroup>
                </Col>
            </Row>
            <Row>
                <Col md={5}>
                    <FormGroup>
                        <Label for="bairro">Bairro:</Label>
                        <Input type="text" id="bairro" name="bairro" onChange={handleChangeLetras} placeholder="Nome do bairro" required />
                    </FormGroup>
                </Col>
                <Col md={5}>
                    <FormGroup>
                        <Label for="cidade">Cidade:</Label>
                        <Input type="text" id="cidade" name="cidade" onChange={handleChangeLetras} placeholder="Nome da cidade" required />
                    </FormGroup>
                </Col>
                <Col md={2}>
                    <FormGroup>
                        <Label for="estado">Estado:</Label>
                        <Input type="select" id="estado" name="estado" onChange={handleChange} >
                            <option value="AC">Acre</option>
                            <option value="AL">Alagoas</option>
                            <option value="AP">Amapá</option>
                            <option value="AM">Amazonas</option>
                            <option value="BA">Bahia</option>
                            <option value="CE">Ceará</option>
                            <option value="DF">Distrito Federal</option>
                            <option value="ES">Espírito Santo</option>
                            <option value="GO">Goiás</option>
                            <option value="MA">Maranhão</option>
                            <option value="MT">Mato Grosso</option>
                            <option value="MS">Mato Grosso do Sul</option>
                            <option value="MG">Minas Gerais</option>
                            <option value="PA">Pará</option>
                            <option value="PB">Paraíba</option>
                            <option value="PR">Paraná</option>
                            <option value="PE">Pernambuco</option>
                            <option value="PI">Piauí</option>
                            <option value="RJ">Rio de Janeiro</option>
                            <option value="RN">Rio Grande do Norte</option>
                            <option value="RS">Rio Grande do Sul</option>
                            <option value="RO">Rondônia</option>
                            <option value="RR">Roraima</option>
                            <option value="SC">Santa Catarina</option>
                            <option value="SP">São Paulo</option>
                            <option value="SE">Sergipe</option>
                            <option value="TO">Tocantins</option>
                            <option value="EX">Estrangeiro</option>
                        </Input>
                    </FormGroup>
                </Col>
            </Row>
        </>
    );
}

