// ANOTAÇÃO: Componente criada para manipulação do tema apresentado pelo Material-UI, tal procedimento pode ser encontrado através do seguite link: 'https://v3.material-ui.com/customization/themes/'.
import { createTheme } from '@material-ui/core/styles'
import {primaryColor, secondaryColor} from './colors'

const theme = createTheme({
  palette: {
    primary: {
      main: primaryColor,
      contrastText:'white'
    },
    text: {
        primary: secondaryColor
    }
  },
})
export default theme