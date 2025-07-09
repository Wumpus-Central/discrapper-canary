(n.d(t, { Z: () => f }), n(388685));
var i = n(255367),
    r = n(73800),
    s = n(704215),
    a = n(481060),
    l = n(906732),
    o = n(243778),
    c = n(158947),
    d = n(318110),
    u = n(150039),
    m = n(993413),
    p = n(921944),
    g = n(388032),
    h = n(388898);
function f(e) {
    let { user: t } = e,
        { analyticsLocations: n } = (0, l.ZP)(),
        f = t.nameplate,
        { pendingNameplate: b, pendingErrors: x } = (0, u._A)(),
        _ = [s.z.NAMEPLATE_USER_SETTINGS_PROFILE_PAGE_NEW_BADGE],
        [j, E] = (0, o.US)(_),
        O = j === s.z.NAMEPLATE_USER_SETTINGS_PROFILE_PAGE_NEW_BADGE,
        C = r.useCallback(() => {
            (E(p.L.TAKE_ACTION), (0, d.f)({ analyticsLocations: n }));
        }, [n, E]),
        v = r.useCallback(() => {
            (0, u.Wh)(null);
        }, []);
    return (0, i.jsx)(m.Z, {
        title: g.intl.string(g.t.x5CoXV),
        titleIcon: O ? (0, i.jsx)(c.Z, { className: h.newBadge }) : void 0,
        errors: x,
        children: (0, i.jsxs)('div', {
            className: h.section,
            children: [
                (0, i.jsx)(a.zxk, {
                    variant: 'primary',
                    size: 'sm',
                    text: g.intl.string(g.t.BwdeMz),
                    onClick: C
                }),
                (void 0 === b ? null != f : null != b) &&
                    (0, i.jsx)(a.zxk, {
                        variant: 'secondary',
                        size: 'sm',
                        text: g.intl.string(g.t['9zwziY']),
                        onClick: v
                    })
            ]
        })
    });
}
