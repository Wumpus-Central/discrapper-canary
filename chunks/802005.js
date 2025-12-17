n.d(t, { C: () => f });
var r = n(54381),
    i = n(473749),
    l = n(442837),
    a = n(796027),
    s = n(434404),
    o = n(999382),
    c = n(736617),
    d = n(566084),
    u = n(196961),
    g = n(203377);
function f() {
    let {
            vanityURLCode: e,
            hasChanges: t,
            errorDetails: n,
        } = (0, l.cj)([d.Z], () => ({
            vanityURLCode: d.Z.vanityURLCode,
            hasChanges: d.Z.hasChanges(),
            errorDetails: d.Z.errorDetails,
        })),
        { guild: f, submitting: m, errors: b, hasChanges: p } = (0, l.cj)([o.Z], () => o.Z.getProps()),
        h = i.useMemo(() => (null != n ? (0, u.i)(null == n ? void 0 : n.code) : (0, g.LG)(b)), [b, n]),
        x = i.useCallback(async () => {
            if (null != f && (t && (await (0, c.en)(f.id, e, { throwErr: !0 })), p)) {
                let e = {
                    premiumProgressBarEnabled: f.premiumProgressBarEnabled,
                    banner: f.banner,
                    splash: f.splash,
                };
                await s.Z.saveGuild(f.id, e, { throwErr: !0 });
            }
        }, [f, p, t, e]),
        j = i.useCallback(() => {
            null != f && (s.Z.init(f.id), (0, c.H7)());
        }, [f]);
    return (0, r.jsx)(a.Z, {
        submitting: m,
        errorMessage: h,
        onSave: x,
        onReset: j,
    });
}
