package cierzo.modelo.interfaces

/**
 *
 * La clase Song representa una canción disponible en la aplicación
 *
 */


interface Song {


    /**
     * @param author: Lista de IDs de los autores de la canción.
     * @param album: ID del álbum al que pertenece una canción, si pertenece a alguno. Sino, null.
     */
    fun Song(id: String, name: String, length: Int, author: List<String>, genre: String, album: String?,
             image : String)

    /**
     * Devuelve la ID de la canción.
     */
    fun getId(): String

    /**
     * Devuelve e nombre de la canción.
     */
    fun getName(): String

    /**
     * Obtiene del servidor la lista de artistas autores de la canción.
     */
    fun getArtist(): List<Artist>

    /**
     * Obtiene del servidor el álbum al que pertenece la canción.
     */
    fun getAlbum(): SongList

    /**
     * Devuelve el género de la canción.
     */
    fun getGenre(): String

    /**
     * Devuelve la duración (en segundos) de la canción.
     */
    fun getLength(): Int

    /**
     * Devuelve la carátula de la canción.
     */
    fun getImage(): String

}