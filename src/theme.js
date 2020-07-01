import { createMuiTheme } from '@material-ui/core/styles';
import purple from '@material-ui/core/colors/purple';
import green from '@material-ui/core/colors/green';

const theme = createMuiTheme({
  palette: {
    primary: {
      main: '#71C186',  //green
    },
    secondary: {
      main: purple[500],
    },
  },
});


export default theme;