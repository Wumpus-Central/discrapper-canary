var r = n(654714),
    i = n(422750),
    a = Object.prototype,
    s = a.hasOwnProperty,
    o = a.propertyIsEnumerable;
e.exports = r(
    (function () {
        return arguments;
    })(),
)
    ? r
    : function (e) {
          return i(e) && s.call(e, "callee") && !o.call(e, "callee");
      };
