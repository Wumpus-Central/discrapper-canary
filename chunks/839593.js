var e = n(178476),
    o = n(971428),
    i = n(658538),
    u = n(180300),
    s = Object;
t.exports = u
    ? function (t) {
          return 'symbol' == typeof t;
      }
    : function (t) {
          var r = e('Symbol');
          return o(r) && i(r.prototype, s(t));
      };
