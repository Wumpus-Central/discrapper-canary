e.d(i, { default: () => r });
var n = e(200651);
e(192379);
var a = e(481060),
    l = e(239091),
    o = e(560067),
    s = e(675999),
    d = e(388032);
function r(t) {
    let { onSelect: i } = t;
    return (0, n.jsxs)(a.v2r, {
        navId: 'guild-context',
        'aria-label': d.NW.string(d.t.HpQykZ),
        onClose: l.Zy,
        onSelect: i,
        children: [
            (0, n.jsx)(a.sNh, {
                id: 'join',
                label: d.NW.string(d.t.yRjK4u),
                action: () =>
                    o.Z.openCreateGuildModal({
                        initialSlide: s._m.JOIN_GUILD,
                        location: 'Guild List - ContextMenu'
                    })
            }),
            (0, n.jsx)(a.sNh, {
                id: 'create',
                label: d.NW.string(d.t.B44MTk),
                action: () => o.Z.openCreateGuildModal({ location: 'Guild List - ContextMenu' })
            })
        ]
    });
}
