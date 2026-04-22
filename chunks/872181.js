"use strict";
var r,
    i = n(860511),
    s = n(985848),
    a = n(339626),
    o = n(676528),
    l = n(65978),
    u = n(192819),
    d = n(627),
    c = i.Function,
    _ =
        /MSIE .\./.test(l) ||
        ("BUN" === o &&
            ((r = i.Bun.version.split(".")).length < 3 ||
                ("0" === r[0] && (r[1] < 3 || ("3" === r[1] && "0" === r[2])))));
e.exports = function (e, t) {
    var n = t ? 2 : 1;
    return _
        ? function (r, i) {
              var o = d(arguments.length, 1) > n,
                  l = a(r) ? r : c(r),
                  _ = o ? u(arguments, n) : [],
                  f = o
                      ? function () {
                            s(l, this, _);
                        }
                      : l;
              return t ? e(f, i) : e(f);
          }
        : e;
};
