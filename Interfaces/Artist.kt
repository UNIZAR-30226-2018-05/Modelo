/**
 *
 * The Artist class represents Artist of the application.
 *
 */


interface Artist {

    // Artist object constructor
    fun Artist(name : String = "Sin nombre", albums : List<Album> = listOf(), songs : List<Song> = listOf(),
               image : String, description : String = "Sin descripcion")

    // Return the name of Artist
    fun getName(): String

    // Return the Albums of Artist
    fun getAlbums(): List<Album>

    // Return the Songs of Artist
    fun getSongs(): List<Song>

    // Return the Image's Artist
    fun getImage(): String

    // Return the Description's Artist
    fun getDescription(): String


}