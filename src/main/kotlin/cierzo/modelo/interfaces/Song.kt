package cierzo.modelo.interfaces

/**
 *
 * The Song class represents songs of the application.
 *
 */


interface Song {


    fun Song(id : String, name : String, lenght : Int, author : List<Artist>, genre : String, album : Album,
             image : String)

    fun getId(): String

    // Return the name of song
    fun getName(): String

    // Return the Artist or the Artists of song
    fun getArtist(): List<Artist>

    // Return the Album of song
    fun getAlbum(): Album

    // Return the Genre of song
    fun getGenre(): String

    // Return the Duration of song (in Seconds)
    fun getLenght(): Int

    // Return the Cover's song
    fun getImage(): String

}