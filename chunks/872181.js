"use strict";
var i,
    r = n(860511),
    s = n(985848),
    a = n(339626),
    o = n(676528),
    l = n(65978),
    u = n(192819),
    c = n(627),
    d = r.Function,
    _ =
        /MSIE .\./.test(l) ||
        ("BUN" === o &&
            ((i = r.Bun.version.split(".")).length < 3 ||
                ("0" === i[0] && (i[1] < 3 || ("3" === i[1] && "0" === i[2])))));
e.exports = function (e, t) {
    var n = t ? 2 : 1;
    return _
        ? function (i, r) {
              var o = c(arguments.length, 1) > n,
                  l = a(i) ? i : d(i),
                  _ = o ? u(arguments, n) : [],
                  h = o
                      ? function () {
                            s(l, this, _);
                        }
                      : l;
              return t ? e(h, r) : e(h);
          }
        : e;
};
