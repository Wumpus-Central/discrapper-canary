var r = n(675879),
    a = n(999843),
    o = n(407057),
    i = n(512008),
    s = n(596479),
    l = n(691805),
    c = Function,
    u = r([].concat),
    d = r([].join),
    p = {},
    h = function (e, t, n) {
        if (!i(p, t)) {
            for (var r = [], a = 0; a < t; a++) r[a] = "a[" + a + "]";
            p[t] = c("C,a", "return new C(" + d(r, ",") + ")");
        }
        return p[t](e, n);
    };
e.exports = l
    ? c.bind
    : function (e) {
          var t = a(this),
              n = t.prototype,
              r = s(arguments, 1),
              i = function () {
                  var n = u(r, s(arguments));
                  return this instanceof i ? h(t, n.length, n) : t.apply(e, n);
              };
          return o(n) && (i.prototype = n), i;
      };
