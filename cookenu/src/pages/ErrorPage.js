import { Typography } from "@material-ui/core";
import React from "react";
import styled from "styled-components";
import error from '../assets/error.png'

const ErrorPageContainer = styled.div`
  display:flex;
  flex-direction:column;
  justify-content:center;
  align-items:center;
  margin:20px;
`

const ErrorImage = styled.img`
  width:64vw;
  max-width:450px;
`
export default function ErrorPage() {
  return (
    <ErrorPageContainer>
      <ErrorImage src={error}/>
      <Typography color={'primary'} variant={'h4'} align={'center'}>Erro 404 - Página Não Encontrada</Typography>
    </ErrorPageContainer>
  );
}
