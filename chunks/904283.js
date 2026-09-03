var n = r(439619),
    i = n("%Object.preventExtensions%", !0),
    o = n("%Object.isExtensible%", !0),
    a = r(858156);
e.exports = i
    ? function (e) {
          return !a(e) && o(e);
      }
    : function (e) {
          return !a(e);
      };
