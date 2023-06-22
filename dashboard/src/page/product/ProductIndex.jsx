
import Box from '@mui/material/Box';
import TableProduct from '../../components/product/TableProduct';
import { useEffect, useRef, useState } from 'react';
import CrudServices from '../../services/crud.service';
// import { useDispatch} from 'react-redux';


export default function ProductIndex() {

  // const dispatch = useDispatch()
  const [products, setProducts] = useState([])
  const [loadibg, setLoading]  = useState(true)
  const [pagination, setPagination] = useState({})
  const [allFilters, setAllFilters] = useState({})
  const [showFormDialog, setShowFormDialog] = useState(false)
  const [showDeleteDialog, setShowDeleteDialog] = useState(false)
  const [showInfoDialog, setShowInfoDialog] = useState(false)
  const [productSelected, setProductSelected] = useState(null)
  const dataTableRef = useRef()
  const formRef = useRef()

  useEffect(() => {
    const loadProducts = async (fillters={}) => {
      setLoading(true)
      let productList = []
      const response = await CrudServices.getProducts(fillters)
      if(response.status === 200) {
        productList = response.data.data
        setPagination(response.data.pagination)
      }
      setProducts(productList)
      setLoading(false) 
    }
    loadProducts(allFilters)
  }, [allFilters])


  return (
              <>
                  <Box component="main" sx={{ flexGrow: 1, p: 8 }}>    
                    <Box height={40} />
                      <TableProduct />
                    </Box> 
              </>
  )
}