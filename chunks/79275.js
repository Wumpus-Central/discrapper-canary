var r = a(46015),
    n = a(621523),
    _ = a(796138),
    o = Object,
    i = r(''.split);
t.exports = n(function () {
    return !o('z').propertyIsEnumerable(0);
})
    ? function (t) {
          return 'String' === _(t) ? i(t, '') : o(t);
      }
    : o;
