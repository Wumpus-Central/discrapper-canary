n.d(t, { Z: () => m });
var r = n(200651),
    i = n(442837),
    s = n(481060),
    a = n(809206),
    l = n(612293),
    o = n(25990),
    c = n(993413),
    d = n(388032),
    u = n(52304);
function m(e) {
    let { user: t } = e,
        n = (0, i.e7)([o.Z], () => o.Z.getPendingNameplate()),
        m = null != t.nameplate && null !== n;
    return (0, r.jsx)(c.Z, {
        title: d.NW.string(d.t.x5CoXV),
        children: (0, r.jsxs)('div', {
            className: u.section,
            children: [
                (0, r.jsx)(s.zxk, {
                    size: s.zxk.Sizes.SMALL,
                    onClick: () => (0, l.f)(),
                    children: d.NW.string(d.t.NzNLv7)
                }),
                m &&
                    (0, r.jsx)(s.zxk, {
                        size: s.zxk.Sizes.SMALL,
                        color: s.zxk.Colors.PRIMARY,
                        look: s.zxk.Looks.LINK,
                        onClick: () => (0, a.KP)(null),
                        children: d.NW.string(d.t.Vskkdn)
                    })
            ]
        })
    });
}
