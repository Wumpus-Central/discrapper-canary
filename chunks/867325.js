var r = n(668530),
    i = n(156741),
    o = n(735471),
    a = n(262546),
    s = n(204384),
    l = n(780524),
    c = n(274745),
    u = r.Function,
    d =
        /MSIE .\./.test(s) ||
        (a &&
            (function () {
                var e = r.Bun.version.split('.');
                return e.length < 3 || ('0' === e[0] && (e[1] < 3 || ('3' === e[1] && '0' === e[2])));
            })());
e.exports = function (e, t) {
    var n = t ? 2 : 1;
    return d
        ? function (r, a) {
              var s = c(arguments.length, 1) > n,
                  d = o(r) ? r : u(r),
                  f = s ? l(arguments, n) : [],
                  p = s
                      ? function () {
                            i(d, this, f);
                        }
                      : d;
              return t ? e(p, a) : e(p);
          }
        : e;
};
