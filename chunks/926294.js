n.d(t, {
    $: () => l,
    G: () => c,
}),
    n(388685);
var r = n(54381),
    i = n(473749),
    a = n(120356),
    o = n.n(a),
    s = n(171532);
function l() {
    let [e] = i.useState(() => Math.floor(1600 * Math.random()) / 1000);
    return (0, r.jsx)("div", {
        className: o()(s.cardImageContainer, s.placeholderCard),
        style: { animationDelay: "".concat(e, "s") },
    });
}
function c() {
    let [e] = i.useState(() => Math.floor(60 * Math.random()) + 20);
    return (0, r.jsx)("div", {
        className: s.placeholderText,
        style: { width: "".concat(e, "%") },
    });
}
