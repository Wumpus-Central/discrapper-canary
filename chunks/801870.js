i.d(e, { A: () => o });
var s = i(477900);
i(582128);
var n = i(834730),
    a = i(375708),
    r = i(37905);
function l(t) {
    let { rewardName: e } = t;
    return (0, s.jsx)(n.E, {
        variant: "text-xs/medium",
        className: r.tI,
        children: a.intl.format(a.t.loyTil, {
            rewardName: (t, i) => (0, s.jsx)(n.E, { variant: "text-xs/medium", className: r.Ht, children: e }, i),
            verticalDivider: (t, e) => (0, s.jsx)("div", { className: r.yF }, e),
        }),
    });
}
var c = i(682474);
function o(t) {
    let { rewardName: e, children: i } = t;
    return (0, s.jsxs)("div", { className: c.k, children: [(0, s.jsx)(l, { rewardName: e }), i] });
}
