import { React, useEffect, useState } from 'react'
import { useParams } from 'react-router-dom'
import productos from "../data/productos";
import ItemList from "./ItemList";
import { Container } from '@chakra-ui/react';

const ItemListContainer = () => {
  const [productosFiltrados, setProductosFiltrados] = useState(productos)
  const { categoria } = useParams()

  useEffect(() => {
    if (categoria) {
      const productosFiltrados = productos.filter(producto => producto.tipo == categoria)
      setProductosFiltrados(productosFiltrados)
    } else { 
      setProductosFiltrados(productos) 
    }
  }, [categoria])

  return (
    <Container maxW='80%'>
      <ItemList productos={productosFiltrados} />
    </Container>
  )
}

export default ItemListContainer