n.d(t, { Z: () => l }), n(388685);
var r = n(54381),
    i = n(473749),
    a = n(120356),
    o = n.n(a),
    s = n(171532);
function l(e) {
    let { className: t } = e,
        [n] = i.useState(() => Math.floor(60 * Math.random()) + 20),
        [a] = i.useState(() => Math.floor(60 * Math.random()) + 20),
        [l] = i.useState(() => Math.floor(1600 * Math.random()) / 1000);
    return (0, r.jsx)("div", {
        className: o()(t, s.placeholderCard),
        style: { animationDelay: "".concat(l, "s") },
        children: (0, r.jsxs)("div", {
            className: s.details,
            children: [
                (0, r.jsx)("div", {
                    className: s.titleContainer,
                    children: (0, r.jsx)("div", {
                        className: s.placeholderTitle,
                        style: { width: "".concat(n, "%") },
                    }),
                }),
                (0, r.jsx)("div", {
                    className: s.descriptionContainer,
                    children: (0, r.jsx)("div", {
                        className: s.placeholderDescription,
                        style: { width: "".concat(a, "%") },
                    }),
                }),
            ],
        }),
    });
}
