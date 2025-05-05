n.d(t, { Z: () => h });
var r = n(394821),
    i = n(841784),
    o = n(833664),
    a = n(499254),
    s = n(827498),
    l = n(541716),
    c = n(810568),
    u = n(168524),
    d = n(103479),
    f = n(553375);
function _(e, t, n) {
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
function p(e) {
    for (var t = 1; t < arguments.length; t++) {
        var n = null != arguments[t] ? arguments[t] : {},
            r = Object.keys(n);
        'function' == typeof Object.getOwnPropertySymbols &&
            (r = r.concat(
                Object.getOwnPropertySymbols(n).filter(function (e) {
                    return Object.getOwnPropertyDescriptor(n, e).enumerable;
                })
            )),
            r.forEach(function (t) {
                _(e, t, n[t]);
            });
    }
    return e;
}
function h(e) {
    let { location: t, user: n, currentUser: _, activity: h, application: m, entry: g, onClose: E } = e,
        b = (0, u.Z)(
            p(
                {
                    location: t,
                    source: c.m1.UserProfile,
                    trackEntryPointImpression: !0
                },
                (0, f.nK)({
                    user: n,
                    activity: h,
                    entry: g
                })
            )
        ),
        y = (0, i.Z)(h);
    return y && null != m
        ? () => {
              null == E || E(), a.__(s._b.TEXT, l.Ie.NORMAL, { applicationId: m.id });
          }
        : !y && (0, o.Z)(h)
          ? b
          : (0, r.Z)(h) && n.id !== _.id
            ? () =>
                  (0, d.s)({
                      activity: h,
                      user: n,
                      index: 0
                  })
            : void 0;
}
