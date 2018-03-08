package cierzo.modelo.interfaces

interface Person {

    fun Person(id: String, name : String, bio : String)

    // Returns User's id
    fun getId() : String

    // Returns User's name
    fun getName() : String

    // Returns User's bio
    fun getBio() : String

}