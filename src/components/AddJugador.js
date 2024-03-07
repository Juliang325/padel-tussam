import { addDoc, collection } from 'firebase/firestore'
import React, { useState } from 'react'
import { db } from '../firebase/config'

export const AddJugador = () => {

    const [nombre, setNombre] = useState('')
    const [apellido, setApellido] = useState('')
    const [puntos, setPuntos] = useState()

     const handlerNombre = (e) => {
        setNombre(e.target.value)
     }

     const handlerApellido = (e) => {
        setApellido(e.target.value)
     }

     const handlerPuntos = (e) => {
        setPuntos(Number(e.target.value))
     }

     function enviarDatos() {
        const jugador = {
            nombre: nombre,
            apellido: apellido,
            puntos: puntos
        }
        console.log(jugador);
    
        const jugadorRef = collection(db, "jugadores")
        addDoc(jugadorRef, jugador)
    }

  return (
    <div>
        <h2>Añadir jugador</h2>
        <label>
             Nombre
            <input type='text' onChange={handlerNombre}></input>
        </label>
        <br/>
        <label> 
            Apellido
            <input type='text' onChange={handlerApellido}></input>
        </label>
        <br/>
        <label> 
            Puntos
            <input type='text' onChange={handlerPuntos}></input>
        </label>
        <br/>
        <button onClick={enviarDatos}>Añadir jugador</button>
        
    </div>
  )
}
