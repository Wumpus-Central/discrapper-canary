var r = n(46015),
    i = n(621523),
    a = n(796138),
    o = Object,
    s = r(''.split);
e.exports = i(function () {
    return !o('z').propertyIsEnumerable(0);
})
    ? function (e) {
          return 'String' === a(e) ? s(e, '') : o(e);
      }
    : o;
