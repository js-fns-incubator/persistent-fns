var getIn = function(obj, keys) {
  var acc = obj;

  for (var i = 0; i < keys.length; i++) {
    var key = keys[i];

    if (acc && acc.hasOwnProperty(key)) {
      acc = acc[key];
    } else {
      return;
    }
  }

  return acc;
};

module.exports = getIn;

