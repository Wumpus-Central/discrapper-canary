n.d(t, { Z: () => f }), n(47120);
var r = n(200651),
    i = n(192379),
    s = n(704215),
    a = n(481060),
    l = n(906732),
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
        { analyticsLocations: n } = (0, l.ZP)(),
        f = t.nameplate,
        { pendingNameplate: b, pendingErrors: N } = (0, u._A)(),
        x = [s.z.NAMEPLATE_USER_SETTINGS_PROFILE_PAGE_NEW_BADGE],
        [_, E] = (0, o.US)(x),
        j = _ === s.z.NAMEPLATE_USER_SETTINGS_PROFILE_PAGE_NEW_BADGE,
        O = i.useCallback(() => {
            E(g.L.TAKE_ACTION), (0, d.f)({ analyticsLocations: n });
        }, [n, E]),
        C = i.useCallback(() => {
            (0, u.Wh)(null);
        }, []);
    return (0, r.jsx)(m.Z, {
        title: p.NW.string(p.t.x5CoXV),
        titleIcon: j ? (0, r.jsx)(c.Z, { className: h.newBadge }) : void 0,
        errors: N,
        children: (0, r.jsxs)('div', {
            className: h.section,
            children: [
                (0, r.jsx)(a.zxk, {
                    size: a.zxk.Sizes.SMALL,
                    onClick: O,
                    children: p.NW.string(p.t.NzNLv7)
                }),
                (void 0 === b ? null != f : null != b) &&
                    (0, r.jsx)(a.zxk, {
                        size: a.zxk.Sizes.SMALL,
                        color: a.zxk.Colors.PRIMARY,
                        look: a.zxk.Looks.LINK,
                        onClick: C,
                        children: p.NW.string(p.t.Vskkdn)
                    })
            ]
        })
    });
}
