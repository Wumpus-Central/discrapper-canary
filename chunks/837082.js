var n = e(230606),
    o = e(339626),
    i = e(524152),
    u = e(633895),
    a = Object;
r.exports = u
    ? function (r) {
          return "symbol" == typeof r;
      }
    : function (r) {
          var t = n("Symbol");
          return o(t) && i(t.prototype, a(r));
      };
