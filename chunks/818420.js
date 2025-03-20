n.d(t, { Z: () => f }), n(47120);
var r = n(200651),
    i = n(442837),
    s = n(704215),
    a = n(481060),
    l = n(809206),
    o = n(243778),
    c = n(612293),
    d = n(158947),
    u = n(25990),
    m = n(993413),
    g = n(921944),
    p = n(388032),
    h = n(52304);
function f(e) {
    let { user: t } = e,
        n = (0, i.e7)([u.Z], () => u.Z.getPendingNameplate()),
        f = null != t.nameplate && null !== n,
        x = [s.z.NAMEPLATE_USER_SETTINGS_PROFILE_PAGE_NEW_BADGE],
        [N, b] = (0, o.US)(x),
        _ = N === s.z.NAMEPLATE_USER_SETTINGS_PROFILE_PAGE_NEW_BADGE;
    return (0, r.jsx)(m.Z, {
        title: p.NW.string(p.t.x5CoXV),
        titleIcon: _ ? (0, r.jsx)(d.Z, { className: h.newBadge }) : void 0,
        children: (0, r.jsxs)('div', {
            className: h.section,
            children: [
                (0, r.jsx)(a.zxk, {
                    size: a.zxk.Sizes.SMALL,
                    onClick: () => {
                        b(g.L.TAKE_ACTION), (0, c.f)();
                    },
                    children: p.NW.string(p.t.NzNLv7)
                }),
                f &&
                    (0, r.jsx)(a.zxk, {
                        size: a.zxk.Sizes.SMALL,
                        color: a.zxk.Colors.PRIMARY,
                        look: a.zxk.Looks.LINK,
                        onClick: () => (0, l.KP)(null),
                        children: p.NW.string(p.t.Vskkdn)
                    })
            ]
        })
    });
}
