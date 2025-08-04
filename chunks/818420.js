(n.d(t, { Z: () => x }), n(388685));
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
    b = n(388898);
function x(e) {
    let { user: t, guild: n } = e,
        { analyticsLocations: x } = (0, o.ZP)(),
        _ = null != n,
        { userNameplate: j, guildNameplate: E, pendingNameplate: C, pendingErrors: O } = (0, p.Zx)(t, null == n ? void 0 : n.id),
        v = [s.z.NAMEPLATE_USER_SETTINGS_PROFILE_PAGE_NEW_BADGE],
        [S, T] = (0, c.US)(v),
        I = S === s.z.NAMEPLATE_USER_SETTINGS_PROFILE_PAGE_NEW_BADGE,
        N = r.useCallback(() => {
            (T(h.L.TAKE_ACTION),
                (0, m.f)({
                    analyticsLocations: x,
                    guildId: null == n ? void 0 : n.id
                }));
        }, [x, T, null == n ? void 0 : n.id]),
        y = r.useCallback(() => {
            (null == n ? void 0 : n.id) != null ? (0, d.RH)(null) : (0, l.Rx)(null);
        }, [null == n ? void 0 : n.id]);
    return (0, i.jsx)(g.Z, {
        title: f.intl.string(f.t.x5CoXV),
        titleIcon: I ? (0, i.jsx)(u.Z, { className: b.newBadge }) : void 0,
        errors: O,
        children: (0, i.jsxs)('div', {
            className: b.section,
            children: [
                (0, i.jsx)(a.zxk, {
                    variant: 'primary',
                    size: 'sm',
                    text: f.intl.string(f.t.BwdeMz),
                    onClick: N
                }),
                (void 0 === C ? (_ ? E : j) != null : null != C) &&
                    (0, i.jsx)(a.zxk, {
                        variant: 'secondary',
                        size: 'sm',
                        text: f.intl.string(f.t['9zwziY']),
                        onClick: y
                    })
            ]
        })
    });
}
