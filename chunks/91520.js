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
    p = n(266782),
    _ = n(225991),
    m = n(787898),
    h = n(426625),
    g = l.MutationObserver || l.WebKitMutationObserver,
    E = l.document,
    b = l.process,
    y = l.Promise,
    O = c("queueMicrotask");
if (!O) {
    var v = new f(),
        S = function () {
            var e, t;
            for (h && (e = b.domain) && e.exit(); (t = v.get()); )
                try {
                    t();
                } catch (e) {
                    throw (v.head && r(), e);
                }
            e && e.enter();
        };
    p || h || m || !g || !E
        ? !_ && y && y.resolve
            ? (((o = y.resolve(void 0)).constructor = y),
              (s = u(o.then, o)),
              (r = function () {
                  s(S);
              }))
            : h
              ? (r = function () {
                    b.nextTick(S);
                })
              : ((d = u(d, l)),
                (r = function () {
                    d(S);
                }))
        : ((i = !0),
          (a = E.createTextNode("")),
          new g(S).observe(a, { characterData: !0 }),
          (r = function () {
              a.data = i = !i;
          })),
        (O = function (e) {
            v.head || r(), v.add(e);
        });
}
e.exports = O;
