import { Button, CircularProgress, TextField } from "@material-ui/core";
import React from "react";
import styled from "styled-components";
import logo from "../assets/logo.png";
import useForm from "../hooks/useForm";
import { useHistory } from "react-router-dom";
import useUnprotectedPage from "../hooks/useUnprotectedPage";
import { signUp } from "../services/userRequests";

const ScreenContainer = styled.div`
  display: flex;
  flex-direction: column;
  align-items: center;
  width: 100vw;
  margin-top: 10vh;
`;

const InputsContainer = styled.div`
  display: flex;
  flex-direction: column;
  width: 80vw;
  max-width: 450px;
  align-items: center;
  margin-bottom: 20px;
`;

const LogoImage = styled.img`
  width: 70vw;
  max-width: 350px;
`;

export default function SignUpPage({setRightButtonText}) {
  //ANOTAÇÃO: Para essa página foi estabelecido a execução do customHook de página não neacessariamente limitada ao LOGIN. Para maiores detalhes verifique toda a lógica trabalhada nessa função, com base em seu endereçamento demonstrado pelo import.
  useUnprotectedPage();
  const history = useHistory();
  // ANOTAÇÃO: Repare que estou chamando o custom hook, criado na pasta hooks, no caso o useForm. Além DirectionsSubwayOutlined, estou passando para ele o estado inicial do mesmo.Lembre-se de sempre passar os mesmos nomes, se não, não irá funcionar.
  const [form, onChange, clear] = useForm({
    name: "",
    email: "",
    password: "",
  });
  const [isLoading,setIsLoading] = React.useState(false)

  // ANOTAÇÃO: Criei essa função para evitar o comportamente padrão do formulário, qual seria? O formulário iria colocar na tela de login do navegador o e-mail do usuário e sua senha! Um absurdo, isso não pode acontecer! Para fazer isso é chamamarmos nosso querido '.preventDefault()'. Ah, aliás, lembre-se que o mesmo sempre recebe um 'event', no caso só identifiquei com o 'e'.
  const onSubmitForm = (e) => {
    e.preventDefault();
    // ANOTAÇÃO: A função de 'signUp' está sendo importada na linha 8, para mais detalhes de como funciona cada etapa da requisição, acesse o local indicado. Estou passando mais um argumento (history), porque desejo que só mude de tela em caso de sucesso do registro.
    signUp(form, clear, history,setRightButtonText,setIsLoading);
  };
  return (
    <ScreenContainer>
      <LogoImage src={logo} />
      <InputsContainer setRightButtonText={setRightButtonText}>
        {/* ANOTAÇÃO: Sempre que desejar validar um formulário, é necessário realizar isso na tag de 'form' com o onSubmit. */}
        <form onSubmit={onSubmitForm}>
          <TextField
            // ANOTAÇÃO:Sempre coloque o mesmo nome utilizado na API
            name={"name"}
            value={form.name}
            onChange={onChange}
            label={"Nome"}
            type={"text"}
            required
            // ANOTAÇÃO: As propriedades abaixo são específicas do MATERIAL-UI.
            fullWidth
            margin={"normal"}
          />
          <TextField
            // ANOTAÇÃO:Sempre coloque o mesmo nome utilizado na API
            name={"email"}
            value={form.email}
            onChange={onChange}
            label={"E-mail"}
            type={"email"}
            required
            // ANOTAÇÃO: As propriedades abaixo são específicas do MATERIAL-UI.
            fullWidth
            margin={"normal"}
          />
          <TextField
            // ANOTAÇÃO:Sempre coloque o mesmo nome utilizado na API
            name={"password"}
            value={form.password}
            onChange={onChange}
            label={"Password"}
            type={"password"}
            required
            // ANOTAÇÃO: As propriedades abaixo são específicas do MATERIAL-UI.
            fullWidth
            margin={"normal"}
          />
          {/* ANOTAÇÃO: Repare que coloquei o type do button como, submit. */}
          <Button
            fullWidth
            variant={"contained"}
            color={"primary"}
            margin={"normal"}
            type={"submit"}
          >
            {isLoading? <CircularProgress color={'inherit'}size={24}/> : <>Fazer Cadastro</>}
          </Button>
        </form>
      </InputsContainer>
    </ScreenContainer>
  );
}
