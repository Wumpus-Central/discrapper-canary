var i = r(73184),
    a = r(533206),
    o = Object.prototype,
    s = o.hasOwnProperty,
    l = o.propertyIsEnumerable,
    u = i(
        (function () {
            return arguments;
        })()
    )
        ? i
        : function (e) {
              return a(e) && s.call(e, 'callee') && !l.call(e, 'callee');
          };
e.exports = u;
