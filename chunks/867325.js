var i = r(668530),
    a = r(156741),
    o = r(735471),
    s = r(262546),
    l = r(204384),
    u = r(780524),
    c = r(274745),
    d = i.Function,
    f =
        /MSIE .\./.test(l) ||
        (s &&
            (function () {
                var e = i.Bun.version.split('.');
                return e.length < 3 || ('0' === e[0] && (e[1] < 3 || ('3' === e[1] && '0' === e[2])));
            })());
e.exports = function (e, n) {
    var r = n ? 2 : 1;
    return f
        ? function (i, s) {
              var l = c(arguments.length, 1) > r,
                  f = o(i) ? i : d(i),
                  p = l ? u(arguments, r) : [],
                  h = l
                      ? function () {
                            a(f, this, p);
                        }
                      : f;
              return n ? e(h, s) : e(h);
          }
        : e;
};
