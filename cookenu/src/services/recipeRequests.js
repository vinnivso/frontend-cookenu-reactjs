import axios from "axios";
import {BASE_URL} from "../constants/urls"

  // ANOTAÇÃO: Criando uma função responsável por fazer a requisição de criação da receita. Em caso de dúvidas, verifique as demais requisiçõe strabalhadas durante este projeto, assim como a própria API utilizada. Essa requisição de criar uma receita solicita uma URL, assim como o body. Vamos receber as informações que não possuímos através de props, no caso o body e o clear.
  export const createRecipe = (body, clear,setIsLoading) => {
    setIsLoading(true)
    axios.post(`${BASE_URL}/recipe`, body, {
      headers: {
        Authorization:localStorage.getItem('token')
      }
    })
    .then(res => {
      setIsLoading(false)
      alert(res.data.message)
      clear()
    })
    .catch(err => {
      setIsLoading(false)
      alert(err.response.message)
    })
  }