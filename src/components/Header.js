import React from "react";
import AppBar from "@material-ui/core/AppBar";
import Toolbar from "@material-ui/core/Toolbar";
import Button from "@material-ui/core/Button";
import styled from "styled-components";
import { goToRecipesListPage, goToLoginPage } from "../routes/coordinator";
import { useHistory } from "react-router-dom";

// ANOTAÇÃO: Repare que estou utilizando o styled-components para fazer alteração no estilo da Toolbar, porém pelo fato de Toolbar, não ser um tag padrão do HTML, eu devo passar ela como 'argumento' de styled.
const StyledToolbar = styled(Toolbar)`
  display: flex;
  flex-direction: row;
  justify-content: space-between;
`;
//ANOTAÇÃO: Repare que eu poderia passar as props de rightButtonText, como props.rightButtonText e props.setRightButtonText, porém foi decidido seguir o modelo de desestruturação, sendo assim fica da seguinte forma: ({rightButtonText, setRightButtonText}), ao invés de (props.rightButtonText, props.setRightButtonText).
export default function Header({ rightButtonText, setRightButtonText }) {
  const token = localStorage.getItem("token");
  const history = useHistory();

  //ANOTAÇÃO:Estou criando abaixo uma função da ação do botão, vinculado com LOGOUT. No caso, para registrar um logout, basta eu remover o token armazenado, passar o novo estado do botão que agora vai ser LOGIN e encaminhar o usuário para a página de LOGIN.Porém, caso o usuário não esteja logado, eu redireciono o mesmo para a página de LOGIN, diretamente.
  const rightButtonAction = () => {
    if (token) {
      localStorage.removeItem("token");
      setRightButtonText("Login");
      goToLoginPage(history);
    } else {
      goToLoginPage(history);
    }
  };
  return (
    <AppBar position="static">
      <StyledToolbar>
        <Button onClick={() => goToRecipesListPage(history)} color="inherit">
          Cookenu
        </Button>
        {/* ANOTAÇÃO: O nome do botão será exibido de acordo com a existência ou não do token. */}
        <Button onClick={rightButtonAction} color="inherit">
          {rightButtonText}
        </Button>
      </StyledToolbar>
    </AppBar>
  );
}
