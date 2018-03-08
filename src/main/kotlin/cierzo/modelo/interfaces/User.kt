package cierzo.modelo.interfaces

/**
 *
 * The User class represents the person who use the application.
 *
 */


interface User : Person {

    // User object constructor
    fun User(id : String, name : String, bio : String, username : String, mail : String, friends : List<User>)

    // Returns User's nickname
    fun getUsername() : String

    // Returns User's mail
    fun getMail() : String

    // Returns list of User's friends
    fun getFriends() : List<User>

}