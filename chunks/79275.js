var r = n(46015),
    i = n(621523),
    o = n(796138),
    a = Object,
    s = r(''.split);
e.exports = i(function () {
    return !a('z').propertyIsEnumerable(0);
})
    ? function (e) {
          return 'String' === o(e) ? s(e, '') : a(e);
      }
    : a;
