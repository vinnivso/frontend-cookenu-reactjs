import React from "react";
import Router from "../src/routes/Router";
import { ThemeProvider } from "@material-ui/styles";
import theme from "./constants/theme";
import styled, { createGlobalStyle } from "styled-components";
import Header from "./components/Header";
import { BrowserRouter } from "react-router-dom";

// ANOTAÇÃO: Criação, do estilo global de estilização.
const GlobalStyle = createGlobalStyle`
  html, body, #root {
  margin:0;
  padding:0;
  width:100%;
  min-height:100vh;
  overflow-x:hidden;
  }
`;

export default function App() {
  //ANOTAÇÃO: Estou puxando o token armazenado para fazer uma mudança intuitiva de LOGIN/LOGOUT no Header.
  const token = localStorage.getItem("token");

  //ANOTAÇÃO: Repare que no estado estou realizando um ternário para definição do estado em f(token).
  const [rightButtonText, setRightButtonText] = React.useState(token ? "Logout" : "Login");
  return (
    //ANOTAÇÃO: Estou passando a tag 'ThemeProvider', para que toda a estilização que estou criando e customizando, com base no Material-UI, seja aplicado para todas as páginas.'ThemeProvider', recebe um tema, no caso o 'theme' que foi criado em constants/theme.
    <ThemeProvider theme={theme}>
      <BrowserRouter>
        {/* ANOTAÇÃO: Chamada do estado global de estilização. */}
        <GlobalStyle />
        {/* ANOTAÇÃO: Estou chamando o Header aqui dentro do Router, porque o Header vai fazer parte do contexto de navegação, assim como os botões vão receber como argumento o history.Além disso, repare que estou passando o estado do botão por props, defini a props com o mesmo nome para não errar durante o caminho. */}
        <Header rightButtonText={rightButtonText} setRightButtonText={setRightButtonText}/>
        <Router setRightButtonText={setRightButtonText}/>
      </BrowserRouter>
    </ThemeProvider>
  );
}
