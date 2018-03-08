package cierzo.modelo.interfaces

/**
 *
 * The Artist class represents an Artist of songs.
 *
 */

interface Artist : Person {

    // Artist object constructor
    fun Artist(id : String, name : String, bio : String, albums : List<Album>, songs : List<Song>,
               image : String)

    // Return the Albums of Artist
    fun getAlbums(): List<Album>

    // Return the Songs of Artist
    fun getSongs(): List<Song>

    // Return the Image's Artist
    fun getImage(): String


}