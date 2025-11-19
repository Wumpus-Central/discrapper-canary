n.d(t, { Z: () => _ });
var r = n(54381);
n(473749);
var i = n(120356),
    a = n.n(i),
    o = n(681715),
    s = n(481060),
    l = n(785717),
    c = n(531301),
    u = n(228168),
    d = n(388032),
    f = n(205853);
function _(e) {
    let { userId: t, isVisible: n, onOpenProfile: i } = e,
        { note: _ } = (0, c.Z)(t),
        p = null != _ && "" !== _,
        h = p ? s.hH0 : s.Wos,
        m = p ? d.intl.string(d.t["gs+qcM"]) : d.intl.string(d.t["1ZZtts"]),
        g = p ? _ : d.intl.string(d.t["1ZZtts"]),
        { trackUserProfileAction: E } = (0, l.KZ)(),
        b = () => {
            E({ action: "PRESS_ADD_NOTE" }), null == i || i({ subsection: u.Tb.NOTE });
        };
    return (0, r.jsx)(o.u, {
        asContainer: !0,
        text: g,
        children: (0, r.jsx)(s.P3F, {
            "aria-label": m,
            onClick: b,
            className: a()(f.button, n && f.visible),
            children: (0, r.jsx)(h, {
                size: "xs",
                color: "currentColor",
            }),
        }),
    });
}
