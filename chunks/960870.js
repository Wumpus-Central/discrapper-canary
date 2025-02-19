n.d(t, { Z: () => d });
var r = n(192379),
    i = n(442837),
    o = n(906732),
    a = n(353647),
    s = n(785717),
    l = n(221292);
function c(e, t, n) {
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
function u(e) {
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
                c(e, t, n[t]);
            });
    }
    return e;
}
function d(e) {
    let { user: t, display: n, activity: c, entry: d, stream: f, voiceChannelId: p, analyticsLocations: _ } = e,
        { context: h, trackUserProfileAction: m } = (0, s.KZ)(),
        { analyticsLocations: g } = (0, o.ZP)(),
        E = null != _ ? _ : g,
        v = (0, i.e7)([a.Z], () => a.Z.getUserOutbox(t.id));
    return (0, r.useCallback)(
        (e) => {
            let { action: t } = e;
            m({
                action: t,
                analyticsLocations: E
            }),
                (0, l.z7)(
                    u(
                        {
                            action: t,
                            display: n,
                            activity: c,
                            entry: d,
                            stream: f,
                            outbox: v,
                            voiceChannelId: p,
                            analyticsLocations: E
                        },
                        h
                    )
                );
        },
        [m, h, n, c, f, d, v, p, E]
    );
}
