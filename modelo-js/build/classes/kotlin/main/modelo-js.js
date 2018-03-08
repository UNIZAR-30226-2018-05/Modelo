if (typeof kotlin === 'undefined') {
  throw new Error("Error loading module 'modelo-js'. Its dependency 'kotlin' was not found. Please, check whether 'kotlin' is loaded prior to 'modelo-js'.");
}
this['modelo-js'] = function (_, Kotlin) {
  'use strict';
  var Kind_CLASS = Kotlin.Kind.CLASS;
  var Kind_INTERFACE = Kotlin.Kind.INTERFACE;
  function Date_0() {
  }
  Date_0.$metadata$ = {
    kind: Kind_CLASS,
    simpleName: 'Date',
    interfaces: []
  };
  function File() {
  }
  File.$metadata$ = {
    kind: Kind_CLASS,
    simpleName: 'File',
    interfaces: []
  };
  function Album() {
  }
  Album.$metadata$ = {
    kind: Kind_INTERFACE,
    simpleName: 'Album',
    interfaces: [SongListWithImage]
  };
  function Artist() {
  }
  Artist.$metadata$ = {
    kind: Kind_INTERFACE,
    simpleName: 'Artist',
    interfaces: []
  };
  function Facade() {
  }
  Facade.$metadata$ = {
    kind: Kind_INTERFACE,
    simpleName: 'Facade',
    interfaces: []
  };
  function Song() {
  }
  Song.$metadata$ = {
    kind: Kind_INTERFACE,
    simpleName: 'Song',
    interfaces: []
  };
  function SongList() {
  }
  SongList.$metadata$ = {
    kind: Kind_INTERFACE,
    simpleName: 'SongList',
    interfaces: []
  };
  function SongListWithImage() {
  }
  SongListWithImage.$metadata$ = {
    kind: Kind_INTERFACE,
    simpleName: 'SongListWithImage',
    interfaces: [SongList]
  };
  function User() {
  }
  User.$metadata$ = {
    kind: Kind_INTERFACE,
    simpleName: 'User',
    interfaces: []
  };
  var package$cierzo = _.cierzo || (_.cierzo = {});
  var package$modelo = package$cierzo.modelo || (package$cierzo.modelo = {});
  var package$util = package$modelo.util || (package$modelo.util = {});
  package$util.Date = Date_0;
  package$util.File = File;
  var package$interfaces = package$modelo.interfaces || (package$modelo.interfaces = {});
  package$interfaces.Album = Album;
  package$interfaces.Artist = Artist;
  package$interfaces.Facade = Facade;
  package$interfaces.Song = Song;
  package$interfaces.SongList = SongList;
  package$interfaces.SongListWithImage = SongListWithImage;
  package$interfaces.User = User;
  Kotlin.defineModule('modelo-js', _);
  return _;
}(typeof this['modelo-js'] === 'undefined' ? {} : this['modelo-js'], kotlin);
