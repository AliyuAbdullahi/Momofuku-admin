angular.module('Momofuku')
  .factory('States', ['$firebaseArray', '$firebaseObject',
    function($firebaseArray, $firebaseObject) {
      
      return {
        all: function(cb) {
          if(!cb) {
            return $firebaseArray(Refs.allocations);
          }
          else {
            Refs.allocations.once('value', function(snap) {
              cb(snap.val());
            });
          }
        },

        find: function(id, cb) {
          var ref;
          if(id.indexOf('http') === 0) {
            ref = new Firebase(id);
          }
          else {
            ref = Refs.allocations.child(id);
          }
          if(!cb) {
            return $firebaseObject(ref);
          }
          else {
            ref.once('value', function(snap) {
              cb(snap.val());
            });
          }
        },

        create: function(allocation, cb) {
          var allocRef = Refs.allocations.push(allocation, function(err) {
            if(err) {
              cb(null);
            }
            else {
              cb(allocRef);
            }
          });
        }
      };
    }
  ]);