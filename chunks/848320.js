"use strict";
var r,
    a,
    o,
    i,
    s,
    l = n(308227),
    c = n(126726),
    u = n(241091),
    d = n(282532).set,
    p = n(74414),
    h = n(124673),
    f = n(610594),
    m = n(748415),
    y = n(184110),
    v = l.MutationObserver || l.WebKitMutationObserver,
    g = l.document,
    b = l.process,
    A = l.Promise,
    _ = c("queueMicrotask");
if (!_) {
    var k = new p(),
        C = function () {
            var e, t;
            for (y && (e = b.domain) && e.exit(); (t = k.get()); )
                try {
                    t();
                } catch (e) {
                    throw (k.head && r(), e);
                }
            e && e.enter();
        };
    h || y || m || !v || !g
        ? !f && A && A.resolve
            ? (((i = A.resolve(void 0)).constructor = A),
              (s = u(i.then, i)),
              (r = function () {
                  s(C);
              }))
            : y
              ? (r = function () {
                    b.nextTick(C);
                })
              : ((d = u(d, l)),
                (r = function () {
                    d(C);
                }))
        : ((a = !0),
          (o = g.createTextNode("")),
          new v(C).observe(o, { characterData: !0 }),
          (r = function () {
              o.data = a = !a;
          })),
        (_ = function (e) {
            k.head || r(), k.add(e);
        });
}
e.exports = _;
