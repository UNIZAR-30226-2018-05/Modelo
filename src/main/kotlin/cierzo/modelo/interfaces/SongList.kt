package cierzo.modelo.interfaces

import cierzo.modelo.util.Date

/**
 *
 * La interfaz SongList representa una lista de canciones.
 *
 */


interface SongList {

    /**
     * @param songs: Lista de IDs de las canciones incluidas en la lista.
     * @param owner: ID del dueño de la lista.
     * @param image: ¿URL? de la imagen de cabecera de la lista, si dispone de ella. Sino, null.
     */
    fun SongList(name: String, songs: List<String>, creationDate: Date, description: String, owner: String,
                 image: String?)

    /**
     * Devuelve el nombre de la lista.
     */
    fun getName(): String

    /**
     * Obtiene del servidor la lista de canciones.
     */
    fun getSongs(): List<Song>

    /**
     * Devuelve el dueño de la lista.
     */
    fun getOwner(): Person

    /**
     * Devuelve la fecha de creación de la lista.
     */
    fun getCreationDate(): Date

    /**
     * Devuelve la descripción de la lista.
     */
    fun getDescription(): String
}