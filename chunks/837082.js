"use strict";
var r = n(230606),
    i = n(339626),
    s = n(524152),
    a = n(633895),
    o = Object;
e.exports = a
    ? function (e) {
          return "symbol" == typeof e;
      }
    : function (e) {
          var t = r("Symbol");
          return i(t) && s(t.prototype, o(e));
      };
