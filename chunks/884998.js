var r,
    o = n(424353),
    a = n(498996),
    i = n(971428),
    s = n(560103),
    c = n(673574),
    l = n(689933),
    u = n(592802),
    d = o.Function,
    p = /MSIE .\./.test(c) || ('BUN' === s && ((r = o.Bun.version.split('.')).length < 3 || ('0' === r[0] && (r[1] < 3 || ('3' === r[1] && '0' === r[2])))));
e.exports = function (e, t) {
    var n = t ? 2 : 1;
    return p
        ? function (r, o) {
              var s = u(arguments.length, 1) > n,
                  c = i(r) ? r : d(r),
                  p = s ? l(arguments, n) : [],
                  h = s
                      ? function () {
                            a(c, this, p);
                        }
                      : c;
              return t ? e(h, o) : e(h);
          }
        : e;
};
