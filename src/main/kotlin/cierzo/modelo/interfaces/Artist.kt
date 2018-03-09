package cierzo.modelo.interfaces

/**
 *
 * La clase Artist representa a un artista o grupo que crean canciones.
 *
 */

interface Artist : Person {

    /**
     * @param albums: Lista de IDs de los álbumes del artista.
     * @param songs: Lista de IDs de las canciones del artista.
     */
    fun Artist(id : String, name : String, bio : String, albums : List<String>, songs : List<String>,
               image : String)

    /**
     * Obtiene del servidor la lista de álumes a partir de sus IDs.
     */
    fun getAlbums(): List<SongList>

    /**
     * Obtiene del servidor la lista de canciones a partir de sus IDs.
     */
    fun getSongs(): List<Song>

    /**
     * Devuevle la imagen del artista.
     */
    fun getImage(): String


}