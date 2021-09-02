import React from 'react'
import axios from 'axios'

//ANOTAÇÃO: Estamos criando um customHook para fazer a requisição GET. Esse customHook reeberá dois parâmetros: Um estado dos dados iniciais e uma URL para fazer a requisição.
export default function useRequestData(initialData,url){
    const [data,setData] = React.useState(initialData)

    React.useEffect(()=>{
        axios.get(url, {
            headers:{
                Authorization:localStorage.getItem('token')
            }
        })
        .then(res => {
            setData(res.data)
        })
        .catch(err => {
            alert('Ocorreu um erro, tente novamente mais tarde')
        })
    }, [url])
    return data
}