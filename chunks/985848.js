"use strict";
var i = n(630017),
    r = Function.prototype,
    s = r.apply,
    a = r.call;
e.exports =
    ("object" == typeof Reflect && Reflect.apply) ||
    (i
        ? a.bind(s)
        : function () {
              return a.apply(s, arguments);
          });
