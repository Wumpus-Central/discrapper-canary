r.d(n, {
    Z: function () {
        return d;
    }
});
var i = r(200651);
r(192379);
var a = r(481060),
    o = r(531301),
    s = r(475413),
    l = r(228168),
    u = r(388032),
    c = r(734570);
function d(e) {
    let { userId: n, isHovering: r, onOpenProfile: d } = e,
        { note: f } = (0, o.Z)(n),
        p = null != f && '' !== f;
    return (0, i.jsx)(s.y, {
        action: 'PRESS_ADD_NOTE',
        icon: p ? a.PaperIcon : a.PaperPlusIcon,
        tooltipText: p ? f : u.intl.string(u.t.Dglxra),
        tooltipClassName: p ? c.tooltip : void 0,
        isHovering: r,
        onClick: () => (null == d ? void 0 : d({ subsection: l.Tb.NOTE }))
    });
}
