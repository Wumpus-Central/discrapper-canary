n.d(t, { A: () => d });
var r = n(64700),
    i = n(311907),
    a = n(688810),
    s = n(517164),
    o = n(183555),
    l = n(672385);
function c(e, t, n) {
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
function u(e) {
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
                c(e, t, n[t]);
            });
    }
    return e;
}
function d(e) {
    let { user: t, display: n, activity: c, entry: d, stream: f, voiceChannelId: p, analyticsLocations: _ } = e,
        { context: h, trackUserProfileAction: m } = (0, o.NJ)(),
        { analyticsLocations: g } = (0, a.Ay)(),
        E = null != _ ? _ : g,
        b = (0, i.bG)([s.A], () => s.A.getUserOutbox(t.id));
    return (0, r.useCallback)(
        (e) => {
            let { action: t } = e;
            m({
                action: t,
                analyticsLocations: E,
            }),
                (0, l.Tu)(
                    u(
                        {
                            action: t,
                            display: n,
                            activity: c,
                            entry: d,
                            stream: f,
                            outbox: b,
                            voiceChannelId: p,
                            analyticsLocations: E,
                        },
                        h,
                    ),
                );
        },
        [m, h, n, c, f, d, b, p, E],
    );
}
