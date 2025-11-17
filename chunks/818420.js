n.d(t, { Z: () => f });
var r = n(54381),
    i = n(473749),
    a = n(481060),
    o = n(906732),
    s = n(318110),
    l = n(150039),
    c = n(993413),
    u = n(388032),
    d = n(526265);
function f(e) {
    let { user: t, guild: n, titleIcon: f } = e,
        { analyticsLocations: _ } = (0, o.ZP)(),
        p = null != n,
        {
            userNameplate: h,
            guildNameplate: m,
            pendingNameplate: g,
            pendingErrors: E,
        } = (0, l.Zx)(t, null == n ? void 0 : n.id),
        b = void 0 === g ? (p ? m : h) != null : null != g,
        y = i.useCallback(() => {
            (0, s.f)({
                analyticsLocations: _,
                guildId: null == n ? void 0 : n.id,
            });
        }, [_, null == n ? void 0 : n.id]),
        O = i.useCallback(() => {
            (0, l.Wh)(null, null == n ? void 0 : n.id);
        }, [null == n ? void 0 : n.id]);
    return (0, r.jsx)(c.Z, {
        title: u.intl.string(u.t.x5CoXR),
        titleIcon: f,
        errors: E,
        children: (0, r.jsxs)("div", {
            className: d.section,
            children: [
                (0, r.jsx)(a.Button, {
                    variant: "primary",
                    size: "sm",
                    text: u.intl.string(u.t.BwdeM1),
                    onClick: y,
                }),
                b &&
                    (0, r.jsx)(a.Button, {
                        variant: "secondary",
                        size: "sm",
                        text: p ? u.intl.string(u.t.CHf9iJ) : u.intl.string(u.t["9zwziY"]),
                        onClick: O,
                    }),
            ],
        }),
    });
}
