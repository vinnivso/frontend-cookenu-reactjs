//ANOTAÇÃO: Como não estou utilizando o useHistory aqui, posso passar o mesmo como parâmetro para as funções criadas abaixo.
export function goToLoginPage(history){
    history.push('/login')
}
export function goToSignUpPage(history){
    history.push('/cadastro')
}
export function goToRecipesListPage(history){
    history.push('/')
}
export function goToAddRecipePage(history){
    history.push('/adicionar-receita')
}
//ANOTAÇÃO: Como desejo demonstrar detalhes de um item específico será necessário, passsar o 'id', como parâmetro, além de history.Repare também, que para isso dar certo, devo passar a variável em um template string.
export function goToRecipeDetailPage(history, id){
    history.push(`/detalhe/${id}`)
}