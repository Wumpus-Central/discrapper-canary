n.d(t, { Z: () => p });
var r = n(951288),
    i = n(647438),
    a = n(481060),
    o = n(809206),
    s = n(906732),
    l = n(18438),
    c = n(318110),
    u = n(150039),
    d = n(993413),
    f = n(388032),
    _ = n(526265);
function p(e) {
    let { user: t, guild: n, titleIcon: p } = e,
        { analyticsLocations: h } = (0, s.ZP)(),
        m = null != n,
        {
            userNameplate: g,
            guildNameplate: E,
            pendingNameplate: b,
            pendingErrors: y,
        } = (0, u.Zx)(t, null == n ? void 0 : n.id),
        O = void 0 === b ? (m ? E : g) != null : null != b,
        v = i.useCallback(() => {
            (0, c.f)({
                analyticsLocations: h,
                guildId: null == n ? void 0 : n.id,
            });
        }, [h, null == n ? void 0 : n.id]),
        I = i.useCallback(() => {
            (null == n ? void 0 : n.id) != null ? (0, l.RH)(null) : (0, o.Rx)(null);
        }, [null == n ? void 0 : n.id]);
    return (0, r.jsx)(d.Z, {
        title: f.intl.string(f.t.x5CoXV),
        titleIcon: p,
        errors: y,
        children: (0, r.jsxs)("div", {
            className: _.section,
            children: [
                (0, r.jsx)(a.zxk, {
                    variant: "primary",
                    size: "sm",
                    text: f.intl.string(f.t.BwdeMz),
                    onClick: v,
                }),
                O &&
                    (0, r.jsx)(a.zxk, {
                        variant: "secondary",
                        size: "sm",
                        text: m ? f.intl.string(f.t.CHf9iI) : f.intl.string(f.t["9zwziY"]),
                        onClick: I,
                    }),
            ],
        }),
    });
}
