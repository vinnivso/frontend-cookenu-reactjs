import React from 'react'
import {Switch, Route} from 'react-router-dom'
import AddRecipePage from '../pages/AddRecipePage'
import ErrorPage from '../pages/ErrorPage'
import LoginPage from '../pages/LoginPage'
import RecipeDetailPage from '../pages/RecipeDetailPage'
import RecipesListPage from '../pages/RecipesListPage'
import SignUpPage from '../pages/SignUpPage'

export default function Router({setRightButtonText}) {
    return (
            <Switch>
                <Route exact path='/login'>
                    <LoginPage setRightButtonText={setRightButtonText}/>
                </Route>
                <Route exact path='/cadastro'>
                    <SignUpPage setRightButtonText={setRightButtonText}/>
                </Route>
                <Route exact path='/'>
                    <RecipesListPage/>
                </Route>
                <Route exact path='/adicionar-receita'>
                    <AddRecipePage/>
                </Route>
                 {/* ANOTAÇÃO: Definição da variável no Route de RecipeDetailPage, no caso 'id'. Será utilizado com useParams. Isso foi realizado por um motivo bem simples, eu vou querer demonstrar para o usuário os detalhes de uma receita específica. */}
                <Route exact path='/detalhe/:id'>
                    <RecipeDetailPage/>
                </Route>
                <Route>
                    <ErrorPage/>
                </Route>
            </Switch>
    )
}