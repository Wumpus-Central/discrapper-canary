var i = r(465407),
    a = r(370873),
    o = Object.prototype,
    s = o.hasOwnProperty,
    l = o.propertyIsEnumerable,
    u = (0, i.Z)(
        (function () {
            return arguments;
        })()
    )
        ? i.Z
        : function (e) {
              return (0, a.Z)(e) && s.call(e, 'callee') && !l.call(e, 'callee');
          };
n.Z = u;
