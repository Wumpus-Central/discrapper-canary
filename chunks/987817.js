"use strict";
var r,
    a = n(308227),
    o = n(421236),
    i = n(309270),
    s = n(45388),
    l = n(13934),
    c = n(596479),
    u = n(978887),
    d = a.Function,
    p =
        /MSIE .\./.test(l) ||
        ("BUN" === s &&
            ((r = a.Bun.version.split(".")).length < 3 ||
                ("0" === r[0] && (r[1] < 3 || ("3" === r[1] && "0" === r[2])))));
e.exports = function (e, t) {
    var n = t ? 2 : 1;
    return p
        ? function (r, a) {
              var s = u(arguments.length, 1) > n,
                  l = i(r) ? r : d(r),
                  p = s ? c(arguments, n) : [],
                  h = s
                      ? function () {
                            o(l, this, p);
                        }
                      : l;
              return t ? e(h, a) : e(h);
          }
        : e;
};
