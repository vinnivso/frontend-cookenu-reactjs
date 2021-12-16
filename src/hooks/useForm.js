import React from 'react'
// ANOTAÇÃO: Estamos criando um Hook custom, que terá a função de setar o form. Repare que estou passando como parâmetro da função um 'initialState', isso é para deixar claro, que o que deve ser passado como argumento é um estado inicial do campo form.
export default function useForm (initialState){
    const [form, setForm] = React.useState(initialState)
    // ANOTAÇÃO: Criando uma fanção que será responsável por alterar o form, perceba que foi realizado uma desestruturação do objeto.
    const handleInputChange = (e) => {
        const {value, name} = e.target
        setForm({...form, [name]:value})
    }
    // ANOTAÇÃO: Criação de uma função que será responsável por limpar os campos do formulário, no caso, ele retorna o estado do formulário, para o estado inicial.
    const clear = () => {
        setForm(initialState)
    }
    // ANOTAÇÃO: Repare que o return de nosso custom Hook vai retornar três execucões. SEMPRE que desejar receber um retorno adicional em uma função, é necessário passar dentro de um array. Cada função separada por ',', como já visto em JAVASCRIPT.
    return [form, handleInputChange,clear]
}