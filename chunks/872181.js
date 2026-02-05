"use strict";
var r = n(860511),
    i = n(985848),
    a = n(339626),
    s = n(676528),
    o = n(65978),
    l = n(192819),
    u = n(627),
    c = r.Function,
    d =
        /MSIE .\./.test(o) ||
        ("BUN" === s &&
            (function () {
                var e = r.Bun.version.split(".");
                return e.length < 3 || ("0" === e[0] && (e[1] < 3 || ("3" === e[1] && "0" === e[2])));
            })());
e.exports = function (e, t) {
    var n = t ? 2 : 1;
    return d
        ? function (r, s) {
              var o = u(arguments.length, 1) > n,
                  d = a(r) ? r : c(r),
                  _ = o ? l(arguments, n) : [],
                  f = o
                      ? function () {
                            i(d, this, _);
                        }
                      : d;
              return t ? e(f, s) : e(f);
          }
        : e;
};
