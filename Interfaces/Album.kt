/**
 *
 * The Album class represents Albums of the application.
 *
 */


interface Album {

    // Call the API to set the name of song
    fun setName()

    // Return the name of song
    fun getName(): String

    // Call the API to Set the Artist or the Artists of song
    fun setArtist()

    // Return the Artist or the Artists of song
    fun getArtist(): List<Artist>

    // Call the API to set the Songs of Album
    fun setSongs()

    // Return the Songs of album
    fun getSongs(): List<Song>


    // Call the API to set the Cover's Album
    fun setCover()

    // Return the Cover's Album
    fun getCover(): String


}