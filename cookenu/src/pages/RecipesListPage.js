import React from "react";
import useProtectedPage from "../hooks/useProtectedPage";
import styled from 'styled-components'
import { CircularProgress, Fab } from "@material-ui/core";
import RecipeCard from "../components/RecipeCard";
import useRequestData from "../hooks/useRequestData";
import {BASE_URL} from '../constants/urls'
import { Add } from "@material-ui/icons";
import { useHistory } from "react-router-dom";
import { goToAddRecipePage, goToRecipeDetailPage } from "../routes/coordinator";

export const RecipeListContainer = styled.div`
  display: flex;
  flex-direction: row;
  flex-wrap: wrap;
  justify-content:center;
  align-items: center;
  margin: 30px;
`

export const AddRecipeButton = styled(Fab)`
  //ANOTAÇÃO: Utilizei o '!important' para forçar uma aplicação.
  position: fixed !important;
  right: 20px;
  bottom: 20px;
  z-index: 3;
`

export default function RecipesListPage() {
  const history = useHistory()
  //ANOTAÇÃO: Para essa página foi estabelecido a execução do customHook de página neacessariamente limitada ao LOGIN (token salvo e ativo no localStorage). Para maiores detalhes verifique toda a lógica trabalhada nessa função, com base em seu endereçamento demonstrado pelo import.
  useProtectedPage();

  //ANOTAÇÃO: Estou definindo uma variável que vai armazenar a execução do customHook useRequestData, passando os parâmetros neccessários, no caso: Um estado inicial com array vazio, seguido da URL necessária para a requisição.
  const recipes = useRequestData([], `${BASE_URL}/recipe/feed`)

  //ANOTAÇÃO: Criando uma função que ao usuário clicar na imagem, será enviado diretamente para a página de detalhes da receita específica. No caso, estou passando como parâmetro dessa função uma 'id' e atribuindo ao goToRecipeDetailPage, dois argumentos, o history e o id, porque na API está /.../id.O history é obviamente passado, porque assim como todos os demais, eu estabeleci que receberiam o parâmetro history.
  const onClickCard = (id) => {
    goToRecipeDetailPage(history, id)
  }

  //ANOTAÇÃO: Estou realizando um map da requisição, onde vou mostrar um array de objetos na tela para o usuário. Por ora, somente armazenando os valores da requisição na variável recipeCards. Verifique que estou aproveitando para fazer uma condicional se vai ou não realzar um map, com base em recipes?, ou seja, se existe recipe, faça o .map do
  const recipeCards = recipes?.map(item => {
    return <RecipeCard key={item.recipe_id}title={item.title} image={item.image} onClick={() => onClickCard(item.recipe_id)}/>
  })
  return (
    <RecipeListContainer>
      {recipeCards.length > 0? recipeCards : <CircularProgress color={'inherit'}size={24}/>}
      <AddRecipeButton color={'primary'} onClick={()=> goToAddRecipePage(history)}>
        <Add/>
      </AddRecipeButton>
    </RecipeListContainer>
  );
}
