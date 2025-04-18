var r,
    i,
    a,
    o,
    s,
    l = n(127849),
    c = n(242606),
    u = n(48657),
    d = n(390827).set,
    f = n(557655),
    _ = n(266782),
    p = n(225991),
    h = n(787898),
    m = n(426625),
    g = l.MutationObserver || l.WebKitMutationObserver,
    E = l.document,
    b = l.process,
    y = l.Promise,
    v = c('queueMicrotask');
if (!v) {
    var O = new f(),
        I = function () {
            var e, t;
            for (m && (e = b.domain) && e.exit(); (t = O.get()); )
                try {
                    t();
                } catch (e) {
                    throw (O.head && r(), e);
                }
            e && e.enter();
        };
    _ || m || h || !g || !E
        ? !p && y && y.resolve
            ? (((o = y.resolve(void 0)).constructor = y),
              (s = u(o.then, o)),
              (r = function () {
                  s(I);
              }))
            : m
              ? (r = function () {
                    b.nextTick(I);
                })
              : ((d = u(d, l)),
                (r = function () {
                    d(I);
                }))
        : ((i = !0),
          (a = E.createTextNode('')),
          new g(I).observe(a, { characterData: !0 }),
          (r = function () {
              a.data = i = !i;
          })),
        (v = function (e) {
            O.head || r(), O.add(e);
        });
}
e.exports = v;
