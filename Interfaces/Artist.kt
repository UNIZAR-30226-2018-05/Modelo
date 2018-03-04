/**
 *
 * The Artist class represents Artist of the application.
 *
 */


interface Artist {

    // Call the API to set the name of Artist
    fun setName()

    // Return the name of Artist
    fun getName(): String

    // Call the API to set the Albums of Artist
    fun setAlbum()

    // Return the Albums of Artist
    fun getAlbum(): List<Album>

    // Call the API to set the Songs of Artist
    fun setSongs()

    // Return the Songs of Artist
    fun getSongs(): List<Song>

    // Call the API to set the Image's Artist
    fun setImage()

    // Return the Image's Artist
    fun getImage(): String

    // Call the API to set the Description's Artist
    fun setDescription()

    // Return the Description's Artist
    fun getDescription(): String


}