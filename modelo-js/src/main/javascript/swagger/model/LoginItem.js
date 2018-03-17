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
* The LoginItem model module.
* @module model/LoginItem
* @version 1.0.0
*/
export default class LoginItem {
    /**
    * Constructs a new <code>LoginItem</code>.
    * @alias module:model/LoginItem
    * @class
    * @param mail {String} 
    * @param pass {String} 
    */

    constructor(mail, pass) {
        

        
        

        this['mail'] = mail;this['pass'] = pass;

        
    }

    /**
    * Constructs a <code>LoginItem</code> from a plain JavaScript object, optionally creating a new instance.
    * Copies all relevant properties from <code>data</code> to <code>obj</code> if supplied or a new instance if not.
    * @param {Object} data The plain JavaScript object bearing properties of interest.
    * @param {module:model/LoginItem} obj Optional instance to populate.
    * @return {module:model/LoginItem} The populated <code>LoginItem</code> instance.
    */
    static constructFromObject(data, obj) {
        if (data) {
            obj = obj || new LoginItem();

            
            
            

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
    * @member {String} mail
    */
    mail = undefined;
    /**
    * @member {String} pass
    */
    pass = undefined;








}


