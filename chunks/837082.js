var r = n(230606),
    i = n(339626),
    a = n(524152),
    s = n(633895),
    o = Object;
e.exports = s
    ? function (e) {
          return "symbol" == typeof e;
      }
    : function (e) {
          var t = r("Symbol");
          return i(t) && a(t.prototype, o(e));
      };
