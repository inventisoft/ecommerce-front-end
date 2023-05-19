import { createTheme } from '@mui/material/styles';
import { blue } from '@mui/material/colors';
import { amber } from '@mui/material/colors';
import { grey } from '@mui/material/colors';


const theme = createTheme({
    palette: {
        primary: {
            main: blue[800],
        },
        secondary: {
            main: amber[500],
        },
        grey:{
            main: grey[800],
        }
    },
    typography:{
        primary: {
            fontFamily: 'Satisfy',
            fontSize: 16,
            color: grey[800]
        },
        primary2: {
            fontFamily: 'Satisfy',
            fontSize: 20,
            color: grey[800]
        },
        primary3: {
            fontFamily: 'Satisfy',
            fontSize: 24,
            color: grey[800]
        },
        secondary: {
            fontSize: 20,
            color: grey[800]
        },
        secondary2: {
            fontSize: 24,
            color: grey[800]
        },
        secondary3: {
            fontSize: 28,
            color: grey[800]
        }
    }
});

export default theme;