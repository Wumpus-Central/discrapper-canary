"use strict";
var n = r(439619),
    o = n("%Object.preventExtensions%", !0),
    i = n("%Object.isExtensible%", !0),
    a = r(858156);
e.exports = o
    ? function (e) {
          return !a(e) && i(e);
      }
    : function (e) {
          return !a(e);
      };
