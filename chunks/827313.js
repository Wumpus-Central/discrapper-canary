r.d(n, {
    Z: function () {
        return d;
    }
});
var i = r(200651);
r(192379);
var a = r(481060),
    s = r(531301),
    o = r(475413),
    l = r(228168),
    u = r(388032),
    c = r(734570);
function d(e) {
    let { userId: n, isHovering: r, onOpenProfile: d } = e,
        { note: f } = (0, s.Z)(n),
        _ = null != f && '' !== f;
    return (0, i.jsx)(o.y, {
        action: 'PRESS_ADD_NOTE',
        icon: _ ? a.PaperIcon : a.PaperPlusIcon,
        tooltipText: _ ? f : u.intl.string(u.t.Dglxra),
        tooltipClassName: _ ? c.tooltip : void 0,
        isHovering: r,
        onClick: () => (null == d ? void 0 : d({ subsection: l.Tb.NOTE }))
    });
}
