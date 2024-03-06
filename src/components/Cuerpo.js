
import { collection, getDocs } from 'firebase/firestore'
import { db } from '../firebase/config'
import React, { useEffect, useState } from 'react'

export const Cuerpo = () => {

    const [productos, setProductos] = useState([]);

    useEffect( () =>{
        const jugadoresRef = collection(db, "jugadores")
        getDocs(jugadoresRef)
        .then((resp)=>{
            setProductos(
                resp.docs.map((doc) => {
                    return {...doc.data(),id: doc.id}
                })
            );
        })
    })

  return (
    <div>Holita</div>
  )
}
