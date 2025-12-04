n.d(t, { Z: () => m }), n(388685);
var r = n(54381),
    i = n(120356),
    l = n.n(i),
    a = n(793030),
    s = n(704215),
    o = n(243778),
    c = n(665149),
    u = n(840767),
    d = n(45173),
    p = n(921944),
    f = n(140939),
    h = n(388032),
    g = n(547971);
function m(e) {
    let { className: t } = e,
        [n, i] = (0, o.US)([s.z.CHECKPOINT_2025_DESKTOP_UPSELL]),
        m = n === s.z.CHECKPOINT_2025_DESKTOP_UPSELL;
    return (0, r.jsxs)(r.Fragment, {
        children: [
            (0, r.jsx)(c.JO, {
                className: t,
                onClick: () => {
                    (0, u.Z)("header_bar"), m && i(p.L.INDIRECT_ACTION);
                },
                icon: a.d5i,
                tooltip: h.intl.string(f.default["CdU/PF"]),
                foreground: l()(g.iconForeground, m ? g.highlighted : null),
            }),
            m && (0, r.jsx)(d.Z, { markAsDismissed: i }),
        ],
    });
}
