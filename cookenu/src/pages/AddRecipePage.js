import React from "react";
import useProtectedPage from "../hooks/useProtectedPage";
import styled from "styled-components";
import { Button, CircularProgress, TextField, Typography } from "@material-ui/core";
import { useHistory } from "react-router-dom";
import useForm from "../hooks/useForm";
import { createRecipe } from "../services/recipeRequests";


export const ScreenContainer = styled.div`
  display: flex;
  flex-direction: column;
  align-items: center;
  width: 100vw;
`;

export const InputsContainer = styled.div`
  display: flex;
  flex-direction: column;
  width: 80vw;
  max-width: 450px;
  align-items: center;
  margin-bottom: 20px;
`;

export const AddRecipeFormContainer = styled.div`
  display: flex;
  flex-direction: column;
  width: 80vw;
  max-width: 450px;
  align-items: center;
  margin-bottom: 20px;
`;

export const RecipeContainer = styled.div`
  display: flex;
  flex-direction: column;
  align-items: center;
  margin-top: 10vh;
`;

export default function AddRecipePage() {
  //ANOTAÇÃO: Para essa página foi estabelecido a execução do customHook de página neacessariamente limitada ao LOGIN (token salvo e ativo no localStorage). Para maiores detalhes verifique toda a lógica trabalhada nessa função, com base em seu endereçamento demonstrado pelo import.
  useProtectedPage();

  const history = useHistory()
  //ANOTAÇÃO:O que nosso useForm retorna? Ele retorna, um estado de form, onChange e a função clear. Depois disso, quais serão os valores iniciais que devem ser estabelecidos para o useForm nessa página? Seguindo a API, é um objeto que vai possuir três propriedades: title,description,image. Sempre coloque o mesmo nome, de acordo com a API.
  const [form, onChange, clear] = useForm({title:'', description:'', image:''})

  const [isLoading,setIsLoading] = React.useState(false)

  //ANOTAÇÃO: Mais uma vez chamando e.preventDefault() para evitar o comportamente padrão do form.
  const onSubmitForm = (e) => {
    e.preventDefault()
    //ANOTAÇÃO: Quando o usuário clicar no botão de criar receita e validação do formulário for positiva, logo ele vai executar a função de criar receita.O body vai ser o form e clear é o próprio clear.
    createRecipe(form, clear, setIsLoading)
  }
  return (
    <ScreenContainer>
      <RecipeContainer>
        <Typography
          gutterBottom
          variant={"h4"}
          align={"center"}
          color={"textPrimary"}
        >
          Adicionar Nova Receita
        </Typography>
        <form onSubmit={onSubmitForm}>
          <AddRecipeFormContainer>
            <InputsContainer>
              <TextField
                name={"title"}
                // ANOTAÇÃO: Os valores sempre serão aquilo que foi estabelecido no estado, seguido de sua propriedade. "Sempre"
                value={form.title}
                onChange={onChange}
                label={"Título"}
                variant={"outlined"}
                fullWidth
                required
                autoFocus
                margin={"normal"}
              />
              <TextField
                name={"description"}
                // ANOTAÇÃO: Os valores sempre serão aquilo que foi estabelecido no estado, seguido de sua propriedade. "Sempre"
                value={form.description}
                onChange={onChange}
                label={"Descrição"}
                variant={"outlined"}
                fullWidth
                required
                margin={"normal"}
              />
              <TextField
                name={"image"}
                // ANOTAÇÃO: Os valores sempre serão aquilo que foi estabelecido no estado, seguido de sua propriedade. "Sempre". Atente-se ao detalhe que a image é uma URL, como demonstrada na API.
                value={form.image}
                onChange={onChange}
                label={"Foto"}
                variant={"outlined"}
                fullWidth
                required
                margin={"normal"}
              />
            </InputsContainer>
            <Button
              color={"primary"}
              variant={"contained"}
              type={"submit"}
              fullWidth
            >{isLoading? <CircularProgress color={'inherit'}size={24}/> : <>Adicionar Receita </>}</Button>
          </AddRecipeFormContainer>
        </form>
      </RecipeContainer>
    </ScreenContainer>
  );
}
