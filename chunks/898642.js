n.d(t, { A: () => _ });
var i = n(627968);
n(64700);
var r = n(311907),
    l = n(827734),
    a = n(397927),
    s = n(287809),
    o = n(954571),
    d = n(975571),
    c = n(427262),
    u = n(58736),
    A = n(652215),
    h = n(985018);
function _(e) {
    let { className: t, focusSectionProps: n } = e,
        _ = (0, r.bG)([s.default], () => s.default.getCurrentUser()),
        m = (0, c.mv)(_);
    return (0, i.jsx)(a.MzZ, {
        href: d.C,
        target: "_blank",
        tabIndex: -1,
        children: (0, i.jsx)(u.In, {
            color: m ? l.A.unsafe_rawColors.GREEN_360.css : "currentColor",
            className: t,
            onClick: () => o.default.track(A.HAw.HELP_CLICKED, { highlighted: m }),
            icon: a.cBN,
            tooltip: h.intl.string(h.t["cqEoj/"]),
            ...n,
        }),
    });
}
