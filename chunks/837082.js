var n = e(230606),
    o = e(339626),
    i = e(524152),
    a = e(633895),
    u = Object;
r.exports = a
    ? function (r) {
          return "symbol" == typeof r;
      }
    : function (r) {
          var t = n("Symbol");
          return o(t) && i(t.prototype, u(r));
      };
