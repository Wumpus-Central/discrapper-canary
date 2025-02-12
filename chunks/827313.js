n.d(t, { Z: () => c });
var i = n(200651);
n(192379);
var r = n(481060),
    a = n(531301),
    s = n(475413),
    o = n(228168),
    l = n(388032),
    u = n(244570);
function c(e) {
    let { userId: t, isHovering: n, onOpenProfile: c } = e,
        { note: d } = (0, a.Z)(t),
        f = null != d && '' !== d;
    return (0, i.jsx)(s.y, {
        action: 'PRESS_ADD_NOTE',
        icon: f ? r.hH0 : r.Wos,
        tooltipText: f ? d : l.intl.string(l.t.Dglxra),
        tooltipClassName: f ? u.tooltip : void 0,
        isHovering: n,
        onClick: () => (null == c ? void 0 : c({ subsection: o.Tb.NOTE }))
    });
}
