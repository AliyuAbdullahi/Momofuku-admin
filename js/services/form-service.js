angular.module('Momofuku')
  .factory('Cities', ['$firebaseArray', '$firebaseObject',

    function($firebaseArray, $firebaseObject) {
      var firebaseRef = new Firebase('https://momofuku.firebaseio.com/').child('cities');      
      return {
        restaurants: function(cb){
          if(!cb){
            return $firebaseArray(firebaseRef.orderByChild('restaurants'));
          }
          else{
              firebaseRef.orderByChild('restaurants').once('value', function(snap) {
              cb(snap.val());
            });
          }
          
        },

        all: function(cb) {
          if(!cb) {
            return $firebaseArray(firebaseRef);
          }
          else {
            firebaseRef.once('value', function(snap) {
              cb(snap.val());
            });
          }
        },

        ref: firebaseRef, 

        find: function(id, cb) {
          var ref;
          if(id.indexOf('http') === 0) {
            ref = new Firebase(id);
          }
          else {
            ref = firebaseRef.child(id);
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
        
        update: function(data, id, cb) {
          firebaseRef.child(id).update(data, function(err) {
            if(err) {
              cb(err);
            }
            else {
              cb();
            }
          });
        },

        create: function(city, cb) {
          var cityRef = firebaseRef.push(city, function(err) {
            if(err) {
              cb(null);
            }
            else {
              cb();
            }
          });
        }
      };
    }
  ]);