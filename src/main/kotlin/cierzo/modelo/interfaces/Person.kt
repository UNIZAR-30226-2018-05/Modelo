package cierzo.modelo.interfaces

/**
 * La interfaz Persona define a una persona
 */

interface Person {

    fun Person(id: String, name: String, bio: String)

    /**
     * Devuelve la ID de la persona.
     */
    fun getId() : String

    /**
     * Devuelve el nombre de la persona.
     */
    fun getName() : String

    /**
     * Devuelve la descripción biográfica de la persona.
     */
    fun getBio() : String

}