var e = r(46015),
    o = r(621523),
    i = r(796138),
    u = Object,
    c = e(''.split);
t.exports = o(function () {
    return !u('z').propertyIsEnumerable(0);
})
    ? function (t) {
          return 'String' === i(t) ? c(t, '') : u(t);
      }
    : u;
