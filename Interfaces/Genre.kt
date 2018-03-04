/**
 *
 * The Genre class represents Genres of songs of the application.
 *
 */


interface Genre {

    // Call the API to set the name of Genre
    fun setName()

    // Return the name of Genre
    fun getName(): String

    // Call the API to set the Songs of Genre
    fun setSongs()

    // Return the Songs of Genre
    fun getSongs(): List<Song>


}