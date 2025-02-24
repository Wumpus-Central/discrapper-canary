var r,
    o = n(668530),
    a = n(156741),
    i = n(735471),
    s = n(262546),
    c = n(204384),
    l = n(780524),
    u = n(274745),
    d = o.Function,
    p = /MSIE .\./.test(c) || (s && ((r = o.Bun.version.split('.')).length < 3 || ('0' === r[0] && (r[1] < 3 || ('3' === r[1] && '0' === r[2])))));
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
