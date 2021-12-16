import React  from 'react'
import {useHistory} from 'react-router-dom'
import { goToLoginPage, goToRecipesListPage } from '../routes/coordinator'

// ANOTAÇÃO: Estamos criando um Hook custom, que terá a função de  restringir o acesso do usuário em determinadas páginas. Ou seja, caso o usuário não tenha feito o login, não será demonstrado para o mesmo, algumas páginas que necessitam de Login.
export default function useProtectedPage() {
    //ANOTAÇÃO: Primeiro será verificado se o usuário está nesse página com base no histórico, caso a pessoa possa não estar na página, ele automaticamente muda a página.
    const history = useHistory()
    //ANOTAÇÃO: Repare que foi utilizado o useLayoutEffect, ele serve para fazer a verificação anteriormente, antes de carregar a página. Isso evita com que uma página que não deveria ser acessada, seja flickada na tela e após isso carregue a condição de análise lógica para decidir se deve ou não demonstrar o conteúdo daquela página.
    React.useLayoutEffect (() => {
        //ANOTAÇÃO: Estou guardando a informação do token que está armazenada no localStorage, para isso, eu preciso executar como: localStorage.getItem('nomedefinido em setItem').
        const token = localStorage.getItem('token')
        //ANOTAÇÃO: Se não existe token, o usuário será redirecionado para a página de LOGIN.
        if(!token){
            goToLoginPage(history)
        }
    }, [history])
}