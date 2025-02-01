var i = n(73184),
    r = n(533206),
    a = Object.prototype,
    s = a.hasOwnProperty,
    o = a.propertyIsEnumerable,
    l = i(
        (function () {
            return arguments;
        })()
    )
        ? i
        : function (e) {
              return r(e) && s.call(e, 'callee') && !o.call(e, 'callee');
          };
e.exports = l;
