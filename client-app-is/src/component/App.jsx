import * as React from 'react';
import { useTheme } from '@mui/material/styles';
import theme from './themeConfig';
import { MainNav} from './mainNav/MainNav';
import { CarouselSlider } from './carousel/CarouselSlider';
import { Box } from '@mui/material';
import { ThemeProvider } from '@emotion/react';
import { SearcherCard } from './SearcherCard/SearcherCard';
import { CarouselCard } from './carouselCard/CarouselCard';

const clothes = [
  {
    name: 'chopa de Lana',
    detalle: 'Chompa de mujer para el invierno',
    genero:'mujer',
    price:'250,00',
    imgPath:
      'https://cachemirasss.cl/wp-content/uploads/2018/02/05-01-cachemiras-ss-chalecos-sueter-ropa-chile-santiago-moda-lana.jpg',
  },
  {
    name: 'chopa ligera',
    detalle: 'Chompa para hombre para verano',
    genero:'hombre',
    price:'150,00',
    imgPath:
      'https://i.pinimg.com/474x/32/b8/56/32b856db66907fd5237491002c41c45c.jpg',
  },
  {
    name: 'chopa ligera',
    detalle: 'Chompa de mujer para el invierno',
    genero:'hombre',
    price:'150,00',
    imgPath:
      'https://cachemirasss.cl/wp-content/uploads/2018/04/11-invierno-cachemiras-ss-chalecos-sueter-ropa-chile-santiago-moda-lana.jpg',
  },
  {
    name: 'chopa ligera',
    detalle: 'Chompa para hombre para verano',
    genero:'hombre',
    price:'150,00',
    imgPath:
      'https://i.pinimg.com/236x/bb/60/b3/bb60b302d887bd706311f0edd33c6a8f.jpg',
  },
  {
    name: 'chopa ligera',
    detalle: 'Chompa de mujer para el invierno',
    genero:'hombre',
    price:'150,00',
    imgPath:
      'https://cachemirasss.cl/wp-content/uploads/2018/05/13-invierno-cachemiras-ss-chalecos-sueter-ropa-chile-santiago-moda-lana.jpg',
  },
  {
    name: 'chopa ligera',
    detalle: 'Chompa para hombre para verano',
    genero:'hombre',
    price:'150,00',
    imgPath:
      'https://img.menzig.style/f/4100/4100-f7.jpg',
  },
  
];

const slider = [
  {
    name: 'compras a la moda',
    detalle: 'MODA EN TIEMPO DE CALOR',
    price:250,
    boton1: 'MODA TODOS',
    imgPath:
      'https://cachemirasss.cl/wp-content/uploads/2018/05/slider-020-cachemiras-ss-chalecos-sueter-ropa-chile-santiago-moda-lana.jpg',
  },
  {
    name: 'Traje de Mujer',
    detalle: 'MODA EN TIEMPO DE CALOR',
    price:300,
    boton1: 'MODA MUJER',
    imgPath:
      'https://imgscf.slidemembers.com/docs/1/1/418/women_s_sports_wear_google_slides_template_design_417219.jpg',
  },
  {
    name: 'trajes para Parejas',
    detalle: 'MODA EN TIEMPO DE CALOR',
    price:280,
    boton1: 'MODA HOMBRE',
    imgPath:
      'http://www.modasthaimar.com/modules/fieldslideshow/images/slider_modas_thaimar_02-319.jpg',
  },
  {
    name: 'Camiseta de Hombre',
    detalle: 'MODA EN TIEMPO DE CALOR',
    price:420,
    boton1: 'MODA HOMBRE',
    imgPath:
      'https://elonce-media.elonce.com/fotos-nuevo/2022/10/05/o_1664998193.jpg',
  },
  
];



  
const pages = ['ROPA', 'ZAPATOS', 'ACCESORIOS'];




function App() {

  const [searchValue, setSearchValue] = React.useState('')
  let searchedItem = []
  if(searchValue.length>0){
    searchedItem= clothes.filter(item => {
      const todoText = item.name.toLowerCase()
      const searchText = searchValue.toLowerCase()
      return todoText.includes(searchText)
    })
  }
  const themes = useTheme();
  const [activeStep, setActiveStep] = React.useState(0);
  const maxSteps = slider.length;
  const [anchorMenu, setAnchorMenu] = React.useState(false);

  return (
    <ThemeProvider theme={theme}>
      
        <MainNav 
        theme={theme}
        anchorMenu={anchorMenu} 
        setAnchorMenu={setAnchorMenu} 
        pages={pages} 
        searchValue={searchValue} 
        setSearchValue={setSearchValue}
        />
        <CarouselSlider
        theme={theme} 
        themes={themes} 
        activeStep={activeStep} 
        setActiveStep={setActiveStep} 
        slider={slider} 
        maxSteps={maxSteps}
        />
        <Box  minWidth={360} maxWidth={1024} margin={'auto'} padding={'0 16px'} >
          <CarouselCard 
          clothes={clothes}
          />
          <SearcherCard
          searchValue={searchValue}
          searchedItem={searchedItem}
          />
        </Box>
    </ThemeProvider>
  )
}

export default App;

