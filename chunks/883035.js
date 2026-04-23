n.d(t, { A: () => u }), n(134528), n(947204);
var i = n(627968);
n(64700);
var s = n(695366),
    l = n(534514),
    a = n(834730),
    r = n(890687),
    o = n(985018),
    d = n(909714);
function c(e) {
    let { header: t, children: n } = e;
    return (0, i.jsxs)("div", {
        className: d.Nr,
        children: [
            (0, i.jsxs)("div", {
                className: d.wx,
                children: [
                    (0, i.jsx)(s.E, { size: "custom", color: "currentColor", className: d.Kk, width: 16, height: 16 }),
                    (0, i.jsx)(l.D, { color: "text-default", variant: "heading-sm/medium", children: t }),
                ],
            }),
            (0, i.jsx)(a.E, { color: "text-muted", variant: "text-xs/normal", className: d.r2, children: n }),
        ],
    });
}
let u = function (e) {
    let { quest: t } = e,
        n = (0, r.aC)(t);
    if (0 === n.length) return null;
    let s = n.at(0);
    return s === o.intl.string(o.t.BV6xDm)
        ? (0, i.jsx)(c, { header: o.intl.string(o.t.onh6ct), children: o.intl.string(o.t.arVHRA) })
        : s === o.intl.string(o.t.MFGxFM)
          ? (0, i.jsx)(c, { header: o.intl.string(o.t.JPihZA), children: o.intl.string(o.t.MFGxFM) })
          : null;
};
