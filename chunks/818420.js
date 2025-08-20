n.d(t, { Z: () => E }), n(388685);
var r = n(951288),
    i = n(647438),
    a = n(704215),
    o = n(481060),
    s = n(809206),
    l = n(906732),
    c = n(243778),
    u = n(18438),
    d = n(158947),
    f = n(318110),
    _ = n(150039),
    p = n(993413),
    h = n(921944),
    m = n(388032),
    g = n(526265);
function E(e) {
    let { user: t, guild: n, titleIcon: E } = e,
        { analyticsLocations: b } = (0, l.ZP)(),
        y = null != n,
        {
            userNameplate: O,
            guildNameplate: v,
            pendingNameplate: I,
            pendingErrors: T,
        } = (0, _.Zx)(t, null == n ? void 0 : n.id),
        S = void 0 === I ? (y ? v : O) != null : null != I,
        A = y
            ? [a.z.NAMEPLATE_GUILD_SETTINGS_PROFILE_PAGE_NEW_BADGE]
            : [a.z.NAMEPLATE_USER_SETTINGS_PROFILE_PAGE_NEW_BADGE],
        [C, N] = (0, c.US)(A),
        R = C === a.z.NAMEPLATE_USER_SETTINGS_PROFILE_PAGE_NEW_BADGE,
        P = C === a.z.NAMEPLATE_GUILD_SETTINGS_PROFILE_PAGE_NEW_BADGE,
        w = i.useCallback(() => {
            N(h.L.TAKE_ACTION),
                (0, f.f)({
                    analyticsLocations: b,
                    guildId: null == n ? void 0 : n.id,
                });
        }, [b, N, null == n ? void 0 : n.id]),
        D = i.useCallback(() => {
            (null == n ? void 0 : n.id) != null ? (0, u.RH)(null) : (0, s.Rx)(null);
        }, [null == n ? void 0 : n.id]);
    return (0, r.jsx)(p.Z, {
        title: m.intl.string(m.t.x5CoXV),
        titleIcon: R || P ? (0, r.jsx)(d.Z, { className: g.newBadge }) : E,
        errors: T,
        showBorder: P,
        hasBackground: P,
        description:
            P &&
            (0, r.jsx)(o.Text, {
                variant: "text-md/normal",
                color: "text-secondary",
                children: m.intl.string(m.t.ca69xs),
            }),
        children: (0, r.jsxs)("div", {
            className: g.section,
            children: [
                (0, r.jsx)(o.zxk, {
                    variant: "primary",
                    size: "sm",
                    text: m.intl.string(m.t.BwdeMz),
                    onClick: w,
                }),
                S &&
                    (0, r.jsx)(o.zxk, {
                        variant: "secondary",
                        size: "sm",
                        text: y ? m.intl.string(m.t.CHf9iI) : m.intl.string(m.t["9zwziY"]),
                        onClick: D,
                    }),
            ],
        }),
    });
}
