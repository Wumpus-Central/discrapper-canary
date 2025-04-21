n.d(t, { Z: () => f }), n(388685);
var i = n(200651),
    r = n(192379),
    s = n(704215),
    l = n(481060),
    a = n(906732),
    o = n(243778),
    c = n(158947),
    d = n(318110),
    u = n(150039),
    m = n(993413),
    g = n(921944),
    p = n(388032),
    h = n(388898);
function f(e) {
    let { user: t } = e,
        { analyticsLocations: n } = (0, a.ZP)(),
        f = t.nameplate,
        { pendingNameplate: b, pendingErrors: _ } = (0, u._A)(),
        x = [s.z.NAMEPLATE_USER_SETTINGS_PROFILE_PAGE_NEW_BADGE],
        [E, j] = (0, o.US)(x),
        C = E === s.z.NAMEPLATE_USER_SETTINGS_PROFILE_PAGE_NEW_BADGE,
        O = r.useCallback(() => {
            j(g.L.TAKE_ACTION), (0, d.f)({ analyticsLocations: n });
        }, [n, j]),
        S = r.useCallback(() => {
            (0, u.Wh)(null);
        }, []);
    return (0, i.jsx)(m.Z, {
        title: p.intl.string(p.t.x5CoXV),
        titleIcon: C ? (0, i.jsx)(c.Z, { className: h.newBadge }) : void 0,
        errors: _,
        children: (0, i.jsxs)('div', {
            className: h.section,
            children: [
                (0, i.jsx)(l.zxk, {
                    size: l.zxk.Sizes.SMALL,
                    onClick: O,
                    children: p.intl.string(p.t.NzNLv7)
                }),
                (void 0 === b ? null != f : null != b) &&
                    (0, i.jsx)(l.zxk, {
                        size: l.zxk.Sizes.SMALL,
                        color: l.zxk.Colors.PRIMARY,
                        look: l.zxk.Looks.LINK,
                        onClick: S,
                        children: p.intl.string(p.t.Vskkdn)
                    })
            ]
        })
    });
}
