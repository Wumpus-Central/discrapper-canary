n.d(t, { Z: () => u });
var r = n(255367);
n(73800);
var i = n(481060),
    a = n(531301),
    o = n(475413),
    s = n(228168),
    l = n(388032),
    c = n(148488);
function u(e) {
    let { userId: t, isHovering: n, onOpenProfile: u } = e,
        { note: d } = (0, a.Z)(t),
        _ = null != d && '' !== d;
    return (0, r.jsx)(o.y, {
        action: 'PRESS_ADD_NOTE',
        icon: _ ? i.hH0 : i.Wos,
        tooltipText: _ ? d : l.intl.string(l.t['1ZZttr']),
        tooltipClassName: _ ? c.tooltip : void 0,
        isHovering: n,
        onClick: () => (null == u ? void 0 : u({ subsection: s.Tb.NOTE }))
    });
}
