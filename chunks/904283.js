var r = n(439619),
    i = r("%Object.preventExtensions%", !0),
    a = r("%Object.isExtensible%", !0),
    s = n(858156);
e.exports = i
    ? function (e) {
          return !s(e) && a(e);
      }
    : function (e) {
          return !s(e);
      };
