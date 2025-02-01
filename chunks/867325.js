var i = n(668530),
    r = n(156741),
    a = n(735471),
    s = n(262546),
    o = n(204384),
    l = n(780524),
    u = n(274745),
    c = i.Function,
    d =
        /MSIE .\./.test(o) ||
        (s &&
            (function () {
                var e = i.Bun.version.split('.');
                return e.length < 3 || ('0' === e[0] && (e[1] < 3 || ('3' === e[1] && '0' === e[2])));
            })());
e.exports = function (e, t) {
    var n = t ? 2 : 1;
    return d
        ? function (i, s) {
              var o = u(arguments.length, 1) > n,
                  d = a(i) ? i : c(i),
                  f = o ? l(arguments, n) : [],
                  _ = o
                      ? function () {
                            r(d, this, f);
                        }
                      : d;
              return t ? e(_, s) : e(_);
          }
        : e;
};
