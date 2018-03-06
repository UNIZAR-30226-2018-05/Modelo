/**
 *
 * The SongListWithImage class represents a List of Songs of the application with an image.
 *
 */


interface SongListWithImage : SongList{

    // SongList object constructor
    override fun SongList(name : String = "Sin nombre", songs : List<Song>, creationDate : Date, image : String)

    // Return the image of the SongList
    fun getImage() : String
}