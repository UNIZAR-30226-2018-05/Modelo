/**
 *
 * The Song class represents songs of the application.
 *
 */


interface Song {

    // Call the API to set the name of song
    fun setName()

    // Return the name of song
    fun getName(): String

    // Call the API to Set the Artist or the Artists of song
    fun setArtist()

    // Return the Artist or the Artists of song
    fun getArtist(): List<Artist>

    // Call the API to set the Album of song
    fun setAlbum()

    // Return the Album of song
    fun getAlbum(): Album

    // Call the API to set the Genre of song
    fun setGenre()

    // Return the Genre of song
    fun getGenre(): Genre

    // Call the API to set the Duration of song (in Seconds)
    fun setDuration()

    // Return the Duration of song (in Seconds)
    fun getDuration(): Int

    // Call the API to set the URL's song
    fun setUrl()

    // Return the URL's song
    fun getUrl(): String

    // Call the API to set the Cover's song
    fun setCover()

    // Return the Cover's song
    fun getCover(): String

    // Save the state of the song (in Seconds)
    fun saveState(second: Int)

    // Save the Song in the Database
    fun saveSong()


}