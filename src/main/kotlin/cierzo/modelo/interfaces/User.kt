package cierzo.modelo.interfaces

/**
 *
 * La clase usuario representa a una persona que usa la aplicación.
 *
 */


interface User : Person {

    /**
     * @param friends: Lista de IDs de los usuarios amigos.
     */
    fun User(id: String, name: String, bio: String, username: String, mail: String, friends: List<String>)

    /**
     * Devuelve el nickname del usuario.
     */
    fun getUsername(): String

    /**
     * Devuelve el correo electrónico del usuario.
     */
    fun getMail(): String

    /**
     * Obtiene del servidor la lista de usuarios amigos.
     */
    fun getFriends(): List<User>

}