"use strict";
var i = n(230606),
    r = n(339626),
    s = n(524152),
    a = n(633895),
    o = Object;
e.exports = a
    ? function (e) {
          return "symbol" == typeof e;
      }
    : function (e) {
          var t = i("Symbol");
          return r(t) && s(t.prototype, o(e));
      };
