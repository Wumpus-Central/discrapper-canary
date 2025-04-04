n.d(t, { Z: () => u });
var r = n(200651);
n(192379);
var i = n(481060),
    o = n(531301),
    a = n(475413),
    s = n(228168),
    l = n(388032),
    c = n(148488);
function u(e) {
    let { userId: t, isHovering: n, onOpenProfile: u } = e,
        { note: d } = (0, o.Z)(t),
        f = null != d && '' !== d;
    return (0, r.jsx)(a.y, {
        action: 'PRESS_ADD_NOTE',
        icon: f ? i.hH0 : i.Wos,
        tooltipText: f ? d : l.NW.string(l.t['1ZZttr']),
        tooltipClassName: f ? c.tooltip : void 0,
        isHovering: n,
        onClick: () => (null == u ? void 0 : u({ subsection: s.Tb.NOTE }))
    });
}
