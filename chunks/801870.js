n.d(e, { A: () => o });
var i = n(627968);
n(64700);
var s = n(834730),
    a = n(985018),
    l = n(462428);
function r(t) {
    let { rewardName: e } = t;
    return (0, i.jsx)(s.E, {
        variant: "text-xs/medium",
        className: l.tI,
        children: a.intl.format(a.t.loyTil, {
            rewardName: (t, n) => (0, i.jsx)(s.E, { variant: "text-xs/medium", className: l.Ht, children: e }, n),
            verticalDivider: (t, e) => (0, i.jsx)("div", { className: l.yF }, e),
        }),
    });
}
var d = n(239455);
function o(t) {
    let { rewardName: e, children: n } = t;
    return (0, i.jsxs)("div", { className: d.k, children: [(0, i.jsx)(r, { rewardName: e }), n] });
}
