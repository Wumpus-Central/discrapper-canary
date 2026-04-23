n.d(t, { A: () => E });
var i = n(627968);
n(64700);
var r = n(311907),
    a = n(827734),
    l = n(349288),
    s = n(290136),
    o = n(189252),
    d = n(287809),
    u = n(954571),
    c = n(975571),
    A = n(427262),
    h = n(652215),
    _ = n(985018);
function E(e) {
    let { focusSectionProps: t } = e,
        n = (0, r.bG)([d.default], () => d.default.getCurrentUser()),
        E = (0, A.mv)(n);
    return (0, i.jsx)(l.Anchor, {
        href: c.C,
        target: "_blank",
        tabIndex: -1,
        children: (0, i.jsx)(o.A, {
            color: E ? a.A.unsafe_rawColors.GREEN_360.css : "currentColor",
            onClick: () => u.default.track(h.HAw.HELP_CLICKED, { highlighted: E }),
            icon: s.c,
            tooltip: _.intl.string(_.t["cqEoj/"]),
            ...t,
        }),
    });
}
