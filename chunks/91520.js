var e,
    o,
    i,
    u,
    c,
    a = r(127849),
    f = r(242606),
    s = r(48657),
    l = r(390827).set,
    p = r(557655),
    d = r(266782),
    _ = r(225991),
    h = r(787898),
    y = r(426625),
    b = a.MutationObserver || a.WebKitMutationObserver,
    g = a.document,
    v = a.process,
    w = a.Promise,
    m = f('queueMicrotask');
if (!m) {
    var x = new p(),
        A = function () {
            var t, n;
            for (y && (t = v.domain) && t.exit(); (n = x.get()); )
                try {
                    n();
                } catch (t) {
                    throw (x.head && e(), t);
                }
            t && t.enter();
        };
    d || y || h || !b || !g
        ? !_ && w && w.resolve
            ? (((u = w.resolve(void 0)).constructor = w),
              (c = s(u.then, u)),
              (e = function () {
                  c(A);
              }))
            : y
              ? (e = function () {
                    v.nextTick(A);
                })
              : ((l = s(l, a)),
                (e = function () {
                    l(A);
                }))
        : ((o = !0),
          (i = g.createTextNode('')),
          new b(A).observe(i, { characterData: !0 }),
          (e = function () {
              i.data = o = !o;
          })),
        (m = function (t) {
            x.head || e(), x.add(t);
        });
}
t.exports = m;
