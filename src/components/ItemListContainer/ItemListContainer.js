import { useState, useEffect } from "react"
import { useParams } from "react-router-dom"
// import { getProducts, getProductsByCategory } from "../../asyncMock"
import ItemList from '../ItemList/ItemList'

import './ItemListContainer.css'
import { collection, getDocs, query, where } from "firebase/firestore"
import { db } from "../../services/firebase"

const ItemListContainer = ({ greeting }) => {
    const [products, setProducts] = useState([])

    const { categoryId } = useParams();

    // useEffect(() => {
    //     if (categoryId) {
    //         getProductsByCategory(categoryId)
    //         .then(response => {
    //             setProducts(response)
    //         })
    //         .catch(error => {
    //             console.log(error)
    //         })
    //     } else {
    //         getProducts()
    //             .then(response => {
    //                 setProducts(response)
    //             })
    //             .catch(error => {
    //                 console.log(error)
    //             })
    //     }
    // }, [categoryId])

    useEffect(() => {
        const productsCollection = categoryId ? query(collection(db, "productos"), where("category", "==", categoryId)) : collection(db, "productos")
        getDocs(productsCollection)
        .then((res) => {
            const list = res.docs.map((product)=>{
                return {
                    id:product.id,
                    ...product.data()
                }
            })
            setProducts(list)
        })
        .catch((error) => console.log(error))
    }, [categoryId])

    return (
        <div className="Component__Container">
            <h1>{greeting}</h1>
            <ItemList products={products} />
        </div>
    )
}

export default ItemListContainer