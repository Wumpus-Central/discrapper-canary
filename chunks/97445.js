r.d(t, { Z: () => s });
var n = r(465407),
    o = r(370873),
    a = Object.prototype,
    i = a.hasOwnProperty,
    l = a.propertyIsEnumerable;
let s = (0, n.Z)(
    (function () {
        return arguments;
    })()
)
    ? n.Z
    : function (e) {
          return (0, o.Z)(e) && i.call(e, 'callee') && !l.call(e, 'callee');
      };
