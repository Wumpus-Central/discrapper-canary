n.d(t, { C: () => g });
var r = n(951288),
    i = n(647438),
    l = n(442837),
    s = n(852860),
    a = n(434404),
    o = n(999382),
    c = n(736617),
    d = n(566084),
    u = n(196961),
    m = n(203377);
function g() {
    let {
            vanityURLCode: e,
            hasChanges: t,
            errorDetails: n,
        } = (0, l.cj)([d.Z], () => ({
            vanityURLCode: d.Z.vanityURLCode,
            hasChanges: d.Z.hasChanges(),
            errorDetails: d.Z.errorDetails,
        })),
        { guild: g, submitting: p, errors: f, hasChanges: h } = (0, l.cj)([o.Z], () => o.Z.getProps()),
        b = i.useMemo(() => (null != n ? (0, u.i)(null == n ? void 0 : n.code) : (0, m.LG)(f)), [f, n]),
        x = i.useCallback(async () => {
            if (null != g && (t && (await (0, c.en)(g.id, e, { throwErr: !0 })), h)) {
                let e = {
                    premiumProgressBarEnabled: g.premiumProgressBarEnabled,
                    banner: g.banner,
                    splash: g.splash,
                };
                await a.Z.saveGuild(g.id, e, { throwErr: !0 });
            }
        }, [g, h, t, e]),
        j = i.useCallback(() => {
            null != g && (a.Z.init(g.id), (0, c.H7)());
        }, [g]);
    return (0, r.jsx)(s.Z, {
        submitting: p,
        errorMessage: b,
        onSave: x,
        onReset: j,
    });
}
