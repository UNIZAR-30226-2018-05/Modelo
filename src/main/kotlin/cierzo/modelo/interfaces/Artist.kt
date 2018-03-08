package cierzo.modelo.interfaces

/**
 *
 * The Artist class represents Artist of the application.
 *
 */

interface Artist {

    // Artist object constructor
    fun Artist(name : String, albums : List<Album>, songs : List<Song>, image : String, description : String)

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