n.d(t, { Z: () => x }), n(388685);
var i = n(255367),
    r = n(73800),
    s = n(704215),
    a = n(481060),
    l = n(809206),
    o = n(906732),
    c = n(243778),
    d = n(18438),
    u = n(158947),
    m = n(318110),
    p = n(150039),
    g = n(993413),
    h = n(921944),
    f = n(388032),
    b = n(526265);
function x(e) {
    let { user: t, guild: n, titleIcon: x } = e,
        { analyticsLocations: _ } = (0, o.ZP)(),
        j = null != n,
        {
            userNameplate: E,
            guildNameplate: C,
            pendingNameplate: O,
            pendingErrors: v,
        } = (0, p.Zx)(t, null == n ? void 0 : n.id),
        S = j
            ? [s.z.NAMEPLATE_GUILD_SETTINGS_PROFILE_PAGE_NEW_BADGE]
            : [s.z.NAMEPLATE_USER_SETTINGS_PROFILE_PAGE_NEW_BADGE],
        [T, I] = (0, c.US)(S),
        N = T === s.z.NAMEPLATE_USER_SETTINGS_PROFILE_PAGE_NEW_BADGE,
        y = T === s.z.NAMEPLATE_GUILD_SETTINGS_PROFILE_PAGE_NEW_BADGE,
        A = r.useCallback(() => {
            I(h.L.TAKE_ACTION),
                (0, m.f)({
                    analyticsLocations: _,
                    guildId: null == n ? void 0 : n.id,
                });
        }, [_, I, null == n ? void 0 : n.id]),
        P = r.useCallback(() => {
            (null == n ? void 0 : n.id) != null ? (0, d.RH)(null) : (0, l.Rx)(null);
        }, [null == n ? void 0 : n.id]);
    return (0, i.jsx)(g.Z, {
        title: f.intl.string(f.t.x5CoXV),
        titleIcon: N || y ? (0, i.jsx)(u.Z, { className: b.newBadge }) : x,
        errors: v,
        showBorder: y,
        hasBackground: y,
        description:
            y &&
            (0, i.jsx)(a.Text, {
                variant: "text-md/normal",
                color: "text-secondary",
                children: f.intl.string(f.t.ca69xs),
            }),
        children: (0, i.jsxs)("div", {
            className: b.section,
            children: [
                (0, i.jsx)(a.zxk, {
                    variant: "primary",
                    size: "sm",
                    text: f.intl.string(f.t.BwdeMz),
                    onClick: A,
                }),
                (void 0 === O ? (j ? C : E) != null : null != O) &&
                    (0, i.jsx)(a.zxk, {
                        variant: "secondary",
                        size: "sm",
                        text: f.intl.string(f.t["9zwziY"]),
                        onClick: P,
                    }),
            ],
        }),
    });
}
