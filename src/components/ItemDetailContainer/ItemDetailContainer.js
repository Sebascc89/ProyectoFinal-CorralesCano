import { useState, useEffect } from 'react'
import { getProductById } from '../../asyncMock'
import ItemDetail from '../ItemDetail/ItemDetail'
// import Item from '../Item/Item'
import { useParams } from 'react-router-dom'
import './ItemDetailContainer.css'
import { collection, doc, getDoc } from 'firebase/firestore'
import { db } from '../../services/firebase'

const ItemDetailContainer = () => {
    const [product, setProduct] = useState(null)

    const { itemId } = useParams()

    // useEffect(() => {
    //     getProductById(itemId)
    //         .then(response => {
    //             setProduct(response)
    //         })
    //         .catch(error => {
    //             console.error(error)
    //         })
    // }, [itemId])

    useEffect(() => {
        const collectionProd = collection(db, "productos")
        const referenceDoc = doc(collectionProd, itemId)
        getDoc(referenceDoc)
        .then((res) => setProduct({id:res.id, ...res.data()}))
        .catch((error) => console.log(error))
    },[])

    return(
        <div className='ItemDetailContainer'>
            <ItemDetail {...product} />
        </div>
    )
}

export default ItemDetailContainer