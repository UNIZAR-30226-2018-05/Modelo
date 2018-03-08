package cierzo.modelo.interfaces

import cierzo.modelo.util.Date

/**
 *
 * The SongListWithImage class represents a List of Songs of the application with an image.
 *
 */


interface SongListWithImage : SongList{

    // SongList object constructor
    fun SongList(name : String, songs : List<Song>, creationDate : Date, image : String)

    // Return the image of the SongList
    fun getImage() : String
}