/**
 *
 * The Album class represents Albums of the application.
 *
 */


interface Album : SongListWithImage {

    // Album object constructor
    override fun Album(name : String = "Sin nombre", songs : List<Song>, image : String, creationDate : Date,
                       artists : List<Artist>)

    // Return the Artist or the Artists of song
    fun getArtist(): List<Artist>


}