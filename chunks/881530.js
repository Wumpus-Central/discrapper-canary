n.d(t, { Z: () => p });
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
                  writable: !0,
              })
            : (e[t] = n),
        e
    );
}
function f(e) {
    for (var t = 1; t < arguments.length; t++) {
        var n = null != arguments[t] ? arguments[t] : {},
            r = Object.keys(n);
        "function" == typeof Object.getOwnPropertySymbols &&
            (r = r.concat(
                Object.getOwnPropertySymbols(n).filter(function (e) {
                    return Object.getOwnPropertyDescriptor(n, e).enumerable;
                }),
            )),
            r.forEach(function (t) {
                d(e, t, n[t]);
            });
    }
    return e;
}
function p(e) {
    let { location: t, user: n, currentUser: d, activity: p, application: _, entry: m, onClose: h } = e,
        g = (0, s.Z)(
            f(
                {
                    location: t,
                    source: o.m1.UserProfile,
                    trackEntryPointImpression: !0,
                },
                (0, c.nK)({
                    user: n,
                    activity: p,
                    entry: m,
                }),
            ),
        ),
        E = (0, u.Z)({
            applicationId: null == _ ? void 0 : _.id,
            onClose: h,
        }),
        b = (0, i.Z)(p);
    return b && null != _
        ? E
        : !b && (0, a.Z)(p)
          ? g
          : (0, r.Z)(p) && n.id !== d.id
            ? () =>
                  (0, l.s)({
                      activity: p,
                      user: n,
                      index: 0,
                  })
            : void 0;
}
