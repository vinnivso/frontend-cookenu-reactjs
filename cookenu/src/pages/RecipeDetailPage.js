import React from "react";
import useProtectedPage from "../hooks/useProtectedPage";
import { useParams } from "react-router-dom";
import { BASE_URL } from "../constants/urls";
import useRequestData from "../hooks/useRequestData";
import styled from "styled-components";
import { CircularProgress, Typography } from "@material-ui/core";

const RecipeImage = styled.img`
  width: 60vw;
  max-width: 600px;
  min-width: 300px;
  border-radius: 10px;
  margin-bottom: 20px;
`;

const ScreenContainer = styled.div`
  display: flex;
  align-items: center;
  justify-content: center;
  margin: 30px;
`;

const RecipeContainer = styled.div`
  display: flex;
  flex-direction: column;
  width: 60vw;
  max-width: 600px;
  min-width: 300px;
`;

export default function RecipeDetailPage() {
  //ANOTAÇÃO: Para essa página foi estabelecido a execução do customHook de página neacessariamente limitada ao LOGIN (token salvo e ativo no localStorage). Para maiores detalhes verifique toda a lógica trabalhada nessa função, com base em seu endereçamento demonstrado pelo import.
  useProtectedPage();

  //ANOTAÇÃO: Estou criando uma função para buscar uma informação desejada dentro de uma URL, no caso, vou buscar somente pela id.
  const params = useParams();
  //ANOTAÇÃO: Ao realizar um console.log(params) para verificar como o params está vindo, descobri que o mesmo está vindo em forma de um objeto, onde você possui uma propriedade chamada id, com respectivo valor.

  //ANOTAÇÃO: Levando em consideração os pontos levantados acima, vamos fazer o seguinte: Realizar a requisição da informação com o endpoint aplicável, chamar nossa BASE_URL e passar /recipe/id, como demonstrado na API, porém no id, devemos acessar a estrutura observada no params anteriormente ao realizar um console.log(params), logo, será params.id.
  const recipe = useRequestData([], `${BASE_URL}/recipe/${params.id}`)[0];
  //ANOTAÇÃO: Utilizei o estado inicial como um array vazio, o motivo é pq a API está retornando um array. Além disso, observe que passei como primeiro elemento da array [0], isso porque essa array sempre me dá na primeira posição as informações do item específico.

  return (
    <ScreenContainer>
      {recipe ?
        <RecipeContainer>
          <RecipeImage src={recipe.image} />
          <Typography
            gutterBottom
            align={"center"}
            variant={"h5"}
            color={"primary"}
          >
            {recipe.title}
          </Typography>
          <Typography align={"center"}>{recipe.description}</Typography>
        </RecipeContainer>
       : <CircularProgress color={'inherit'}size={24}/>}
    </ScreenContainer>
  );
}
