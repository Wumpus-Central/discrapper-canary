n.d(t, { Z: () => f });
var r = n(394821),
    i = n(841784),
    a = n(833664),
    o = n(810568),
    s = n(168524),
    l = n(103479),
    c = n(553375),
    u = n(614716);
function d(e, t, n) {
    return (
        t in e
            ? Object.defineProperty(e, t, {
                  value: n,
                  enumerable: !0,
                  configurable: !0,
                  writable: !0
              })
            : (e[t] = n),
        e
    );
}
function _(e) {
    for (var t = 1; t < arguments.length; t++) {
        var n = null != arguments[t] ? arguments[t] : {},
            r = Object.keys(n);
        ('function' == typeof Object.getOwnPropertySymbols &&
            (r = r.concat(
                Object.getOwnPropertySymbols(n).filter(function (e) {
                    return Object.getOwnPropertyDescriptor(n, e).enumerable;
                })
            )),
            r.forEach(function (t) {
                d(e, t, n[t]);
            }));
    }
    return e;
}
function f(e) {
    let { location: t, user: n, currentUser: d, activity: f, application: p, entry: h, onClose: m } = e,
        g = (0, s.Z)(
            _(
                {
                    location: t,
                    source: o.m1.UserProfile,
                    trackEntryPointImpression: !0
                },
                (0, c.nK)({
                    user: n,
                    activity: f,
                    entry: h
                })
            )
        ),
        E = (0, u.Z)({
            applicationId: null == p ? void 0 : p.id,
            onClose: m
        }),
        b = (0, i.Z)(f);
    return b && null != p
        ? E
        : !b && (0, a.Z)(f)
          ? g
          : (0, r.Z)(f) && n.id !== d.id
            ? () =>
                  (0, l.s)({
                      activity: f,
                      user: n,
                      index: 0
                  })
            : void 0;
}
