/**
 *
 * The Session class represents the session of User.
 * It will be used to identify the session when sending the information to the API
 */


interface Session {

    // Call the API to set an ID for session
    fun setID()

    // Return the ID of the session
    fun getID(): Int


}