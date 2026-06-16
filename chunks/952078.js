"use strict";
var r = n(308227),
    a = n(486816),
    o = n(675879),
    i = n(57284),
    s = n(918189).trim,
    l = n(564399),
    c = r.parseInt,
    u = r.Symbol,
    d = u && u.iterator,
    p = /^[+-]?0x/i,
    h = o(p.exec);
e.exports =
    8 !== c(l + "08") ||
    22 !== c(l + "0x16") ||
    (d &&
        !a(function () {
            c(Object(d));
        }))
        ? function (e, t) {
              var n = s(i(e));
              return c(n, t >>> 0 || (h(p, n) ? 16 : 10));
          }
        : c;
