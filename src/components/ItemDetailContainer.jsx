import { React, useEffect, useState } from 'react'
import { useParams } from 'react-router-dom'
import ItemDetail from './ItemDetail'
import productos from "../data/productos";

const ItemDetailContainer = () => {

    const [producto, setProducto] = useState(null)
    const { id } = useParams()

    useEffect(() => {
        const producto = productos.find(producto => producto.id == id)
        setProducto(producto)
    }, [id])

    return (
        <div>
            {producto && <ItemDetail producto={producto} />}
            {!producto && "no funciona :( "}
        </div>
    )
}

export default ItemDetailContainer;