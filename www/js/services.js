angular.module('starter.services', [])

.factory('Chats', function() {
  // Might use a resource here that returns a JSON array

  // Some fake testing data
  var chats = [{
    id: 0,
    name: 'Bisection method'
  }, {
    id: 1,
    name: 'False rule'
  }, {
    id: 2,
    name: 'Fixed Point'
  }, {
    id: 3,
    name: 'Secant'
  }, {
    id: 4,
    name: 'Multiple roots'
  },{
    id: 5,
    name: 'Secant'
  }];

  return {
    all: function() {
      return chats;
    },
    remove: function(chat) {
      chats.splice(chats.indexOf(chat), 1);
    },
    get: function(chatId) {
      for (var i = 0; i < chats.length; i++) {
        if (chats[i].id === parseInt(chatId)) {
          return chats[i];
        }
      }
      return null;
    }
  };
});
