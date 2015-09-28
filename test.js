var create = require('./')
var test = require('tape')

test('creates a quaternion from two unit vectors', function (t) {
  var a = [1, 0, 0]
  var b = [-1, 0, 0]
  t.deepEqual(create([], a, b), [ 0, 1, 0, 0 ])
  t.deepEqual(create([], b, a), [ 0, -1, 0, 0 ])
  t.deepEqual(create([], [0, 0, -1], [0, 0, 1]), [ 0, 1, 0, 0 ])
  t.deepEqual(create([], [0, 0, 0], [0, 0, 1]), [ 0, 0, 0, 1 ])
  
  var ret = []
  t.equal(create(ret, a, b), ret, 'uses passed out value')
  t.deepEqual(a, [1, 0, 0], 'does not mutate a')
  t.deepEqual(b, [-1, 0, 0], 'does not mutate b')
  t.end()
})
