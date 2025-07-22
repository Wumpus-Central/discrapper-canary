var r = n(127849),
    i = n(636881),
    a = n(880181),
    o = n(284955),
    s = n(476078),
    l = n(992174),
    c = n(338045),
    u = r.Function,
    d =
        /MSIE .\./.test(s) ||
        ('BUN' === o &&
            (function () {
                var e = r.Bun.version.split('.');
                return e.length < 3 || ('0' === e[0] && (e[1] < 3 || ('3' === e[1] && '0' === e[2])));
            })());
e.exports = function (e, t) {
    var n = t ? 2 : 1;
    return d
        ? function (r, o) {
              var s = c(arguments.length, 1) > n,
                  d = a(r) ? r : u(r),
                  _ = s ? l(arguments, n) : [],
                  f = s
                      ? function () {
                            i(d, this, _);
                        }
                      : d;
              return t ? e(f, o) : e(f);
          }
        : e;
};
