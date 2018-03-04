/**
 *
 * The Playlist class represents a List of Song of the application.
 *
 */


interface Playlist {

    // Call the API to set the name of Playlist
    fun setName()

    // Return the name of Playlist
    fun getName(): String


    // Call the API to set the Songs of PlayList
    fun setSongs()

    // Return the Songs of Playlist
    fun getSongs(): List<Song>


}