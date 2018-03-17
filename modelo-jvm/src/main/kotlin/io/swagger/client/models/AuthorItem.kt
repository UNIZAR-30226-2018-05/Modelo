/**
* Proyecto Cierzo API
* Back-end API del Proyecto Cierzo
*
* OpenAPI spec version: 1.0.0
* 
*
* NOTE: This class is auto generated by the swagger code generator program.
* https://github.com/swagger-api/swagger-codegen.git
* Do not edit the class manually.
*/
package io.swagger.client.models

import io.swagger.client.models.AlbumItem

/**
 * 
 * @param id 
 * @param name 
 * @param bio 
 * @param albums 
 */
data class AuthorItem (
    val id: kotlin.String,
    val name: kotlin.String,
    val bio: kotlin.String,
    val albums: kotlin.Array<AlbumItem>
) {

}

