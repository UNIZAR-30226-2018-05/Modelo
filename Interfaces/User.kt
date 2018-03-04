/**
 *
 * The User class represents the client of the application.
 *
 */


interface User {

    // Set the username
    fun setUsername(name: String)

    // Return the username
    fun getUsername(): String

    // Call the API to add the Playlist list
    fun setMyPlaylists()

    // Return the user's Playlist list
    fun getMyPlaylists() : MutableList<Playlist>

    // Call the API to add the Songs list
    fun setMySongs()

    // Return the user's Song list
    fun getMySongs(): MutableList<Song>

    // Call the API to add the Artists list
    fun setMyArtists()

    // Return the user's Artists list
    fun getMyArtists(): MutableList<Artist>

    // Call the API to add the Albums list
    fun setMyAlbums()

    // Return the user's Albums list
    fun getMyAlbums(): MutableList<Album>

    // Call the API to add the Playlist list
    fun setMyFriends()

    // Return the user's Friends list
    fun getMyFriends() : MutableList<User>

}