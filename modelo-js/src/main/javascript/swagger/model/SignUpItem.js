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
 *
 */


import ApiClient from '../ApiClient';





/**
* The SignUpItem model module.
* @module model/SignUpItem
* @version 1.0.0
*/
export default class SignUpItem {
    /**
    * Constructs a new <code>SignUpItem</code>.
    * @alias module:model/SignUpItem
    * @class
    * @param username {String} 
    * @param name {String} 
    * @param mail {String} 
    * @param pass {String} 
    */

    constructor(username, name, mail, pass) {
        

        
        

        this['username'] = username;this['name'] = name;this['mail'] = mail;this['pass'] = pass;

        
    }

    /**
    * Constructs a <code>SignUpItem</code> from a plain JavaScript object, optionally creating a new instance.
    * Copies all relevant properties from <code>data</code> to <code>obj</code> if supplied or a new instance if not.
    * @param {Object} data The plain JavaScript object bearing properties of interest.
    * @param {module:model/SignUpItem} obj Optional instance to populate.
    * @return {module:model/SignUpItem} The populated <code>SignUpItem</code> instance.
    */
    static constructFromObject(data, obj) {
        if (data) {
            obj = obj || new SignUpItem();

            
            
            

            if (data.hasOwnProperty('username')) {
                obj['username'] = ApiClient.convertToType(data['username'], 'String');
            }
            if (data.hasOwnProperty('name')) {
                obj['name'] = ApiClient.convertToType(data['name'], 'String');
            }
            if (data.hasOwnProperty('mail')) {
                obj['mail'] = ApiClient.convertToType(data['mail'], 'String');
            }
            if (data.hasOwnProperty('pass')) {
                obj['pass'] = ApiClient.convertToType(data['pass'], 'String');
            }
        }
        return obj;
    }

    /**
    * @member {String} username
    */
    username = undefined;
    /**
    * @member {String} name
    */
    name = undefined;
    /**
    * @member {String} mail
    */
    mail = undefined;
    /**
    * @member {String} pass
    */
    pass = undefined;








}


