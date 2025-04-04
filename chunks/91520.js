var t,
    r,
    c,
    i,
    a,
    o = _(127849),
    u = _(242606),
    f = _(48657),
    b = _(390827).set,
    d = _(557655),
    s = _(266782),
    w = _(225991),
    g = _(787898),
    l = _(426625),
    h = o.MutationObserver || o.WebKitMutationObserver,
    p = o.document,
    m = o.process,
    y = o.Promise,
    k = u('queueMicrotask');
if (!k) {
    var x = new d(),
        R = function () {
            var e, n;
            for (l && (e = m.domain) && e.exit(); (n = x.get()); )
                try {
                    n();
                } catch (e) {
                    throw (x.head && t(), e);
                }
            e && e.enter();
        };
    s || l || g || !h || !p
        ? !w && y && y.resolve
            ? (((i = y.resolve(void 0)).constructor = y),
              (a = f(i.then, i)),
              (t = function () {
                  a(R);
              }))
            : l
              ? (t = function () {
                    m.nextTick(R);
                })
              : ((b = f(b, o)),
                (t = function () {
                    b(R);
                }))
        : ((r = !0),
          (c = p.createTextNode('')),
          new h(R).observe(c, { characterData: !0 }),
          (t = function () {
              c.data = r = !r;
          })),
        (k = function (e) {
            x.head || t(), x.add(e);
        });
}
e.exports = k;
