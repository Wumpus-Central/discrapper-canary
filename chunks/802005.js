n.d(t, { C: () => m });
var r = n(951288),
    i = n(647438),
    l = n(442837),
    a = n(796027),
    s = n(434404),
    o = n(999382),
    c = n(736617),
    d = n(566084),
    u = n(196961),
    g = n(203377);
function m() {
    let {
            vanityURLCode: e,
            hasChanges: t,
            errorDetails: n,
        } = (0, l.cj)([d.Z], () => ({
            vanityURLCode: d.Z.vanityURLCode,
            hasChanges: d.Z.hasChanges(),
            errorDetails: d.Z.errorDetails,
        })),
        { guild: m, submitting: p, errors: f, hasChanges: h } = (0, l.cj)([o.Z], () => o.Z.getProps()),
        b = i.useMemo(() => (null != n ? (0, u.i)(null == n ? void 0 : n.code) : (0, g.LG)(f)), [f, n]),
        x = i.useCallback(async () => {
            if (null != m && (t && (await (0, c.en)(m.id, e, { throwErr: !0 })), h)) {
                let e = {
                    premiumProgressBarEnabled: m.premiumProgressBarEnabled,
                    banner: m.banner,
                    splash: m.splash,
                };
                await s.Z.saveGuild(m.id, e, { throwErr: !0 });
            }
        }, [m, h, t, e]),
        j = i.useCallback(() => {
            null != m && (s.Z.init(m.id), (0, c.H7)());
        }, [m]);
    return (0, r.jsx)(a.Z, {
        submitting: p,
        errorMessage: b,
        onSave: x,
        onReset: j,
    });
}
