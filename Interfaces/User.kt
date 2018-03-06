/**
 *
 * The User class represents the client of the application.
 *
 */


interface User {

    // User object constructor
    fun User(id : String, username : String, name : String, bio : String, mail : String, friends : List<User>)

    // Returns User's id
    fun getId() : String

    // Returns User's nickname
    fun getUsername() : String

    // Returns User's name
    fun getName() : String

    // Returns User's bio
    fun getBio() : String

    // Returns User's mail
    fun getMail() : String

    // Returns list of User's friends
    fun getFriends() : List<User>

}