n.d(t, { C: () => d });
var r = n(200651),
    i = n(192379),
    s = n(442837),
    a = n(852860),
    l = n(434404),
    o = n(999382),
    c = n(203377);
function d() {
    let { guild: e, submitting: t, errors: n } = (0, s.cj)([o.Z], () => o.Z.getProps()),
        d = i.useMemo(() => (0, c.LG)(n), [n]),
        u = i.useCallback(() => {
            if (null == e) return;
            let t = {
                premiumProgressBarEnabled: e.premiumProgressBarEnabled,
                banner: e.banner,
                splash: e.splash
            };
            l.Z.saveGuild(e.id, t);
        }, [e]),
        m = i.useCallback(() => {
            null != e && l.Z.init(e.id);
        }, [e]);
    return (0, r.jsx)(a.Z, {
        submitting: t,
        errorMessage: d,
        onSave: u,
        onReset: m
    });
}
