import * as React from 'react';
import Box from '@mui/material/Box';
import Typography from '@mui/material/Typography';
import { useTheme } from '@mui/material/styles';
import { ThemeProvider } from '@mui/material/styles';
import theme from './themeConfig';
import { MainNav} from './mainNav/MainNav';
import { Carousel } from './carousel/Carousel';
import { CardProduct } from './cardProduct/CardProduct';

const images = [
  {
    name: 'compras a la moda',
    detalle: 'MODA EN TIEMPO DE CALOR',
    price:250,
    boton1: 'MODA TODOS',
    imgPath:
      'https://media.glamour.mx/photos/6190b55da6e030d64810433b/master/w_1600%2Cc_limit/164081.jpg',
  },
  {
    name: 'Traje de Mujer',
    detalle: 'MODA EN TIEMPO DE CALOR',
    price:300,
    boton1: 'MODA MUJER',
    imgPath:
      'https://img.freepik.com/foto-gratis/retrato-nina-hipster-vasos-pared-rosa_169016-1401.jpg',
  },
  {
    name: 'trajes para Parejas',
    detalle: 'MODA EN TIEMPO DE CALOR',
    price:280,
    boton1: 'MODA HOMBRE',
    imgPath:
      'https://st3.depositphotos.com/1017228/18617/i/450/depositphotos_186174862-stock-photo-portrait-of-a-happy-young.jpg',
  },
  {
    name: 'Camiseta de Hombre',
    detalle: 'MODA EN TIEMPO DE CALOR',
    price:420,
    boton1: 'MODA HOMBRE',
    imgPath:
      'https://img.freepik.com/foto-gratis/retrato-guapo-sonriente-elegante-joven-modelo-vestido-ropa-jeans-hombre-moda_158538-5030.jpg',
  },
  
];



const pages = ['ROPA', 'ZAPATOS', 'ACCESORIOS'];


const data = [
  {
    src: 'https://i.ytimg.com/vi/pLqipJNItIo/hqdefault.jpg?sqp=-oaymwEYCNIBEHZIVfKriqkDCwgBFQAAiEIYAXAB&rs=AOn4CLBkklsyaw9FxDmMKapyBYCn9tbPNQ',
    title: 'Don Diablo @ Tomorrowland Main Stage 2019 | Official…',
    channel: 'Don Diablo',
    views: '396k views',
    createdAt: 'a week ago',
  },
  {
    src: 'https://i.ytimg.com/vi/_Uu12zY01ts/hqdefault.jpg?sqp=-oaymwEZCPYBEIoBSFXyq4qpAwsIARUAAIhCGAFwAQ==&rs=AOn4CLCpX6Jan2rxrCAZxJYDXppTP4MoQA',
    title: 'Queen - Greatest Hits',
    channel: 'Queen Official',
    views: '40M views',
    createdAt: '3 years ago',
  },
  {
    src: 'https://i.ytimg.com/vi/kkLk2XWMBf8/hqdefault.jpg?sqp=-oaymwEYCNIBEHZIVfKriqkDCwgBFQAAiEIYAXAB&rs=AOn4CLB4GZTFu1Ju2EPPPXnhMZtFVvYBaw',
    title: 'Calvin Harris, Sam Smith - Promises (Official Video)',
    channel: 'Calvin Harris',
    views: '130M views',
    createdAt: '10 months ago',
  },
];





function App() {

  const themes = useTheme();
  const [activeStep, setActiveStep] = React.useState(0);
  const maxSteps = images.length;
  const [anchorElNav, setAnchorElNav] = React.useState(null);

  return (
    <ThemeProvider theme={theme}>
      <>
        <MainNav anchorElNav={anchorElNav} setAnchorElNav={setAnchorElNav} pages={pages}/>
        <Carousel theme={theme} themes={themes} activeStep={activeStep} setActiveStep={setActiveStep} images={images} maxSteps={maxSteps}/>
        <Box sx={{width:'100%', height:'20px' ,direction:'flex',textAlign:'center'}}>
          <Typography >NOVEDADES</Typography>
        </Box>
        <CardProduct images={images}/>
      </>
    </ThemeProvider>
  );
}

export default App;

