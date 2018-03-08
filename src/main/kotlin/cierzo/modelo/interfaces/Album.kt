package cierzo.modelo.interfaces

import cierzo.modelo.util.Date

/**
 *
 * The Album class represents Albums of the application.
 *
 */


interface Album : SongListWithImage {

    // Album object constructor
    fun Album(name : String, songs : List<Song>, image : String, creationDate : Date, artist : Artist)

    // Return the Artist or the Artists of song
    fun getArtist(): List<Artist>


}