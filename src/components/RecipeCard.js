import React from 'react'
import CardActionArea from '@material-ui/core/CardActionArea'
import CardMedia from '@material-ui/core/CardMedia'
import Typography from '@material-ui/core/Typography'
import styled from 'styled-components'
import Card from '@material-ui/core/Card'
import CardContent from '@material-ui/core/CardContent'

const RecipeCardContainer = styled(Card)`
  width: 250px;
  margin: 10px;
`

const RecipeCardContent = styled(CardContent)`
  display: flex;
  align-items: center;
  justify-content: center;
  height: 40px;
`
//ANOTAÇÃO: RecipeCard está recebendo por props, aquilo que será de RecipeListPage.
export default function RecipeCard (props) {
  return (
    <RecipeCardContainer onClick={props.onClick}>
      <CardActionArea>
        <CardMedia
          component={'img'}
          alt={props.title}
          height={'150px'}
          image={props.image}
          title={props.title}
        />
        <RecipeCardContent>
          <Typography align={'center'}>
            {props.title.toUpperCase()}
          </Typography>
        </RecipeCardContent>
      </CardActionArea>
    </RecipeCardContainer>
  )
}