var getIn = require('../get_in');

describe('getIn', function() {
  context('on objects', function() {
    it('returns value for given keys path', function() {
      var result = getIn({ a: { b: { c: 42 } } }, ['a', 'b', 'c']);
      expect(result).to.be.eql(42);
    });

    it('returns undefined on broken keys path', function() {
      var result = getIn({ a: { b: { c: 42 } } }, ['z', 'b', 'c']);
      expect(result).to.be.undefined;
    });
  });
});

