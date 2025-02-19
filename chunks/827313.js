n.d(t, { Z: () => f });
var r = n(200651);
n(192379);
var i = n(481060),
    o = n(748545),
    a = n(531301),
    s = n(475413),
    l = n(228168),
    c = n(388032),
    u = n(941313);
function d(e, t, n) {
    return e ? n : t ? c.NW.string(c.t['1ZZttr']) : c.NW.string(c.t.Dglxra);
}
function f(e) {
    let { userId: t, isHovering: n, onOpenProfile: c } = e,
        { note: f } = (0, a.Z)(t),
        p = null != f && '' !== f,
        _ = (0, o.kc)({ location: 'UserProfileNoteButton' });
    return (0, r.jsx)(s.y, {
        action: 'PRESS_ADD_NOTE',
        icon: p ? i.hH0 : i.Wos,
        tooltipText: d(p, _, f),
        tooltipClassName: p ? u.tooltip : void 0,
        isHovering: n,
        onClick: () => (null == c ? void 0 : c({ subsection: l.Tb.NOTE }))
    });
}
