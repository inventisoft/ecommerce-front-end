
import Box from '@mui/material/Box';
import TableProduct from '../../components/product/TableProduct';


export default function ProductIndex() {

  return (
              <>
                  <Box component="main" sx={{ flexGrow: 1, p: 8 }}>    
                    <Box height={40} />
                      <TableProduct />
                    </Box> 
              </>
  )
}