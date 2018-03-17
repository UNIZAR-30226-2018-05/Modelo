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


import ApiClient from "../ApiClient";
import AccountItem from '../model/AccountItem';
import AlbumItem from '../model/AlbumItem';
import AuthorItem from '../model/AuthorItem';
import LoginItem from '../model/LoginItem';
import PlaylistItem from '../model/PlaylistItem';
import ProfileItem from '../model/ProfileItem';
import SignUpItem from '../model/SignUpItem';
import SongItem from '../model/SongItem';

/**
* Public service.
* @module api/PublicApi
* @version 1.0.0
*/
export default class PublicApi {

    /**
    * Constructs a new PublicApi. 
    * @alias module:api/PublicApi
    * @class
    * @param {module:ApiClient} [apiClient] Optional API client implementation to use,
    * default to {@link module:ApiClient#instance} if unspecified.
    */
    constructor(apiClient) {
        this.apiClient = apiClient || ApiClient.instance;
    }


    /**
     * Callback function to receive the result of the createAccount operation.
     * @callback module:api/PublicApi~createAccountCallback
     * @param {String} error Error message, if any.
     * @param {module:model/AccountItem} data The data returned by the service call.
     * @param {String} response The complete HTTP response.
     */

    /**
     * crea cuenta de usuario
     * Crea una cuenta de usuario
     * @param {Object} opts Optional parameters
     * @param {module:model/SignUpItem} opts.signupItem Datos de la nueva cuenta
     * @param {module:api/PublicApi~createAccountCallback} callback The callback function, accepting three arguments: error, data, response
     * data is of type: {@link module:model/AccountItem}
     */
    createAccount(opts, callback) {
      opts = opts || {};
      let postBody = opts['signupItem'];


      let pathParams = {
      };
      let queryParams = {
      };
      let headerParams = {
      };
      let formParams = {
      };

      let authNames = [];
      let contentTypes = ['application/json'];
      let accepts = ['application/json'];
      let returnType = AccountItem;

      return this.apiClient.callApi(
        '/signup', 'POST',
        pathParams, queryParams, headerParams, formParams, postBody,
        authNames, contentTypes, accepts, returnType, callback
      );
    }

    /**
     * Callback function to receive the result of the getAlbum operation.
     * @callback module:api/PublicApi~getAlbumCallback
     * @param {String} error Error message, if any.
     * @param {module:model/AlbumItem} data The data returned by the service call.
     * @param {String} response The complete HTTP response.
     */

    /**
     * obtiene una playlist
     * Obtiene los datos del album identificada por albumID 
     * @param {String} albumID ID del album
     * @param {module:api/PublicApi~getAlbumCallback} callback The callback function, accepting three arguments: error, data, response
     * data is of type: {@link module:model/AlbumItem}
     */
    getAlbum(albumID, callback) {
      let postBody = null;

      // verify the required parameter 'albumID' is set
      if (albumID === undefined || albumID === null) {
        throw new Error("Missing the required parameter 'albumID' when calling getAlbum");
      }


      let pathParams = {
        'albumID': albumID
      };
      let queryParams = {
      };
      let headerParams = {
      };
      let formParams = {
      };

      let authNames = [];
      let contentTypes = [];
      let accepts = ['application/json'];
      let returnType = AlbumItem;

      return this.apiClient.callApi(
        '/albums/{albumID}', 'GET',
        pathParams, queryParams, headerParams, formParams, postBody,
        authNames, contentTypes, accepts, returnType, callback
      );
    }

    /**
     * Callback function to receive the result of the getAlbumImage operation.
     * @callback module:api/PublicApi~getAlbumImageCallback
     * @param {String} error Error message, if any.
     * @param {File} data The data returned by the service call.
     * @param {String} response The complete HTTP response.
     */

    /**
     * obtiene el archivo de audio de una canción
     * Obtiene el archivo de audio de la canción identificada por songID 
     * @param {String} albumID ID de la canción
     * @param {module:api/PublicApi~getAlbumImageCallback} callback The callback function, accepting three arguments: error, data, response
     * data is of type: {@link File}
     */
    getAlbumImage(albumID, callback) {
      let postBody = null;

      // verify the required parameter 'albumID' is set
      if (albumID === undefined || albumID === null) {
        throw new Error("Missing the required parameter 'albumID' when calling getAlbumImage");
      }


      let pathParams = {
        'albumID': albumID
      };
      let queryParams = {
      };
      let headerParams = {
      };
      let formParams = {
      };

      let authNames = [];
      let contentTypes = [];
      let accepts = ['image/png'];
      let returnType = File;

      return this.apiClient.callApi(
        '/albums/{albumID}/image', 'GET',
        pathParams, queryParams, headerParams, formParams, postBody,
        authNames, contentTypes, accepts, returnType, callback
      );
    }

    /**
     * Callback function to receive the result of the getAuthor operation.
     * @callback module:api/PublicApi~getAuthorCallback
     * @param {String} error Error message, if any.
     * @param {module:model/AuthorItem} data The data returned by the service call.
     * @param {String} response The complete HTTP response.
     */

    /**
     * obtiene un perfil de autor identificado por authorID
     * Obtiene un perfil de autor identificado por authorID 
     * @param {String} authorID ID del autor
     * @param {module:api/PublicApi~getAuthorCallback} callback The callback function, accepting three arguments: error, data, response
     * data is of type: {@link module:model/AuthorItem}
     */
    getAuthor(authorID, callback) {
      let postBody = null;

      // verify the required parameter 'authorID' is set
      if (authorID === undefined || authorID === null) {
        throw new Error("Missing the required parameter 'authorID' when calling getAuthor");
      }


      let pathParams = {
        'authorID': authorID
      };
      let queryParams = {
      };
      let headerParams = {
      };
      let formParams = {
      };

      let authNames = [];
      let contentTypes = [];
      let accepts = ['application/json'];
      let returnType = AuthorItem;

      return this.apiClient.callApi(
        '/authors/{authorID}', 'GET',
        pathParams, queryParams, headerParams, formParams, postBody,
        authNames, contentTypes, accepts, returnType, callback
      );
    }

    /**
     * Callback function to receive the result of the getPlaylist operation.
     * @callback module:api/PublicApi~getPlaylistCallback
     * @param {String} error Error message, if any.
     * @param {module:model/PlaylistItem} data The data returned by the service call.
     * @param {String} response The complete HTTP response.
     */

    /**
     * obtiene una playlist
     * Obtiene los datos de la playlist identificada por playlistID 
     * @param {String} playlistID ID de la playlist
     * @param {module:api/PublicApi~getPlaylistCallback} callback The callback function, accepting three arguments: error, data, response
     * data is of type: {@link module:model/PlaylistItem}
     */
    getPlaylist(playlistID, callback) {
      let postBody = null;

      // verify the required parameter 'playlistID' is set
      if (playlistID === undefined || playlistID === null) {
        throw new Error("Missing the required parameter 'playlistID' when calling getPlaylist");
      }


      let pathParams = {
        'playlistID': playlistID
      };
      let queryParams = {
      };
      let headerParams = {
      };
      let formParams = {
      };

      let authNames = [];
      let contentTypes = [];
      let accepts = ['application/json'];
      let returnType = PlaylistItem;

      return this.apiClient.callApi(
        '/playlists/{playlistID}', 'GET',
        pathParams, queryParams, headerParams, formParams, postBody,
        authNames, contentTypes, accepts, returnType, callback
      );
    }

    /**
     * Callback function to receive the result of the getProfile operation.
     * @callback module:api/PublicApi~getProfileCallback
     * @param {String} error Error message, if any.
     * @param {module:model/ProfileItem} data The data returned by the service call.
     * @param {String} response The complete HTTP response.
     */

    /**
     * obtiene un perfil de usuario identificado por profileID
     * Obtiene un perfil de usuario identificado por profileID 
     * @param {String} profileID ID del perfil
     * @param {module:api/PublicApi~getProfileCallback} callback The callback function, accepting three arguments: error, data, response
     * data is of type: {@link module:model/ProfileItem}
     */
    getProfile(profileID, callback) {
      let postBody = null;

      // verify the required parameter 'profileID' is set
      if (profileID === undefined || profileID === null) {
        throw new Error("Missing the required parameter 'profileID' when calling getProfile");
      }


      let pathParams = {
        'profileID': profileID
      };
      let queryParams = {
      };
      let headerParams = {
      };
      let formParams = {
      };

      let authNames = [];
      let contentTypes = [];
      let accepts = ['application/json'];
      let returnType = ProfileItem;

      return this.apiClient.callApi(
        '/profiles/{profileID}', 'GET',
        pathParams, queryParams, headerParams, formParams, postBody,
        authNames, contentTypes, accepts, returnType, callback
      );
    }

    /**
     * Callback function to receive the result of the getSong operation.
     * @callback module:api/PublicApi~getSongCallback
     * @param {String} error Error message, if any.
     * @param {module:model/SongItem} data The data returned by the service call.
     * @param {String} response The complete HTTP response.
     */

    /**
     * obtiene información de una canción
     * Obtiene los datos de la canción identificada por songID 
     * @param {String} songID ID de la canción
     * @param {module:api/PublicApi~getSongCallback} callback The callback function, accepting three arguments: error, data, response
     * data is of type: {@link module:model/SongItem}
     */
    getSong(songID, callback) {
      let postBody = null;

      // verify the required parameter 'songID' is set
      if (songID === undefined || songID === null) {
        throw new Error("Missing the required parameter 'songID' when calling getSong");
      }


      let pathParams = {
        'songID': songID
      };
      let queryParams = {
      };
      let headerParams = {
      };
      let formParams = {
      };

      let authNames = [];
      let contentTypes = [];
      let accepts = ['application/json'];
      let returnType = SongItem;

      return this.apiClient.callApi(
        '/songs/{songID}', 'GET',
        pathParams, queryParams, headerParams, formParams, postBody,
        authNames, contentTypes, accepts, returnType, callback
      );
    }

    /**
     * Callback function to receive the result of the getSongFile operation.
     * @callback module:api/PublicApi~getSongFileCallback
     * @param {String} error Error message, if any.
     * @param {File} data The data returned by the service call.
     * @param {String} response The complete HTTP response.
     */

    /**
     * obtiene el archivo de audio de una canción
     * Obtiene el archivo de audio de la canción identificada por songID 
     * @param {String} songID ID de la canción
     * @param {module:api/PublicApi~getSongFileCallback} callback The callback function, accepting three arguments: error, data, response
     * data is of type: {@link File}
     */
    getSongFile(songID, callback) {
      let postBody = null;

      // verify the required parameter 'songID' is set
      if (songID === undefined || songID === null) {
        throw new Error("Missing the required parameter 'songID' when calling getSongFile");
      }


      let pathParams = {
        'songID': songID
      };
      let queryParams = {
      };
      let headerParams = {
      };
      let formParams = {
      };

      let authNames = [];
      let contentTypes = [];
      let accepts = ['application/vnd.mp3'];
      let returnType = File;

      return this.apiClient.callApi(
        '/songs/{songID}/file', 'GET',
        pathParams, queryParams, headerParams, formParams, postBody,
        authNames, contentTypes, accepts, returnType, callback
      );
    }

    /**
     * Callback function to receive the result of the getSongImage operation.
     * @callback module:api/PublicApi~getSongImageCallback
     * @param {String} error Error message, if any.
     * @param {File} data The data returned by the service call.
     * @param {String} response The complete HTTP response.
     */

    /**
     * obtiene el archivo de audio de una canción
     * Obtiene el archivo de audio de la canción identificada por songID 
     * @param {String} songID ID de la canción
     * @param {module:api/PublicApi~getSongImageCallback} callback The callback function, accepting three arguments: error, data, response
     * data is of type: {@link File}
     */
    getSongImage(songID, callback) {
      let postBody = null;

      // verify the required parameter 'songID' is set
      if (songID === undefined || songID === null) {
        throw new Error("Missing the required parameter 'songID' when calling getSongImage");
      }


      let pathParams = {
        'songID': songID
      };
      let queryParams = {
      };
      let headerParams = {
      };
      let formParams = {
      };

      let authNames = [];
      let contentTypes = [];
      let accepts = ['image/png'];
      let returnType = File;

      return this.apiClient.callApi(
        '/songs/{songID}/image', 'GET',
        pathParams, queryParams, headerParams, formParams, postBody,
        authNames, contentTypes, accepts, returnType, callback
      );
    }

    /**
     * Callback function to receive the result of the login operation.
     * @callback module:api/PublicApi~loginCallback
     * @param {String} error Error message, if any.
     * @param {module:model/AccountItem} data The data returned by the service call.
     * @param {String} response The complete HTTP response.
     */

    /**
     * inicia sesión de usuario
     * Inicia sesión de usuario
     * @param {Object} opts Optional parameters
     * @param {module:model/LoginItem} opts.loginItem Credenciales
     * @param {module:api/PublicApi~loginCallback} callback The callback function, accepting three arguments: error, data, response
     * data is of type: {@link module:model/AccountItem}
     */
    login(opts, callback) {
      opts = opts || {};
      let postBody = opts['loginItem'];


      let pathParams = {
      };
      let queryParams = {
      };
      let headerParams = {
      };
      let formParams = {
      };

      let authNames = [];
      let contentTypes = ['application/json'];
      let accepts = ['application/json'];
      let returnType = AccountItem;

      return this.apiClient.callApi(
        '/login', 'POST',
        pathParams, queryParams, headerParams, formParams, postBody,
        authNames, contentTypes, accepts, returnType, callback
      );
    }

    /**
     * Callback function to receive the result of the searchAlbum operation.
     * @callback module:api/PublicApi~searchAlbumCallback
     * @param {String} error Error message, if any.
     * @param {Array.<module:model/AlbumItem>} data The data returned by the service call.
     * @param {String} response The complete HTTP response.
     */

    /**
     * busca listas de reproducción con ciertos parámetros
     * Al pasarle ciertos parámetros devuelve listas de reproducción que se ajusten a ellos 
     * @param {Object} opts Optional parameters
     * @param {String} opts.name nombre de la lista
     * @param {String} opts.author propietario de la lista
     * @param {Number} opts.skip number of records to skip for pagination
     * @param {Number} opts.limit maximum number of records to return
     * @param {module:api/PublicApi~searchAlbumCallback} callback The callback function, accepting three arguments: error, data, response
     * data is of type: {@link Array.<module:model/AlbumItem>}
     */
    searchAlbum(opts, callback) {
      opts = opts || {};
      let postBody = null;


      let pathParams = {
      };
      let queryParams = {
        'name': opts['name'],
        'author': opts['author'],
        'skip': opts['skip'],
        'limit': opts['limit']
      };
      let headerParams = {
      };
      let formParams = {
      };

      let authNames = [];
      let contentTypes = [];
      let accepts = ['application/json'];
      let returnType = [AlbumItem];

      return this.apiClient.callApi(
        '/albums', 'GET',
        pathParams, queryParams, headerParams, formParams, postBody,
        authNames, contentTypes, accepts, returnType, callback
      );
    }

    /**
     * Callback function to receive the result of the searchAuthors operation.
     * @callback module:api/PublicApi~searchAuthorsCallback
     * @param {String} error Error message, if any.
     * @param {Array.<module:model/AuthorItem>} data The data returned by the service call.
     * @param {String} response The complete HTTP response.
     */

    /**
     * busca autores con ciertos parámetros
     * Al pasarle ciertos parámetros devuelve usuarios que se ajusten a ellos 
     * @param {Object} opts Optional parameters
     * @param {String} opts.name nombre del autor
     * @param {Number} opts.skip number of records to skip for pagination
     * @param {Number} opts.limit maximum number of records to return
     * @param {module:api/PublicApi~searchAuthorsCallback} callback The callback function, accepting three arguments: error, data, response
     * data is of type: {@link Array.<module:model/AuthorItem>}
     */
    searchAuthors(opts, callback) {
      opts = opts || {};
      let postBody = null;


      let pathParams = {
      };
      let queryParams = {
        'name': opts['name'],
        'skip': opts['skip'],
        'limit': opts['limit']
      };
      let headerParams = {
      };
      let formParams = {
      };

      let authNames = [];
      let contentTypes = [];
      let accepts = ['application/json'];
      let returnType = [AuthorItem];

      return this.apiClient.callApi(
        '/authors', 'GET',
        pathParams, queryParams, headerParams, formParams, postBody,
        authNames, contentTypes, accepts, returnType, callback
      );
    }

    /**
     * Callback function to receive the result of the searchPlaylist operation.
     * @callback module:api/PublicApi~searchPlaylistCallback
     * @param {String} error Error message, if any.
     * @param {Array.<module:model/PlaylistItem>} data The data returned by the service call.
     * @param {String} response The complete HTTP response.
     */

    /**
     * busca listas de reproducción con ciertos parámetros
     * Al pasarle ciertos parámetros devuelve listas de reproducción que se ajusten a ellos 
     * @param {Object} opts Optional parameters
     * @param {String} opts.name nombre de la lista
     * @param {String} opts.owner propietario de la lista
     * @param {Number} opts.skip number of records to skip for pagination
     * @param {Number} opts.limit maximum number of records to return
     * @param {module:api/PublicApi~searchPlaylistCallback} callback The callback function, accepting three arguments: error, data, response
     * data is of type: {@link Array.<module:model/PlaylistItem>}
     */
    searchPlaylist(opts, callback) {
      opts = opts || {};
      let postBody = null;


      let pathParams = {
      };
      let queryParams = {
        'name': opts['name'],
        'owner': opts['owner'],
        'skip': opts['skip'],
        'limit': opts['limit']
      };
      let headerParams = {
      };
      let formParams = {
      };

      let authNames = [];
      let contentTypes = [];
      let accepts = ['application/json'];
      let returnType = [PlaylistItem];

      return this.apiClient.callApi(
        '/playlists', 'GET',
        pathParams, queryParams, headerParams, formParams, postBody,
        authNames, contentTypes, accepts, returnType, callback
      );
    }

    /**
     * Callback function to receive the result of the searchProfiles operation.
     * @callback module:api/PublicApi~searchProfilesCallback
     * @param {String} error Error message, if any.
     * @param {Array.<module:model/ProfileItem>} data The data returned by the service call.
     * @param {String} response The complete HTTP response.
     */

    /**
     * busca usuarios con ciertos parámetros
     * Al pasarle ciertos parámetros devuelve usuarios que se ajusten a ellos 
     * @param {Object} opts Optional parameters
     * @param {String} opts.name nombre del usuario
     * @param {String} opts.username username del usuario
     * @param {Number} opts.skip number of records to skip for pagination
     * @param {Number} opts.limit maximum number of records to return
     * @param {module:api/PublicApi~searchProfilesCallback} callback The callback function, accepting three arguments: error, data, response
     * data is of type: {@link Array.<module:model/ProfileItem>}
     */
    searchProfiles(opts, callback) {
      opts = opts || {};
      let postBody = null;


      let pathParams = {
      };
      let queryParams = {
        'name': opts['name'],
        'username': opts['username'],
        'skip': opts['skip'],
        'limit': opts['limit']
      };
      let headerParams = {
      };
      let formParams = {
      };

      let authNames = [];
      let contentTypes = [];
      let accepts = ['application/json'];
      let returnType = [ProfileItem];

      return this.apiClient.callApi(
        '/profiles', 'GET',
        pathParams, queryParams, headerParams, formParams, postBody,
        authNames, contentTypes, accepts, returnType, callback
      );
    }

    /**
     * Callback function to receive the result of the searchSong operation.
     * @callback module:api/PublicApi~searchSongCallback
     * @param {String} error Error message, if any.
     * @param {Array.<module:model/SongItem>} data The data returned by the service call.
     * @param {String} response The complete HTTP response.
     */

    /**
     * busca canciones con ciertos parámetros
     * Al pasarle ciertos parámetros devuelve cancionese que se ajusten a ellos 
     * @param {Object} opts Optional parameters
     * @param {String} opts.name nombre de la canción
     * @param {String} opts.author autor de la canción
     * @param {String} opts.genre genero de la canción
     * @param {Number} opts.skip number of records to skip for pagination
     * @param {Number} opts.limit maximum number of records to return
     * @param {module:api/PublicApi~searchSongCallback} callback The callback function, accepting three arguments: error, data, response
     * data is of type: {@link Array.<module:model/SongItem>}
     */
    searchSong(opts, callback) {
      opts = opts || {};
      let postBody = null;


      let pathParams = {
      };
      let queryParams = {
        'name': opts['name'],
        'author': opts['author'],
        'genre': opts['genre'],
        'skip': opts['skip'],
        'limit': opts['limit']
      };
      let headerParams = {
      };
      let formParams = {
      };

      let authNames = [];
      let contentTypes = [];
      let accepts = ['application/json'];
      let returnType = [SongItem];

      return this.apiClient.callApi(
        '/songs', 'GET',
        pathParams, queryParams, headerParams, formParams, postBody,
        authNames, contentTypes, accepts, returnType, callback
      );
    }


}
