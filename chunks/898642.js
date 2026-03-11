n.d(t, { A: () => _ });
var i = n(627968);
n(64700);
var r = n(311907),
    l = n(827734),
    a = n(397927),
    s = n(189252),
    o = n(287809),
    d = n(954571),
    c = n(975571),
    u = n(427262),
    A = n(652215),
    h = n(985018);
function _(e) {
    let { focusSectionProps: t } = e,
        n = (0, r.bG)([o.default], () => o.default.getCurrentUser()),
        _ = (0, u.mv)(n);
    return (0, i.jsx)(a.MzZ, {
        href: c.C,
        target: "_blank",
        tabIndex: -1,
        children: (0, i.jsx)(s.A, {
            color: _ ? l.A.unsafe_rawColors.GREEN_360.css : "currentColor",
            onClick: () => d.default.track(A.HAw.HELP_CLICKED, { highlighted: _ }),
            icon: a.cBN,
            tooltip: h.intl.string(h.t["cqEoj/"]),
            ...t,
        }),
    });
}
