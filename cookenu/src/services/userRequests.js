import axios from "axios";
import { BASE_URL } from "../constants/urls";
import { goToRecipesListPage } from "../routes/coordinator";

// ANOTAÇÃO: Estar logado no FRONT-END, significa ter um token guardado no localStorage. Verificando na API, encontramos 2 argumentos! O primeiro seria a URL da requisiçã e o segundo seria o body que já está no formato certinho em nosso 'form'. Porém nesse caso, estou estabelecendo como body mesmo, por convenção.
//ANOTAÇÃO: Os parâmetros de login(), os parâmetros foram definidos como, body, clear e history. No caso da página de LOGIN, podemos estabelecer como argumentos (form, clear,history). O form vai ser nosso  body, como já bem adequado com o modelo da API e o clear, será a chamada da execução clear dentro do useForm, que está sendo importado dentro da página de Login.
//ANOTAÇÃO: Estou passando o parâmetro de Loading na função responsável pelo login do usuário também.
export const login = (
  body,
  clear,
  history,
  setRightButtonText,
  setIsLoading
) => {
  //ANOTAÇÃO: Estou alterando o estado diretamente ao inciar a requisição de Login, ou seja. Começou a execução da função de Login, ele seta o Login para true.
  setIsLoading(true);
  axios
    .post(`${BASE_URL}/user/login`, body)
    .then((res) => {
      //ANOTAÇÃO: Sempre estabelecer o setItem para armazenar informação no localStorage, seguido da definição do 'parâmetro'('nome', localização da informação que deseja armazenar).
      localStorage.setItem("token", res.data.token);
      clear();
      //ANOTAÇÃO: Estou atualizando o estado do Loading para false, porque acabou de carregar a requisição.
      setIsLoading(false);
      //ANOTAÇÃO: Em caso de sucesso no LOGIN, o usuário será redirecionado para a página de Feed de Receitas.
      goToRecipesListPage(history);
      setRightButtonText("Logout");
    })
    .catch((err) => {
      //ANOTAÇÃO: Estou atualizando o estado do Loading para false, porque acabou de carregar a requisição.
      setIsLoading(false);
      alert(err.response.data.message);
    });
};

//ANOTAÇÃO: Os parâmetros de signUp(), os parâmetros foram definidos como, body, clear e history. No caso da página de SIGNUP, podemos estabelecer como argumentos (form, clear,history). O form vai ser nosso  body, como já bem adequado com o modelo da API e o clear, será a chamada da execução clear dentro do useForm, que está sendo importado dentro da página de SIGNUP.
//ANOTAÇÃO: Estou passando o parâmetro de Loading na função responsável pelo signup do usuário também.
export const signUp = (
  body,
  clear,
  history,
  setRightButtonText,
  setIsLoading
) => {
  //ANOTAÇÃO: Estou alterando o estado diretamente ao inciar a requisição de Signup, ou seja. Começou a execução da função de Signup, ele seta o Signup para true.
  setIsLoading(true);
  axios
    .post(`${BASE_URL}/user/signup`, body)
    .then((res) => {
      //ANOTAÇÃO: Estarei guardando o token criado, no localStorage, além disso estou fazendo com que o Header já fique com LOGOUT, após o sucesso no registro de novo usuário. Dessa forma, vai aparecer no HEADER a opção de LOGOUT e não mais de LOGIN (Log automático).
      localStorage.setItem("token", res.data.token);
      clear();
       //ANOTAÇÃO: Estou atualizando o estado do Loading para false, porque acabou de carregar a requisição.
      setIsLoading(false);
      alert('Usuário cadastrado com sucesso!')
      goToRecipesListPage(history);
      setRightButtonText("Logout");
    })
    .catch((err) => {
       //ANOTAÇÃO: Estou atualizando o estado do Loading para false, porque acabou de carregar a requisição.
      setIsLoading(false);
      alert("Erro ao realizar cadastro, verifique as informações inseridas");
    });
};
