import React  from 'react'
import {useHistory} from 'react-router-dom'
import { goToRecipesListPage } from '../routes/coordinator'

// ANOTAÇÃO: Estamos criando um Hook custom, que terá a função de  mostrar ao usuário as páginas que não necessitam de LOGIN, mas ao mesmo tempo protegendo todas elas.
export default function useUnprotectedPage() {
    //ANOTAÇÃO: Primeiro será verificado se o usuário pode estar nessa página ou não, caso contrário será executado o processo.
    const history = useHistory()
    //ANOTAÇÃO: Repare que foi utilizado o useLayoutEffect, ele serve para fazer a verificação anteriormente, antes de carregar a página. Isso evita com que uma página que não deveria ser acessada, seja flickada na tela e após isso carregue a condição de análise lógica para decidir se deve ou não demonstrar o conteúdo daquela página.
    React.useLayoutEffect (() => {
        //ANOTAÇÃO: Estou guardando a informação do token que está armazenada no localStorage, para isso, eu preciso executar como: localStorage.getItem('nomedefinido em setItem').
        const token = localStorage.getItem('token')
        //ANOTAÇÃO: Se existe token, o usuário será redirecionado para a página de LOGIN.
        if(token){
            goToRecipesListPage(history)
        }
    }, [history])
}