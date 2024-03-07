
import { collection, getDocs} from 'firebase/firestore'
import { db } from '../firebase/config'
import React, { useEffect, useState } from 'react'
import { ItemJugador } from './ItemJugador';

export const Cuerpo = () => {

    const [jugadores, setJugadores] = useState([]);

    useEffect(() => {
        const jugadoresRef = collection(db, "jugadores");
        getDocs(jugadoresRef)
            .then((resp) => {
                console.log('hola')
                setJugadores(
                    resp.docs.map((jugadorDoc) => {
                        return { ...jugadorDoc.data(), id: jugadorDoc.id };
                    })
                );
            });
    }, [jugadores]);
    

    return (
        <div>
            <h2>Jugadores</h2>
            {
                jugadores.map(jugador => (
                    <ItemJugador key={jugador.id} jugador={jugador}  />
                ))
            }
        </div>
    )
}
