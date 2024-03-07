import React from 'react';
import { deleteDoc, doc } from 'firebase/firestore';
import { db } from '../firebase/config';

export const ItemJugador = ({ jugador }) => {
    const handleBorrarJugador = async (id) => {
        try {
            await deleteDoc(doc(db, 'jugadores', id));
            console.log('Jugador borrado exitosamente');
        } catch (error) {
            console.error('Error al borrar el jugador', error);
        }
    };

    return (
        <div>
            <p>
            Nombre: {jugador.nombre},
            Apellido: {jugador.apellido},
            Puntos: {jugador.puntos}</p>
            <button onClick={() => handleBorrarJugador(jugador.id)}>Borrar</button>
        </div>
    );
};
