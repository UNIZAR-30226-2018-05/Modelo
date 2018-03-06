/**
 *
 * The SongList class represents a List of Songs of the application.
 *
 */


interface SongList {

    // SongList object constructor
    fun SongList(name: String = "Sin nombre", songs: List<Song>, creationDate: Date, description: String, owner: User?)

    // Return the name of Playlist
    fun getName(): String

    // Return the Songs of Playlist
    fun getSongs(): List<Song>

    // Return the Owner of the SongList or null if not have owner
    fun getOwner(): User?

    fun getCreationDate(): Date

    fun getDescription(): String
}