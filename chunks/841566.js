var r = n(73184),
    i = n(533206),
    o = Object.prototype,
    a = o.hasOwnProperty,
    s = o.propertyIsEnumerable;
e.exports = r(
    (function () {
        return arguments;
    })()
)
    ? r
    : function (e) {
          return i(e) && a.call(e, 'callee') && !s.call(e, 'callee');
      };
