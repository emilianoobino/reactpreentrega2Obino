import React from 'react'
import { useState } from 'react'
import { Button } from '@chakra-ui/react'

const ItemCount = ({ producto }) => {
    const [contador, setContador] = useState(0)

    const agregarAlCarrito = () => alert(`${contador} productos agregados al carrito`)
    const quitarProducto = () => contador > 0 && setContador(contador - 1)
    const agregarProducto = () => contador < producto.stock && setContador(contador + 1)

    return (
        <div>
            <Button colorScheme='red' size='sm' isDisabled={!contador} onClick={quitarProducto}>-</Button>
            <Button colorScheme={contador ? 'blue' : 'gray'} size='md' mx='15px' isDisabled={!contador} onClick={agregarAlCarrito}>
                Agregar al carrito {contador ? `${contador} productos` : ''}
            </Button>
            <Button colorScheme={contador < producto.stock ? 'green' : 'gray'} size='sm' isDisabled={contador >= producto.stock} onClick={agregarProducto}>+</Button>
        </div>
    )
}

export default ItemCount;