n.d(t, { A: () => d }), n(134528), n(947204);
var a = n(627968);
n(64700);
var s = n(397927),
    i = n(890687),
    l = n(985018),
    r = n(406471);
function o(e) {
    let { header: t, children: n } = e;
    return (0, a.jsxs)("div", {
        className: r.Nr,
        children: [
            (0, a.jsxs)("div", {
                className: r.wx,
                children: [
                    (0, a.jsx)(s.EpV, {
                        size: "custom",
                        color: "currentColor",
                        className: r.Kk,
                        width: 16,
                        height: 16,
                    }),
                    (0, a.jsx)(s.Heading, { color: "text-default", variant: "heading-sm/medium", children: t }),
                ],
            }),
            (0, a.jsx)(s.Text, { color: "text-muted", variant: "text-xs/normal", className: r.r2, children: n }),
        ],
    });
}
let d = function (e) {
    let { quest: t } = e,
        n = (0, i.aC)(t);
    if (0 === n.length) return null;
    let s = n.at(0);
    return s === l.intl.string(l.t.BV6xDm)
        ? (0, a.jsx)(o, { header: l.intl.string(l.t.onh6ct), children: l.intl.string(l.t.arVHRA) })
        : s === l.intl.string(l.t.MFGxFM)
          ? (0, a.jsx)(o, { header: l.intl.string(l.t.JPihZA), children: l.intl.string(l.t.MFGxFM) })
          : null;
};
