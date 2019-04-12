var mySingleton = (function() {
  var instance;
  function init() {
    var number = 0;
    return {
      setNumber : function(x) {
        number = x;
      },
      getNumber : function() {
        return number;
      }
    };
  }

  return {
    getInstance : function() {
      if (!instance) instance = init();
      return instance;
    }
  }
})();

var instA = mySingleton.getInstance();
instA.setNumber(10);
console.log("instance A: ", instA.getNumber());

var instB = mySingleton.getInstance();
console.log("instance B: ", instB.getNumber())

console.log(instA === instB); 