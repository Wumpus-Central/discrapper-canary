n.d(t, { C: () => g });
var r = n(255367),
    i = n(73800),
    l = n(442837),
    s = n(852860),
    a = n(434404),
    o = n(999382),
    c = n(621319),
    u = n(44550),
    d = n(770270),
    m = n(203377);
function g() {
    let {
            vanityURLCode: e,
            hasChanges: t,
            errorDetails: n
        } = (0, l.cj)([u.Z], () => ({
            vanityURLCode: u.Z.vanityURLCode,
            hasChanges: u.Z.hasChanges(),
            errorDetails: u.Z.errorDetails
        })),
        { guild: g, submitting: p, errors: h, hasChanges: f } = (0, l.cj)([o.Z], () => o.Z.getProps()),
        x = i.useMemo(() => (null != n ? (0, d.i)(null == n ? void 0 : n.code) : (0, m.LG)(h)), [h, n]),
        b = i.useCallback(async () => {
            if (null != g && (t && (await (0, c.en)(g.id, e, { throwErr: !0 })), f)) {
                let e = {
                    premiumProgressBarEnabled: g.premiumProgressBarEnabled,
                    banner: g.banner,
                    splash: g.splash
                };
                await a.Z.saveGuild(g.id, e, { throwErr: !0 });
            }
        }, [g, f, t, e]),
        j = i.useCallback(() => {
            null != g && (a.Z.init(g.id), (0, c.H7)());
        }, [g]);
    return (0, r.jsx)(s.Z, {
        submitting: p,
        errorMessage: x,
        onSave: b,
        onReset: j
    });
}
